'use strict';
var router = require('express').Router()
var User = require('../users/user.model')
//var session = require('express-session');


router.post('/login', (req, res, next) => {
  console.log("*****reached post*****")
    User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
    }})
    .then(user => {
      if (!user) {
        res.status(401).send('Those without password shall be judged!!!');
      } else {
        req.session.user = user;
        res.status(200).json({user});
      }
    })
    .catch(next);
});

module.exports = router;
