const { List } = require('@material-ui/core');
const mongoose = require('mongoose');

const EventsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  registerVolunters: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('volunteer-Events', EventsSchema);
