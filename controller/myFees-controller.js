const myFeedSchema = require('../models/myFeed-model');

exports.getAllEvents = async (erq, res) => {
  try {
    const getEvents = await myFeedSchema.find();
    console.log(getEvents);

    res.status(200).json({
      status: 'success',
      results: getEvents.length,
      data: getEvents,
    });
  } catch (error) {
    res.status(404).json({
      status: 'field',
      message: error,
    });
  }
};

exports.createVolunteerEvent = async (req, res) => {
  try {
    // create in the data base
    const newEvent = await myFeedSchema.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        event: newEvent,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.updateVolunteerEvent = async (req, res) => {
  try {
    const updateEvent = await myFeedSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        updateEvent,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error,
    });
  }
};