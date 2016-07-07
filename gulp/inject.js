'use strict';

var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*']});
var inject = require("gulp-inject")

gulp.task('inject',['build'], function() {
  var target = gulp.src('tmp/app-angular/index.html');

  var sources = gulp.src(['tmp/app-angular/**/*.js', 'tmp/app-angular/**/*.css'], {read: false});

  return target
  .pipe($.inject(sources))
  //引用bower安装的包
  .pipe(inject(gulp.src(bowerFiles(), {read:false}), {name: 'bower'}))
  .pipe(gulp.dest('tmp/app-angular'));
});