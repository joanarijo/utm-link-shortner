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

// Path 
app.get('/', (req, res) => {
    res.send('hello world');
});

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));