const gulp = require('gulp');
const sass = require('./build/sass');
const scripts = require('./build/scripts');
const images = require('./build/images');
const sync = require('./build/browsersync');

[sass, scripts, images, sync].forEach(task => {
    task(gulp);
});

gulp.task('build', gulp.series(['sass', 'scripts', 'images', 'jekyll-build']));

// var gulp = require('gulp');
// var deploy = require('gulp-gh-pages');

// /**
//  * Push build to gh-pages
//  */
// gulp.task('deploy', function() {
//     return gulp.src("./dist/**/*")
//         .pipe(deploy())
// });

const { src, task } = require('gulp');
const ghPages = require('gulp-gh-pages');

task('deploy', () => src('./**/*').pipe(ghPages()));