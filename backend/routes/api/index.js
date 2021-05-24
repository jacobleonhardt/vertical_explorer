const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const climbRouter = require('./climbs.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/climbs', climbRouter);

module.exports = router;
