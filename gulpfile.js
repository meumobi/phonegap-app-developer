var gulp = require('gulp'),
streamqueue = require('streamqueue'),
zip = require('gulp-zip');


/*====================================================================
=               Build Zip to submit to PhoneGap Build                =
====================================================================*/

gulp.task('build-zip', function () {
	var filename =  "PhoneGapAppDeveloper.zip";
	return gulp.src([
		'www/**/*',
		'resources/icon/android/**/*',
		'resources/icon/ios/**/*',
		'resources/splash/ios/**/*',
		'config.xml'
	], {base: "."})
		.pipe(zip(filename))
		.pipe(gulp.dest('.'));
});