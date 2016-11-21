var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('pranie', function(){
	console.log('robię pranie i co');
});

gulp.task('sass', function(){
	return gulp.src('scss/*.scss')
		.pipe(sass({errLogToConsole:true, 
			outputStyle: 'compact',
			sourceComments: 'map'}))
		.pipe(gulp.dest('css'))
});


gulp.task('watch', function(){
	gulp.watch('scss/**/*.scss', ['sass']);
});
