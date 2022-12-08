const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const userCtrl = require('../controllers/user.controller');
const fileUpload = require('express-fileupload');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }));

router.route('/').post(asyncHandler(insert));

router.put('/updateBio', [passport.authenticate('jwt', {
  session: false
}), fileUpload()], asyncHandler(updateBio));

async function insert(req, res) {
  let user = await userCtrl.insert(req.body);
  res.json(user);
}

async function updateBio(req, res) {
  let response = await userCtrl.updateBio(req);
  res.json(response);
}