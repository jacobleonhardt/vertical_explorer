const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const climbRouter = require('./climbs.js');
const settingsRouter = require('./settings.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/climbs', climbRouter);
router.use('/settings', settingsRouter);

module.exports = router;
