const Event = require('../models/VolunteeringEvents-model');

const getEvents = async (req, res) => {
    await Event.find({}, (err, VolunteeringEvents) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err,
            })
        }
        if (!VolunteeringEvents.length) {
            return res.status(400).json({
                success: false,
                error: 'not a singal event was found',
            })
        }
        return res.status(200).json({
            success: true,
            data: VolunteeringEvents,
        })
            .catch(err => console.log(err));
    })
}

module.exports = {
    getEvents
}