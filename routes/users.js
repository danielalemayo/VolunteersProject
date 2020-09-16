const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const users = [{
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  },
  {
    id: 25,
    name: "Daniel Alemayo",
  },
  {
    id: 4,
    name:"Sapir Yayech",
  },
  {
    id: 2,
    name:"Daniel Mangisto",
  },
  ];
  res.send(users);
});

module.exports = router;
