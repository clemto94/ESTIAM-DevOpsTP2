var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dbRouter = require('./routes/db');

var app = express();
require('./model/Mydb');

mongoose.connect('mongodb://localhost/myAppDockerCompose', {useNewUrlParser: true});

mongoose.model('Mydb').find({}, (err, items) => {
  if(err)
    console.log(err)
  else{
    items[0].increment = 0
    mongoose.model('Mydb').findByIdAndUpdate(items[0]._id, items[0], (err, resp)=>{
      if(err){
        console.log("none", err)
      } else {
        console.log("ok", resp)
      }
    })
    
  }
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', dbRouter);
// app.use('/users', usersRouter);
// app.use('/db', dbRouter);

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
