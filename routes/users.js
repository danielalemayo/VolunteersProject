var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const users = [{
    "id": 1,
    "name": "John Doe"
  },
  {
    "id": 2,
    "name": "Jane Doe"
  },
  {
    "id": 25,
    "name": "Daniel Alemayo"
  }
  ];
  res.send(users);
});

module.exports = router;
