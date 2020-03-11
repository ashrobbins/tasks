const myBrowserify = function() {
    return browserify({
        paths: [ config.dist.transpiled.folder, './node_modules' ],
        transform: [ babelify.configure( {
            presets: []
        } ) ]
    } );
};

var catchError = function(error) {
    console.log(error.toString());
    this.emit('end')
};

gulp.task('clean:dist-scripts', function() {
    return gulp.src(config.dist.scripts)
        .pipe(clean({
            force: true
        }));
});

gulp.task('clean:dist-transpiled', function() {
    return gulp.src(config.dist.transpiled.folder)
        .pipe(clean({
            force: true
        }));
});

gulp.task('polyfill', function() {
    return gulp.src(config.src.polyfill)
        .pipe(gulp.dest(config.dist.scripts));
});

gulp.task('transpile', ['clean:dist-scripts', 'clean:dist-transpiled'], function() {
    return gulp.src(config.src.scripts)
        .pipe(babel())
        .on('error', catchError)
        .pipe(gulp.dest(config.dist.transpiled.folder));
});

gulp.task('browserify', ['transpile'], function() {
    return gulp.src(config.dist.transpiled.index)
        .pipe(myBrowserify())
        .on('error', catchError)
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest(config.dist.scripts))
        .on('end', () => {
            gulp.src(config.dist.transpiled.folder)
                .pipe(clean({
                    force: true
                }));
            runSequence('polyfill');
        })
        .pipe(connect.reload());
});

gulp.task('bundle:build', function() {
    return gulp.src(config.dist.bundle.unminified)
        .pipe(rename('bundle.min.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(config.dist.scripts));
});
