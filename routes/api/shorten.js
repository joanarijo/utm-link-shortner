const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');


//api test 
router.get('/test', (req, res) => res.json({msg: 'GET request working'}));

module.exports = router;