// BUILD
gulp.task('copy:fonts', function() {
  gulp.src(config.src.fonts)
    .pipe(gulp.dest(config.dist.fonts))
})