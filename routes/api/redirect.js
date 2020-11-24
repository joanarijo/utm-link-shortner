const express = require('express');
const router = express.Router();

// GET /api/redirect/test
// Test API end point
router.get('/test', (req, res) => res.json({message: "it's working"}));

// GET /api/redirect
// Headers hash • Redirects user
router.get('/', (req, res) => {
    const hash = req.headers.hash;
    
    URL.findOne({ _id: hash})
        .then((doc) => {
            return res.json({ url: doc.url})
        })
        .catch((err) => {
            return res.status(400).json({ error: 'Sorry! Link expired.'})
        })
});

module.exports = router; 