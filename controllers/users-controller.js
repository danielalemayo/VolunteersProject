const User = require('../models/users-model');

exports.getAllUsers = async (req, res) => {
  try {
    // this command from mongoDB
    const getUsers = await User.find();
    res.status(200).json({
      status: 'success',
      results: getUsers.length,
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
    // this req.params.id come from route that we defined
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

exports.singUp = async (req, res) => {
  // 1) destructuring req.body from client
  const { name, email, password } = req.body;

  let existingUser;

  try {
    // 2) check in DB if obj is exists
    existingUser = await User.findOne({ email });
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      message: 'Signing up failed, please try again later.',
      ERROR: err.message,
    });
  }

  // 3) check if obj is exists because the query return null in case is not exists
  if (existingUser) {
    res.status(500).json({
      status: 'failed',
      message: 'User exists already, please login instead.',
    });
  }

  try {
    // 4) create obj in the DB
    const newUser = await User.create({
      name,
      email,
      password,
    });
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

exports.login = async (req, res, next) => {
// 1) destructuring req.body from client
  const { email, password } = req.body;

  let existingUser;

  try {
    // 2) check in DB if obj is exists
    console.log(' server inside try function (2)');
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new Error(
      'Login in failed, please try again later.',
      500,
    );
    return next(error);
  }

  console.log(existingUser);
  // 3) check if obj is exists because the query return null in case is not exists
  if (!existingUser || existingUser.password !== password) {

    const error = new Error(
      'Invalid credentials, could not log you in.',
      401,
    );
    return next(error);
  }
  console.log(' server after if statment (5)');

  return res.status(200).json({ existingUser });
};
