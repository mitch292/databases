var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        
        res.send(JSON.stringify(data));
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body);
      res.send();
        // models.post(JSON.parse(data));
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('code running in the users get function')
      models.users.get();
      res.send();
    },
    post: function (req, res) {
      models.users.post(req.body);
      res.send();
    }
  }
};



// {
//   username: 'Valjean',
//   message: 'In mercy\'s name, three days is all I need.',
//   roomname: 'Hello'
// }