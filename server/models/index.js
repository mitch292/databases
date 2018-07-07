var db = require('../db').connection;

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', (err, results) => {
        if (err) {
          console.log('an error has occured when we attempted to get data from the db')
          callback(err);
        } else {
          callback(null, results);
        }
      })
    }, // a function which produces all the messages
    post: function ({username, message, roomname}) {
      let ourPost = {
        message: message,
        room_name: roomname,
        user_name: username
      };
      db.query(`INSERT INTO messages SET ?;`, ourPost, (err, results, field) => {
        if (err) {
          console.log('there was an error posting to the db');
        } else {
          console.log('successful post of a message');
          return results;
        } 
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', (err, results) => {
        if (err) {
          console.log('an error has occured when we attempted to get data from the db')
          callback(err);
        } else {
          // console.log('field in users', field);
          callback(null, results);
        }
      })
    },
    post: function ({username}) {
      db.query(`INSERT INTO users SET ?;`, {name: username} , (err, results, field) => {
        if (err) {
          console.log('there was an error posting the username to the db', err);
        } else {
          console.log('successful post of username');
          return results;
        }
      })
    }
  }
};

// {
//   username: 'Valjean',
//   message: 'In mercy\'s name, three days is all I need.',
//   roomname: 'Hello'
// }