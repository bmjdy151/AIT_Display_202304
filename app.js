var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const bootstrap = require('bootstrap');

// var indexRouter = require('./routes/index');
var indexRouter = require('./routes/fjord_2');
var usersRouter = require('./routes/users');
var fjord_1Router = require('./routes/fjord_1');
var fjord_2Router = require('./routes/fjord_2');
var fjord_3Router = require('./routes/fjord_3');
var fjord_4Router = require('./routes/fjord_4');
var IMJ_1Router = require('./routes/IMJ_1');
var IMJ_2Router = require('./routes/IMJ_2');
var IMJ_3Router = require('./routes/IMJ_3');
var IMJ_4Router = require('./routes/IMJ_4');
var MV_1Router = require('./routes/MV_1');
var MV_2Router = require('./routes/MV_2');
var MV_3Router = require('./routes/MV_3');
var MV_4Router = require('./routes/MV_4');
var GBD_1Router = require('./routes/GBD_1');
var GBD_2Router = require('./routes/GBD_2');
var GBD_3Router = require('./routes/GBD_3');
var GBD_4Router = require('./routes/GBD_4');
var D5_1Router = require('./routes/D5_1');
var D5_2Router = require('./routes/D5_2');
var D5_3Router = require('./routes/D5_3');
var D5_4Router = require('./routes/D5_4');
var Library_1Router = require('./routes/Library_1');
var Library_2Router = require('./routes/Library_2');
var Library_3Router = require('./routes/Library_3');
var testRouter = require('./routes/test');
// var test_mapRouter = require('./routes/test_map');

var app = express();

app.listen(3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fjord_1', fjord_1Router);
app.use('/fjord_2', fjord_2Router);
app.use('/fjord_3', fjord_3Router);
app.use('/fjord_4', fjord_4Router);
app.use('/IMJ_1', IMJ_1Router);
app.use('/IMJ_2', IMJ_2Router);
app.use('/IMJ_3', IMJ_3Router);
app.use('/IMJ_4', IMJ_4Router);
app.use('/MV_1', MV_1Router);
app.use('/MV_2', MV_2Router);
app.use('/MV_3', MV_3Router);
app.use('/MV_4', MV_4Router);
app.use('/GBD_1', GBD_1Router);
app.use('/GBD_2', GBD_2Router);
app.use('/GBD_3', GBD_3Router);
app.use('/GBD_4', GBD_4Router);
app.use('/D5_1', D5_1Router);
app.use('/D5_2', D5_2Router);
app.use('/D5_3', D5_3Router);
app.use('/D5_4', D5_4Router);
app.use('/Library_1', Library_1Router);
app.use('/Library_2', Library_2Router);
app.use('/Library_3', Library_3Router);
app.use('/test', testRouter);
// app.use('/test_map', test_mapRouter);
app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist/")));
// app.use('/css', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/css')))
// app.use('/js', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/js')))
// app.use('/js', express.static(path.join(_dirname, 'node_modules/jquery/dist')))

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
