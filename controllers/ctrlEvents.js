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
  try {
    const updateEvent = await EventsSchema.updateOne({ _id: req.params.id }, { $addToSet: { registerVolunters: [req.body] } });
    res.status(200).json({
      status: 'success',
      data: {
        updateEvent,
      },
    });
  } catch (error) {
    console.error('Error Update event faild : ', error);
    res.status(500).json({
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
    res.status(500).json({
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
    res.status(500).json({
      status: 'filed',
      message: error,
    });
  }
};

exports.getRegisterEvent = async (req, res) => {
  try {
    const ListEvents = await EventsSchema.find({ registerVolunters: { $elemMatch: req.body } });
    res.status(200).json({
      status: 'success',
      results: ListEvents.length,
      data: ListEvents,
    });
  } catch (error) {
    res.status(500).json({
      status: 'filed',
      message: error,
    });
  }
};