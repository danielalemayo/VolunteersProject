const express = require('express');
const eventCtrl = require('../../controllers/ctrlEvents');

const router = express.Router();

/* GET users listing. */
router.route('/')
  .get(eventCtrl.getAllEvents)
  .post(eventCtrl.createEvent);

router.route('/:id')
  .patch(eventCtrl.updateEvent)
  .get(eventCtrl.getEvent)
  .delete(eventCtrl.deleteEvent);

module.exports = router;
