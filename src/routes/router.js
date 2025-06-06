const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.send('n8n test kub pom');
});

module.exports = router;