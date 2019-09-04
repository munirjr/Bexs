var gulp = require('gulp')
,sass = require('gulp-sass')
,browserSync = require ('browser-sync');

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});
 
gulp.task('server',function(){
	browserSync.init({ 
		server: {
			baseDir :'src'
		}		
	});
	gulp.watch('src/sass/*.scss', ['sass']);
	gulp.watch('src/**/*').on('change', browserSync.reload);
});