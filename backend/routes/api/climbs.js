const express = require('express');
const asyncHandler = require('express-async-handler');

// const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Climb } = require('../../db/models');

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get('/', asyncHandler( async(req, res) => {
    const id = 24;
    console.log('>>>', id)
    const climbs = await Climb.list(id);
    console.log('+++', climbs)

    return res.json(climbs);
}));

module.exports = router;
