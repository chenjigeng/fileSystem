'use strict';
var gulp = require("gulp")
var $ = require('gulp-load-plugins')({pattern: ['gulp-*']});
var browserSync = require('browser-sync').create();

var dest = "./.tmp"
gulp.task('livescript', function() {
	return gulp.src(["./app-angular/**/*.ls"])
		.pipe($.livescript())
		.pipe(gulp.dest('tmp/app-angular/'))
		.pipe(browserSync.stream());
})

gulp.task("sass", function() {
	return gulp.src(["./app-angular/**/*.sass"])
		.pipe($.sass())
		.pipe(gulp.dest('tmp/app-angular/'))
		.pipe(browserSync.stream());
})

gulp.task("sass:watch", function() {
	gulp.watch("./app-angular/**/*.sass", ["sass"]);
})

gulp.task("jade", function() {
	return gulp.src(["./app-angular/**/*.jade"])
		.pipe($.jade())
		.pipe(gulp.dest('tmp/app-angular/'))
		.pipe(browserSync.stream());
})

gulp.task("jade:watch", function() {
	gulp.watch("./app-angular/**/*.jade", ["jade"]);
})

gulp.task("livescript:watch", function() {
	gulp.watch("./app-angular/**/*.ls", ["livescript"]);
})

gulp.task("watch", ["sass:watch", "jade:watch", "livescript:watch"], function() {
	gulp.watch("./app-angular/**/*.html", ['server-restart']);
})

gulp.task("build", ["livescript", "sass", "jade", "watch"], function() {
	gulp.src(["./app-angular/**/*.json"])
		.pipe(gulp.dest("tmp/app-angular/"))
	return gulp.src(["./app-angular/**/*.html"])
		.pipe(gulp.dest('tmp/app-angular/'))
		.pipe(browserSync.stream());
})