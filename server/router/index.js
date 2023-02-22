const express = require('express');
const router = express.Router();
const { user } = require('../controller');

router.post('/login', user.login);
router.post('/signup', user.signup);

module.exports = router;
