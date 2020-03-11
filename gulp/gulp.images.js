// BUILD
gulp.task('copy:images', function() {
  gulp.src(config.src.images)
    .pipe(gulp.dest(config.dist.images))
});