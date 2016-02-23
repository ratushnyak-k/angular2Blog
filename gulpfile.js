var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    tsProject = tsc.createProject('tsconfig.json'),
    config = require('./gulp.config')(),
    util = require('gulp-util'),
    browserSync = require('browser-sync'),
    superstatic = require('superstatic'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    jeet = require('jeet'),
    rupture = require('rupture'),
    prefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    del = require('del');

function Gdelete (error, deletedFiles) {
    if (error) error(error);
    util.log(util.colors.yellow('Files deleted: ', deletedFiles.join(', ')));
}
function error (error) {
    util.log(util.colors.red(error.toString()));
}
gulp.task('ts-lint', function() {
    return gulp.src(config.allTs)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }));
});

gulp.task('compile-ts', function() {
    var sourceTsFiles = [
        config.allTs
    ];

    var tsResult = gulp
        .src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('serve', ['ts-lint', 'compile-ts'], function() {

    gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);

    browserSync({
        port: 3000,
        files: ['index.html', '**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: ['./'],
            middleware: superstatic({ debug: false})
        }
    });
});
gulp.task('style:dev', ['css:del'], function () {
 return gulp.src('app/static/styles/src/*.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({use:[nib(),jeet(),rupture()], 'include css': true})).on('error', error)
    .pipe(prefixer({ browsers: ['last 2 version'], cascade: false }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/static/styles/dist/'))
    .pipe(browserSync.reload({stream:true}));
});
gulp.task('css:del', function () {
    del('app/static/styles/dist/*.css', Gdelete);
});

gulp.task('image', ['img:del'], function () {
  return gulp.src('app/static/images/src/*.*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        })).on('error', error)
        .pipe(gulp.dest('app/static/images/dist'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('img:del', function () {
    del('app/static/images/dist', Gdelete);
});
gulp.task('default', ['serve', 'style:dev', 'image']);
