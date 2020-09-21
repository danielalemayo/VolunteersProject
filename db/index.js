const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ddss2020:ddss2020@dscluster.3nws2.mongodb.net/volunteeringDB?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((e) => {
    console.error('Connection error', e.message);
  });
const db = mongoose.connection;

module.exports = db;
