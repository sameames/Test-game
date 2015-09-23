'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

gulp.task("concatScripts", function(){
    return gulp.src([
      'js/jquery-2.1.4.min.js',
      'js/getElements.js',
      'js/game.js',
      'js/score.js',
      'js/triggers.js'])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("js"));
})

gulp.task("minifyScripts", ['concatScripts'], function(){
    return gulp.src("js/app.js")
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest("js"));
})

gulp.task('clean', function(){
  del(['dist', 'js/app.*.js']);
})

gulp.task("build", ['minifyScripts'], function(){
    return gulp.src(["css/main.css", "js/app.min.js", "index.html", "img/*.png"], {base: './'})
              .pipe(gulp.dest('dist'));
});

gulp.task("default", ['clean'], function (){
  gulp.start("build");
});
