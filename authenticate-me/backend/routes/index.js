// backend/routes/index.js
const express = require('express');
const apiRouter = require('./api');
const router = express.Router();
const sessionRouter = require('./api/session');
const usersRouter = require('./api/users');

// Set Routes
router.use('/api', apiRouter);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);

// HTTP Methods
router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

module.exports = router;
