const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.send('from auto push code 2');
});

module.exports = router;