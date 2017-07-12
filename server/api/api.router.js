'use strict';

var router = require('express').Router();

router.use('/identity', require('./identity/identity.router'))

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));



module.exports = router;
