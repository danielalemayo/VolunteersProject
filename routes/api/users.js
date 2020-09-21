const express = require('express');
const userController = require('../../controller/users-controller');

const router = express.Router();

/* GET users listing. */

router.route('/').get(userController.getAllUsers);

module.exports = router;
