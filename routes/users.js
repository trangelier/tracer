const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//bring in User Models
let User = require('../models/user');

// Register Process
router.post('/register', (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const password = req.body.password;

  req.checkBody('first_name', 'First Name is required').notEmpty();
  req.checkBody('last_name', 'Last Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  let errors = req.validationErrors();

  if (errors) {
    console.log('Error with register attempt --->', errors);
    res.status(401).send('Error with request.');
  } else {
    let newUser = new User({
      first_name: first_name,
      last_name: last_name,
      email: email,
      username: email.substr(0, email.indexOf('@')),
      password: password
    });

    bcrypt.genSalt;
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        //Todo: Add error checking for newUser fail
        if (err) {
          console.log(err);
          res.status(500).send('Error creating account!');
        }
        newUser.password = hash;
        newUser.save(err => {
          if (err) {
            console.log(err);
            res.status(500).send('Error creating account!');
          } else {
            res.status(200).send('Registration Successful');
          }
        });
      });
    });
  }
});

// Login Process
router.post('/login', (req, res, next) => {
  console.log('login request attempted...');
  // passport.authenticate('local', {}, (req, res) => {
  //   console.log('in passport callback');
  //   res.json(req.user);
  // });
  passport.authenticate('local', function(err, user, info) {
    console.log('passport info: ', info);
    if (err) {
      console.log('error on authenicate', err);
      return next(err);
    }
    if (!user) {
      console.log('No User Found');
      return res.send(401);
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);

  //console.log('UserName: ' + req.body.username + ' Date: ' + new Date() );
});

// Logout Process
router.post('/logout', (req, res) => {
  if (req.session) {
    // delete session object
    req.logout();
    req.flash('success', 'You are logged out.');
    req.session.destroy(function(err) {
      if (err) {
        return next(err);
      } else {
        res.redirect('/users/login');
      }
    });
  }
});

module.exports = router;
