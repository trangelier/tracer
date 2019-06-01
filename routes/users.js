const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//bring in User Models
let User = require('../models/user');

// Register Form
router.get('/register', (req, res) => {
  res.render('register');
});

// Register Process
router.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;

  let newUser = new User({
    name: name,
    email: email,
    username: username,
    password: password
  });
  console.info(newUser.name);
  bcrypt.genSalt;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      //Todo: Add error checking for newUser fail
      if (err) {
        console.error(err);
      }
      newUser.password = hash;
      newUser.save(err => {
        if (err) {
          console.error(err);
          return;
        } else {
          req.flash('success', 'You are now registered and can log in');
          res.redirect('/users/login');
        }
      });
    });
  });
});

// Login Form
router.get('/login', (req, res) => {
  res.render('login');
});

// Login Process
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);

  //console.log('UserName: ' + req.body.username + ' Date: ' + new Date() );
});

// Logout Process
router.get('/logout', (req, res) => {
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
