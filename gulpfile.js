var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    streamqueue = require('streamqueue');

// Add a task to render the output 
gulp.task('help', $.taskListing);

/*====================================================================
=               Build Zip to submit to PhoneGap Build                =
====================================================================*/

gulp.task('zip', function () {
	var filename =  "PhoneGapAppDeveloper.zip";
	return gulp.src([
		'www/**/*',
		'resources/icon/android/**/*',
		'resources/icon/ios/**/*',
		'resources/splash/ios/**/*',
		'config.xml'
	], {base: "."})
		.pipe($.zip(filename))
		.pipe(gulp.dest('.'));
});