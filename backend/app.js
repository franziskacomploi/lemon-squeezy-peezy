require('dotenv').config();
const express = require('express');
const connectDB = require('./db/db');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
app.use(cookieParser());

// Calling the Database

connectDB();

app.use(express.urlencoded({extendednpm: true}));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
require('./configs/session.config')(app);

app.use(express.static('./../frontend/build/static'));
app.use(favicon('./../frontend/public/favicon.ico'));

app.use('/api', require('./routes/index'));
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/companies'));
app.use('/api', require('./routes/user'));

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile('./../frontend/public/index.html');
});

app.listen(process.env.PORT, () => {
  console.log('It works woohooo!');
});
