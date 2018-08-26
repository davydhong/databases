var db = require('../db');
var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};
module.exports = {
  messages: {
    get: function() {},
    post: function(request, callback) {
      console.log('begin processing messages');
      var data = '';
      // console.log(request.body);
      // // request.on('end', function() {
      // console.log('something is Happening1');
      console.log('MESSAGE BODY', request.body);
      var textToInsert = request.body['message'];
      var roomNameToInsert = request.body['roomname'];
      var table = 'messages';
      var query = `INSERT INTO ${table}(TEXT,RoomNames)
        VALUES("${textToInsert}","${roomNameToInsert}");`;
      console.log('MESSAGES POST Query:', query);
      db.connection.query(query, (error, results, fields) => {
        if (error) {
          throw new Error(error);
        } else {
          console.log('MESSAGES POSTED!', results);
          callback(results);
        }
      });
      // });
    }
  },

  users: {
    // Ditto as above.
    get: function() {},
    post: function(request, callback) {
      console.log('begin processing users');
      var data = '';
      request.on('data', function(chunk) {
        console.log('crap');
        data += chunk;
      });
      // console.log(request.body);
      // // request.on('end', function() {
      // console.log('something is Happening1');
      console.log(request.body);
      var usernameToInsert = request.body['username'];
      console.log(request.body['username']);
      var table = 'Users';
      var query = `INSERT INTO ${table}(UserID)
        VALUES('${usernameToInsert}');`;
      console.log('USER POST Query:', query);
      db.connection.query(query, (error, results, fields) => {
        if (error) {
          throw new Error(error);
        } else {
          console.log('USER POSTED!', results);
          callback(results);
        }
      });
      // });
    }
  }
};

var generalGET = function(response, statusCode, sqlTable) {
  var query = `SELECT * FROM ${sqlTable}`;
  db.connection.query(query, (error, results, fields) => {
    if (error) {
      throw new Error('Error in query');
    } else {
      console.log(`Logging ${sqlTable}`, JSON.stringify(results));
      response.send(JSON.stringify(results));
    }
  });
};

module.exports.generalGET = generalGET;
