/////////////////////////////////////
// Global tasks                    //
/////////////////////////////////////

gulp.task('connect', function () {
    connect.server({
        https: true,
        root: config.dist.folder,
        host: config.webserver.localhost,
        port: config.webserver.port,
        livereload: true,
        fallback: 'index.html'
    })
});

gulp.task('clean:dist', function () {
    return gulp.src([
            config.dist.styles,
            config.dist.images,
            config.dist.fonts,
            config.dist.data
        ])
        .pipe(clean({
            force: true
        }))
});

gulp.task('watch', function () {
    return gulp.watch(config.src.scripts, [ 'browserify' ])
});

gulp.task('start', function () {
    runSequence(
        'clean:dist',
        'copy:html:dev',
        'copy:pwa:manifest',
        'copy:pwa:sw',
        'copy:images',
        'copy:fonts',
        'copy:data',
        'browserify',
        'watch',
        'sass:watch',
        'connect'
    )
});

gulp.task('default', function () {
    runSequence(
        'clean:dist',
        'sass',
        'copy:html:dev',
        'copy:pwa:manifest',
        'copy:pwa:sw',
        'copy:images',
        'copy:fonts',
        'copy:data',
        'browserify'
    )
});

gulp.task('dev:build', function () {
    runSequence(
        'clean:dist',
        [
            'sass',
            'copy:html:dev',
            'copy:pwa:manifest',
            'copy:pwa:sw',
            'copy:images',
            'copy:fonts',
            'copy:data',
            'browserify'
        ],
        ['write:version']
    )
});

gulp.task('test:build', function () {
    runSequence(
        'clean:dist',
        [
            'apply-prod-environment',
            'sass:prod',
            'copy:html:test',
            'copy:pwa:manifest',
            'copy:pwa:sw',
            'copy:images',
            'copy:fonts',
            'copy:data',
            'browserify'
        ],
        ['write:version'],
        ['bundle:build']
    )
});

gulp.task('prod:build', function () {
    runSequence(
        'clean:dist',
        [
            'apply-prod-environment',
            'sass:prod',
            'copy:html:prod',
            'copy:pwa:manifest',
            'copy:pwa:sw',
            'copy:images',
            'copy:fonts',
            'copy:data',
            'browserify',
        ],
        ['write:version'],
        ['bundle:build']
    )
});

//Used to ensure we package the prod version of React
// Taken from: https://stackoverflow.com/questions/32526281/how-to-set-react-to-production-mode-when-using-gulp
gulp.task('apply-prod-environment', function() {
    process.stdout.write("Setting NODE_ENV to 'production'" + "\n");
    process.env.NODE_ENV = 'production';
    if (process.env.NODE_ENV != 'production') {
        throw new Error("Failed to set NODE_ENV to production :'( ");
    } else {
        process.stdout.write("Successfully set NODE_ENV to production" + "\n");
    }
});
