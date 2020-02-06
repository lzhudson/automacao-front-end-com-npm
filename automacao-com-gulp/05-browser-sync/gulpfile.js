const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();

function compilaSass(){
  return gulp.src('css/scss/*.scss')
         .pipe(sass({
           outputStyle: 'expanded'
          }))
         .pipe(autoprefixer({
           overrideBrowserslist: ['last 2 versions'],
           cascade: false
         }))
         .pipe(gulp.dest('css/'))
         .pipe(browsersync.stream());
}

gulp.task('sass', compilaSass);

function browser() {
  browsersync.init({
    server: {
      baseDir: "./"
    }
  })
}

gulp.task('browser-sync', browser);

function watch() {
  gulp.watch('css/scss/*.scss', compilaSass);
}

gulp.task('watch', watch);

gulp.task('default', gulp.parallel('watch', 'browser-sync'));