var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var connect = require('gulp-connect');

gulp.task('scss', function (){ 
  return gulp.src('./html/style/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./html/style/css'))
});

gulp.task("reload", function(){
	gulp.src("./html/**/*.**")
		.pipe(connect.reload());
})
gulp.task('watch', function () {
  gulp.watch("./html/**/*.*", ["scss","reload"]);//监听dist下所有文件
});

// gulp.watch('css/scss/*.scss', ['scss','reload']);

gulp.task('default', ['scss', 'watch'])
