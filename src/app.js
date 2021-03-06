const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const routes = require('./routes');
const currentUser = require('./middleware/currentUser');
var cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors({origin: '*'}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/uploads/leads'));

// Load current user to the app state if there is one
app.use(currentUser);

// Add routers
app.use('/v1', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
