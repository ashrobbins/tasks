// BUILD
gulp.task('copy:html:dev', function () {
    gulp.src(config.src.html.index.dev)
        .pipe(htmlmin({ collapseWhitespace: false }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(config.dist.folder))
});

gulp.task('copy:html:test', function () {
    gulp.src(config.src.html.index.test)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(config.dist.folder))
});

gulp.task('copy:html:prod', function () {
    gulp.src(config.src.html.index.prod)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(config.dist.folder))
});
