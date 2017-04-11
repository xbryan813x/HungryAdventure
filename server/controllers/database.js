const pg = require('../config/database.js');

module.exports = {
  getProfile(req, res) {
    pg('users').where('email', req.query.email).then((results) => {
      let name = req.query.name,
        email = req.query.email,
        profilePicture = (JSON.parse(req.query.picture)).data.url;

      if (results.length < 1) {
        // create a new users
        pg('users').insert({
          name,
          email,
          profilePicture,
        }).then((data) => {
          const results = [];
          results.push({ name, email, profilePicture });
          console.log('Input New User', results);
          res.send(results);
        });
      } else {
        // User exists
        console.log(results);
        res.send(results);
      }
    });
  },
  saveQuery(req, res) {
    pg('searchQueries').insert({
      email: req.query.email,
      budget: req.query.budget,
      startDate: req.query.startDate,
      endDate: req.query.endDate,
    }).then(() => {
      res.send('Saved');
    });
  },
};

