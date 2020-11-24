const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Init
const app = express();

// Bodyparser Mid
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Database Key
const db = require('./config/keys').mongoURL;

// Database Connection
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err));

// Routes 
const shorten = require('./routes/api/shorten');
app.use('/api/shorten', shorten);

const redirect = require('./routes/api/redirect');
app.use('/api/redirect', redirect);

// Redirect's based on id + hash
app.get('/:hash', (req, res) => {
    const id = req.params.hash;
    URL.findOne({_id:id}, (err, doc) => {
        if(doc){
            console.log(doc.url);
            res.redirect('http://' + doc.url);
        } else{
            console.log('This url is invalid.');
            res.redirect('/');
        }
    })
})

// Path 
app.get('/', (req, res) => {
    res.send('hello world');
});

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));