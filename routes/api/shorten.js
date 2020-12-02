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

// GET /api/shorten/test
// Test API end point
router.get('/test', (req, res) => res.json({message: "it's working"}));


// POST /api/shorten
router.post('/', (req, res) => {

   console.log(req.body);
   if(req.body.url){
      urlData = req.body.url
   }
   console.log('URL: ', urlData);
   
   URL.findOne({url: urlData}, (err, doc) => {

      if(doc){
         // Check if URL exists
         console.log('Entry found in database.');
         res.send({
            error: 'Entry found in database. Please, check the archive.',
            statusText: 'Duplicated'
         })
     
      } else{
         // Saves new URL in database
         console.log('New entry in database.');
         
         const webAddress = new URL({
            _id: uniqid(),
            url: urlData
         });

         webAddress.save((err) => {
           
            if(err){
              return console.error(err);
            }
            
            res.send({
               url: urlData,
               hash: webAddress._id,
               status: 200, 
               statusText: 'OK'
            })

         })
      }
   })
});

module.exports = router;