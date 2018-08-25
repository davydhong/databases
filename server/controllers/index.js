var models = require('../models');

module.exports = {
  messages: {
    get: function(req, res) {
      console.log('Processing GET request (messages)');
      models.messages.get(res, data, 200);
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      // console.log(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {
      // models.messages.get(() => console.log('working?'));
    },
    post: function(req, res) {
      // console.log(req, res);
    }
  }
};
