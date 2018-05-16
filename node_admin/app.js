const http = require("http");
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs=require("fs");
const expressSession = require("express-session");
const cors = require("cors");

let app = express();

let user = require('./routes/user');
let essay = require('./routes/essay');
let article = require('./routes/article');
let diary = require('./routes/diary');



let server = http.createServer(app);
server.listen(3000);
app.use(cors({
    origin:["http://127.0.0.1"],
    credentials:true
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(expressSession({
    resave:false,
    saveUninitialized:true,
    secret:"teducn",
}));
//配置跨域请求头
// app.all('*',function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8081');
//     res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     if(req.method=='OPTIONS'){
//         res.sendStatus(200)
//     }else{
//         next()
//     }
// });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',user);
app.use('/user',user);
app.use('/essay',essay);
app.use('/article',article);
app.use('/diary',diary);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
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
