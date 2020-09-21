const {json} = require('express');
const User = require('./../models/users-model');

exports.getAllUsers = async (req, res) => {
  let u = await User.find({});
  res.status(200).json(u);
};
