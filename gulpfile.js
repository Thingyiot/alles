var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var minifycss = require('gulp-minify-css');
var ngHtml2Js = require('gulp-ng-html2js');
var ngmin = require('gulp-ngmin');
var htmlmin = require('gulp-htmlmin');
var template = require('gulp-template');
var header = require('gulp-header');
var footer = require('gulp-footer');
var inject = require('gulp-inject');

var del = require('del');

var paths = {
  scripts: ['client/js/**/*.js'],
  sass: [ 'client/src/**/*.scss'],
  css: [ 'client/src/**/*.css'],
  html:['client/src/**/*.html'],
  fonts: ['client/assets/fonts/**'],
  images: 'client/img/**/*',
  buildDir: 'build/tmp'
};


gulp.task('default',['build'], function() {
  // place code for your default task here
   return gulp.src('src/app.js')
        .pipe(ngmin({dynamic: true}))
        .pipe(gulp.dest('build'));

});

gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

// Copy all static images
gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'));
});

gulp.task('sass',['clean'],  function(){
  var destination = paths.buildDir + '/css';
  return gulp.src(paths.sass)
    .pipe(concat('$$sass.css'))
    .pipe(sass())
    .pipe(gulp.dest(destination));
});

gulp.task('minify-css', ['clean'], function() {
  var destination = paths.buildDir + '/css';
  return gulp.src(paths.css)
    .pipe(sourcemaps.init())
    .pipe(minifycss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(destination));
});

gulp.task('minify-html',['clean'], function() {
  var destination = paths.buildDir + '/html';
  return gulp.src(paths.html)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(destination))
});

gulp.task('root', function(){
    return copyRootFiles(paths.buildDir);
});

function copyRootFiles(destination) {
  
}

gulp.task('build', ['scripts','images','sass','minify-css','minify-html'], function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
});


gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['build'], cb);
});