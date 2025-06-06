var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routing
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const spotRouter = require('./routes/spot');
const favoriteRouter = require('./routes/favorite');
const bookingRouter = require('./routes/booking');
const amenitieRouter = require('./routes/amenitie');
const countryRouter = require('./routes/country');
const cityRouter = require('./routes/city');
const reviewRouter = require('./routes/review');
const passwordResetRouter = require('./routes/password-reset');




app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/spot', spotRouter);
app.use('/favorite', favoriteRouter);
app.use('/booking', bookingRouter);
app.use('/amenitie', amenitieRouter);
app.use('/country', countryRouter);
app.use('/city', cityRouter);
app.use('/review', reviewRouter);
app.use('/password-reset', passwordResetRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
