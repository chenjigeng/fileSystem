var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var routes = require('./app-express/app/routes/post');
var users = require('./app-express/app/routes/users');
var debug = require('debug')('express-blog:server');
var multipart = require('connect-multiparty');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//使用cookie
/*app.use(cookieParser("blog", { maxAge: 60 * 60 * 1000 }
));*/
app.use(cookieParser());
/*app.use(cookieSession({ secret: 'blog', cookie: { maxAge: 60 * 60 * 1000 }}));*/
//设置静态文件的路径
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./'));
app.use(express.static('./tmp/app-angular'));

app.use('/post', routes);
app.use('/users', users);

// app.get("/", function(req, res) {
//   res.sendfile("./tmp/app-angular/index.html");
// })
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
var port = 3010;
app.listen(port, function() {
  console.log('server is listening on port ' + port);
});

