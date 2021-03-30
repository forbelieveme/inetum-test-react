const express = require('express');
const app = express();
const cors = require('cors');
const config = require('../config.json');

// settings
app.set('port', process.env.PORT || config.port);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/info', require('./routes/info'));

module.exports = app;
