const express = require('express');
const eventCtrl = require('../../controllers/ctrlEvents');

const router = express.Router();

/* GET users listing. */
router.route('/')
  .get(eventCtrl.getAllEvents)
  .post(eventCtrl.createEvent);

router.route('/:id')
  .put(eventCtrl.updateEvent)
  .get(eventCtrl.getEvent)
  .delete(eventCtrl.deleteEvent);

router.route('/registerEvent/:id')
  .get(eventCtrl.getRegisterEvent);

module.exports = router;
