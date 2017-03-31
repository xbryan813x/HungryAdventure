const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('sass', () => gulp.src('client/style/scss/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('client/style/css')));

gulp.watch('client/style/scss/**/*.scss', ['sass']);
