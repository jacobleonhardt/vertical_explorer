const express = require('express');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

// const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Climb } = require('../../db/models');

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get('/', restoreUser, asyncHandler( async (req, res) => {
    const id = req.user.id;
    const climbs = await Climb.list(id);

    return res.json(climbs);
}));

router.post('/', restoreUser, asyncHandler( async (req, res) => {
    const { user_id, name, notes, climb_height } = req.body;
    const climbs = await Climb.add({
        user_id,
        name,
        notes,
        climb_height
    });

    return res.json(climbs);
}));

router.patch(
  '/:id',
  restoreUser,
  asyncHandler(async (req, res) => {
    const { id, user_id, name, notes, total_height } = req.body;
    const climb = await Climb.findByPk(id);
    climb.update({
        name,
        notes,
        total_height,
    })

    const myClimbs = await Climb.findAll({ where: { user_id } });
    return res.json(myClimbs);
  }),
);

router.delete(
    '/id',
    asyncHandler( async (req, res) => {
      const { id } = req.body;
      await Climb.delete(id);
      return res.json({ message: 'climb deleted' });
    })
  );

module.exports = router;
