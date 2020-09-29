const express = require('express');
const eventCtrl = require('../../controlers/ctrlEvents');

const router = express.Router();

/* GET users listing. */
router.route('/')
  .get(eventCtrl.getAllEvents)
  .post(eventCtrl.createEvents);

router.route('/:id')
  .patch(eventCtrl.updateEvents)
  .get(eventCtrl.getEvent)
  .delete(eventCtrl.deleteEvent);

module.exports = router;
