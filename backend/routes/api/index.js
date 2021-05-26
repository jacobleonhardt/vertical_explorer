const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const climbRouter = require('./climbs.js');
const routeRouter = require('./routes.js');
const typeRouter = require('./types.js');
const settingsRouter = require('./settings.js');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/climbs', climbRouter);
router.use('/routes', routeRouter);
router.use('/types', typeRouter);
router.use('/settings', settingsRouter);

module.exports = router;
