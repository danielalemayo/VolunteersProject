const EventsSchema = require('../models/VolunteeringEvents-model');

exports.getAllEvents = async (req, res) => {
  try {
    const getEvents = await EventsSchema.find();

    res.status(200).json({
      status: 'success',
      results: getEvents.length,
      data: getEvents,
    });
  } catch (error) {
    res.status(404).json({
      status: 'filed',
      message: error,
    });
  }
};
exports.createEvent = async (req, res) => {
  try {
    const newEvent = await EventsSchema.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        event: newEvent,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'filed',
      message: error,
    });
  }
};
exports.updateEvent = async (req, res) => {
  // console.log('sucseed')
  try {
    const updateEvent = await EventsSchema.findByIdAndUpdate(req.params.id, req.body, {
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
      status: 'filed',
      message: error,
    });
  }
};
exports.getEvent = async (req, res) => {
  try {
    const getEvent = await EventsSchema.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        getEvent,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'filed',
      message: error,
    });
  }
};
exports.deleteEvent = async (req, res) => {
  try {
    await EventsSchema.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: 'filed',
      message: error,
    });
  }
};
