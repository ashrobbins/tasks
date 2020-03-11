// BUILD
gulp.task('copy:pwa:manifest', function () {
    gulp.src(config.src.pwa.manifest)
        .pipe(gulp.dest(config.dist.folder))
});

gulp.task('copy:pwa:sw', function () {
    gulp.src(config.src.pwa.sw)
        .pipe(gulp.dest(config.dist.folder))
});
