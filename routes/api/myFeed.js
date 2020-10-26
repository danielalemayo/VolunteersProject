const express = require('express');
const eventCtrl = require('../../controllers/ctrlEvents');

const router = express.Router();

/* GET users listing. */
router.route('/')
  .get(eventCtrl.getAllEvents)
  .post(eventCtrl.createEvent);

router.route('/:id')
  .get(eventCtrl.getEvent)
  .delete(eventCtrl.deleteEvent);

router.route('/registerVolToEvent/:id')
  .get(eventCtrl.getEventsByRegisterVolunteer)
  .put(eventCtrl.registerVolToEvents)
  .delete(eventCtrl.removeRegisterVolFromEvent);

module.exports = router;
