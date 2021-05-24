const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// Validation Middleware

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);



// Edit Profile
// router.get('/:id', asyncHandler(async function(req, res) {
//   const user = await PokemonRepository.one(req.params.id);
//   return res.json(user);
// }));

// router.put(
//   "/:id",
//   validateSignup,
//   asyncHandler(async function (req, res) {
//     const user = await User.getCurrentUserById(req.body);
//     return res.json(user);
//   })
// );

// router.delete("/:id", asyncHandler(async function (req, res) {
//   const itemId = await ItemsRepository.deleteItem(req.params.id);
//   return res.json({ itemId });
// }));

module.exports = router;
