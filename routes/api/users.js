const express = require('express');
const userController = require('../../controller/users-controller');
const router = express.Router();

/* GET users listing. */

router.route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

// this is how specify it the ID in the URL
router.route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
// router.route('/').get(userController.getAllUsers);
router.route('/register').get(userController.register);
module.exports = router;
