const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// init
const app = express();

//bodyparser mid
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//db key
const db = require('./config/keys').mongoURL;

//db connection
mongoose.connect(db)
    .then(() => console.log('database connected.'))
    .catch((err) => console.log(err));

// routes 
const shorten = require('./routes/api/shorten');
app.use('/api/shorten', shorten);

//path - test
app.get('/', (req, res) => {
    res.send('hello world');
});

// port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));