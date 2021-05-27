const express = require('express');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

// const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Climb, Routes_Climbed, Route } = require('../../db/models');

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get('/', restoreUser, asyncHandler( async (req, res) => {

    const id = req.user.id;
    // const climbs = await Climb.list(id);

    const myClimbs = await Climb.findAll({
      where: { user_id: id },
      include: [{ model: Route, through: { attributes: [] }}],
      order: [
        ['createdAt', 'DESC'],
    ],
    });


    return res.json(myClimbs);
}));

router.post('/', restoreUser, asyncHandler( async (req, res) => {
    const { user_id, name, notes, climb_height, routes } = req.body;


    // const {route_id, location, added } = routes[0];

    const newClimb = await Climb.add({
        user_id,
        name,
        notes,
        climb_height,
    });

    routes.forEach(async (route) => {
      await Routes_Climbed.create({
        route_id: route.route_id,
        climb_id: newClimb.id
      });
    });

    const myClimbs = await Climb.findAll({
      where: { user_id: id },
      include: [{ model: Route, through: { attributes: [] }}],
      order: [
        ['createdAt', 'DESC'],
    ],
    });
    // const myClimbs = await Climb.list(user_id, {});
    return res.json(myClimbs);
}));

// PATCH HERE ISN"T WOKRING IT SEEMS
router.patch(
  '/:id',
  restoreUser,
  asyncHandler(async (req, res) => {

    const { id, user_id, name, notes, total_height, routes } = req.body;
    const climb = await Climb.findByPk(id);
    console.log('&&&&&&&&&', climb)
    await climb.update({
        name,
        notes,
        total_height,
    });

    const routesClimbed = await Routes_Climbed.findAll({ where: { climb_id: climb.id }});
    console.log('######### HERE')

    routesClimbed.forEach(async (route) => {
      await Routes_Climbed.update({
        route_id: route.route_id,
        climb_id: newClimb.id
      });
    });

    // after we update the climb obj, we need to grab the updated arr of objs
    const myClimbs = await Climb.findAll({
      where: { user_id: id },
      include: [{ model: Route, through: { attributes: [] }}],
      order: [
        ['createdAt', 'DESC'],
    ],
    });
    return res.json(myClimbs);
  }),
);

router.delete(
    '/:id',
    restoreUser,
    asyncHandler( async (req, res) => {
      const { id, user_id } = req.body;
      // await Climb.destroy({ where: { id }});
      await Climb.delete(id);


      await Routes_Climbed.destroy({ where: { climb_id: id }});

      const myClimbs = await Climb.findAll({
        where: { user_id: id },
        include: [{ model: Route, through: { attributes: [] }}],
        order: [
          ['createdAt', 'DESC'],
      ],
      });

      return res.json(myClimbs);
    })
  );

module.exports = router;
