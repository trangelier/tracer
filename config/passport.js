const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports = passport => {
  //Local Strategy
  passport.use(
    new LocalStrategy(
      { usernameField: 'email', passwordField: 'password' },
      (username, password, done) => {
        console.log('in passport request', username, password);
        //Match username
        let query = { email: username };
        User.findOne(query, (err, user) => {
          if (err) throw err;
          if (!user) {
            return done(null, false, { message: 'No user found' });
          }

          //Match Password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Wrong Password' });
            }
          });
        });
      }
    )
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
