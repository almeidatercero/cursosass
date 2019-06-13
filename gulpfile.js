var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

sass.compiler = require('node-sass');


var options = {};

gulp.task('start', function(cb){
    mamp(options, 'start', cb);
});

gulp.task('stop', function(cb){
    mamp(options, 'stop', cb);
});





gulp.task('sass', function () {
    return gulp.src('./scss/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });







gulp.task('sass-watch', ['sass'], browserSync.reload);

gulp.task('html-watch', browserSync.reload);

gulp.task('php-watch', browserSync.reload);


gulp.task('js-watch', browserSync.reload);










gulp.task('watch', function(){

  gulp.watch('*.html', ['html-watch']);
  gulp.watch('**/*.php',  ['php-watch']);
  gulp.watch('js/**.js', ['js-watch']);
  gulp.watch('scss/**/*.scss', ['sass-watch']);


});



gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js", '*.html'], {
        server: {
            baseDir:"./"
        }

    });
});

gulp.task('default', ['watch','browser-sync'], function () {


});
