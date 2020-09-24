const express = require('express');
const eventController = require('../../controller/myFees-controller');

const router = express.Router();

router.route('/')
  .get(eventController.getAllEvents)
  .post(eventController.createVolunteerEvent);
router.route('/:id')
  .patch(eventController.updateVolunteerEvent);
module.exports = router;
