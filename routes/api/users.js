const express = require('express');
const userController = require('../../controllers/users-controller');

const router = express.Router();

/* GET users listing. */

router.route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

// router.route('/signup')
//   .post(userController.createUser);

// this is how specify it the ID in the URL
router.route('/:id')
  .patch(userController.updateUser)
  .get(userController.getUser)
  .delete(userController.deleteUser);
// router.route('/').get(userController.getAllUsers);
// router.route('/register').get(userController.register);
module.exports = router;
