//script paths
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

var jsFiles = [
    'assets/js/jQuery/jquery-2.2.3.min.js',
    'assets/js/**/*.js',
    'lib/angular-1.4.14/angular.min.js',
    'lib/angular-1.4.14/angular-route.min.js',
    'app/app.js',
    'app/route.js',
    'app/directives/pageHeader/pageHeaderDirective.js',
    'app/modules/home/controllers/homeCtrl.js'
],
    jsDest = 'dist/scripts';

gulp.task('scripts', function () {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});