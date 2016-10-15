'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var server = require('gulp-develop-server');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*']});
var wrench = require('wrench');
//启动服务器
gulp.task('server:start',['inject'], function() {
  server.listen({path: './app.js'}, function() {
    gulp.start('browser:run');
  });
});

//启动浏览器
gulp.task('browser:run', function() {
  browserSync.init({
    proxy: 'http://localhost:8080',
  });
});

//重启服务器
gulp.task('server-restart', ['inject'], function() {
  server.restart(function() {
    gulp.start('browser:reload');
  });
});

//重启浏览器
gulp.task('browser:reload', function() {
  browserSync.reload();
});

//运行服务器并且监控文件变化
gulp.task('serve', ['server:start'], function() {
  gulp.watch(['app-*/**/*.+(jade|scss|sass|ls|js)', 'app.js'], ['server-restart']);
});

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});
