const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');

// Load URL model
const URL = require('../../models/Url');

router.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
})



router.get('/', (req, res) => {

    URL.find().sort({'date': -1})
            .then( data => {
             res.status(200).json({
                 "url": data
             });
         }).catch(err => {
             res.status(500).json({
                 "description": "Não foram encontrados urls.",
                 "error": err
             });
         })
     })

module.exports = router;