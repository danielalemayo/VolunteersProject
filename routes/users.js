const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  // const users = [{
  //   id: 1,
  //   name: 'John Doe',
  // },
  // {
  //   id: 34,
  //   name: 'YG',
  // },
  // {
  //   id: 26,
  //   name: 'Shlomi Salem',
  // },
  // {
  //   id: 25,
  //   name: 'Daniel Alemayo the master :)',
  // },
  // {
  //   id: 4,
  //   name: 'Sapir Yayech',
  // },
  // {
  //   id: 2,
  //   name: 'Daniel Mangisto',
  // },
  // ];
  res.send(users);
});

module.exports = router;
