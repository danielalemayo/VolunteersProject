const mongoose = require('mongoose');

const myFeedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('volunteer-Events', myFeedSchema);