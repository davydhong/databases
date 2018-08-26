var models = require('../models');

module.exports = {
  messages: {
    get: function(req, res) {
      console.log('Processing Messages GET request');
      models.generalGET(res, 200, 'messages');
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      console.log('Processing messages POST request');
      models.messages.post(req, function() {
        models.generalGET(res, 201, 'messages');
      });
    }
  },
  users: {
    // Ditto as above
    get: function(req, res) {
      console.log('Processing users GET request');
      models.users.generalGET(res, 200, 'users');
    },
    post: function(req, res) {
      console.log('Processing users POST request');
      models.users.post(req, function() {
        models.generalGET(res, 201, 'users');
      });
    }
  }
};
