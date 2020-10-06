const User = require('../models/users-model');

exports.getAllUsers = async (req, res) => {
  try {
    // this comend from mongoDB
    const getUsers = await User.find();
    res.status(200).json({
      status: 'success',
      results:getUsers.length,
      data: getUsers,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    // this params.id come from route that we defined
    const getUser = await User.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        getUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    // create in the data base
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
  
};

exports.updateUser = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        updateUser,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error,
    });
  }
};
