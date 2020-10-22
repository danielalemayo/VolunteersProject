const express = require('express');
const eventCtrl = require('../../controllers/ctrlEvents');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});


module.exports = router;
