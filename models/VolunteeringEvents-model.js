const mongoose = require('mongoose');

const EventsSchema = mongoose.Schema({
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
      date: {
        type: Date,
        default: Date.now,
      },
    });

module.exports = mongoose.model('event', EventsSchema);
