const express = require('express');
const asyncHandler = require('express-async-handler');

const { User } = require('../../db/models');

const router = express.Router();

router.patch(
    '/',
    asyncHandler(async (req, res) => {
      const { email, username, id } = req.body;
      const user = await User.findByPk(id);

      user.update({
          email,
          username,
      });

      return res.json(user);
    }),
  );

router.put(
  '/',
  asyncHandler(async (req, res) => {
    const { email, password, username, id } = req.body;
    const user = await User.findByPk(id);

    user.update({
        email,
        username,
        password,
    })

    return res.json(user);
  }),
);

router.delete(
  '/',
  asyncHandler( async (req, res) => {
    const { id } = req.body;
    await User.deleteProfile(id);
    res.clearCookie('token');
    return res.json({ message: 'profile deleted' });
  })
);

module.exports = router;
