var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var posts = require('./../routes/post');
var users = require('./../routes/users');
var debug = require('debug')('express-blog:server');
var multipart = require('connect-multiparty');


//用于注册路由
function registRouter(app) {
	app.use('/api/post', posts);
	app.use('/api/users', users);
}

module.exports = function() {
	var app = express();

	// view engine setup
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');

	//设置静态文件的路径
	app.use(express.static(path.join(__dirname, '../../../public')));
	app.use(express.static(path.join(__dirname, '../../../')));
	app.use(express.static(path.join(__dirname, '../../../tmp/app-angular')));
	// uncomment after placing your favicon in /public

	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));


	app.use(cookieParser());

	registRouter(app);
	// production error handler
	// no stacktraces leaked to user
	app.use(function(err, req, res, next) {
	  res.status(err.status || 500);
	  res.render('error', {
	    message: err.message,
	    error: {}
	  });
	});

	return app;
}

