const express = require('express');
const router = express.Router();

const passport = require('passport');
const { isLoggedIn } = require('../modules/verificarAutenticacion');

// LOGIN
router.get('/login', (req, res) => {
    res.render('autenticacion/login');
  });

  router.post('/login', (req, res, next) => {
    req.check('username', 'Username is Required').notEmpty();
    req.check('password', 'Password is Required').notEmpty();
    const errors = req.validationErrors();
    if (errors.length > 0) {
      req.flash('message', errors[0].msg);
      res.redirect('/signin');
    }
    passport.authenticate('local.signin', {
      successRedirect: '/profile',
      failureRedirect: '/signin',
      failureFlash: true
    })(req, res, next);
  });

  module.exports = router;