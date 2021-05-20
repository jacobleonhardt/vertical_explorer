// backend/routes/api/index.js
const router = require('express').Router();

// GET /api/set-token-cookie
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');

// GET /api/restore-user
// const { restoreUser } = require('../../utils/auth.js');

// GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');

// Routes
router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//     where: {
//       username: 'Demo-lition'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

module.exports = router;
