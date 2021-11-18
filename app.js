require('dotenv').config();
const express = require('express');
const connectDB = require('./db/db');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const favicon = require('serve-favicon');
app.use(cookieParser());

// Calling the Database

connectDB();

app.use(express.urlencoded({extendednpm: true}));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
require('./configs/session.config')(app);

const MongoStore = require('connect-mongo');
app.use(
  session({
    secret: process.env.SESS_SECRET,

    resave: false,
    saveUninitialized: true, // create cookie for non-logged-in user

    // MongoStore makes sure the user stays logged in also when the server restarts
    store: MongoStore.create({mongoUrl: process.env.MONGODB_URI}),
  })
);

app.use(express.static(path.join(__dirname + '/frontend/build')));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use('/api', require('./routes/index'));
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/companies'));
app.use('/api', require('./routes/user'));

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + '/frontend/build/index.html');
});

app.listen(process.env.PORT, () => {
  console.log('It works woohooo!');
});
