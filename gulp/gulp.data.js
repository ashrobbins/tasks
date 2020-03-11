// BUILD
gulp.task('copy:data', function() {
  gulp.src(config.src.data)
    .pipe(gulp.dest(config.dist.data))
})