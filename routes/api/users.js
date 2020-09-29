const express = require('express');
const userController = require('../../controlers/users-controller');

const router = express.Router();

/* GET users listing. */

router.route('/')
  .get(userController.getAllUsers);

<<<<<<< HEAD
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'User already exists' }] });
    }

    user = new User({
      name,
      email,
      password,
    });

    await user.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
=======
router.route('/signup')
  .post(userController.createUser);
>>>>>>> master

// this is how specify it the ID in the URL
router.route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
// router.route('/').get(userController.getAllUsers);
// router.route('/register').get(userController.register);
module.exports = router;
