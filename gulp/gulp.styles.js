// BUILD
gulp.task('sass', function () {
    return gulp.src(config.src.styles.index)
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(nano({
            zindex: false
        }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(rename('main.css'))
        .pipe(gulp.dest(config.dist.styles))
        .pipe(connect.reload())
});

gulp.task('sass:prod', function () {
    return gulp.src(config.src.styles.index)
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(nano({
            zindex: false
        }))
        .pipe(autoprefixer())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest(config.dist.styles))
});

gulp.task('sass:watch', [ 'sass' ], function () {
    gulp.watch(config.src.styles.css, [ 'sass' ]);
});
