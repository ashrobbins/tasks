var publisher = awspublish.create( {
    region: config.s3.resources.region,
    params: {
      Bucket: config.s3.resources.bucket
    },
    credentials: new AWS.SharedIniFileCredentials( { profile: config.s3.resources.profile } )
} );

gitHash = false;
gitTag = 'N/A';

/* Get latest githash and write to version.txt file */
gulp.task( 'write:version', function(){
    var dir = './dist/ver';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    git.short(function( str ) {
        gitHash = str;

        let versionContent = 'Git Hash: ' + gitHash + '\r\n';
        versionContent += 'Build Date: ' + new Date() + '\r\n';

        return fs.writeFile(config.dist.folder + '/ver/version.txt', versionContent);
    });
});

gulp.task( 'dev-deploy', function () {

    return gulp.src( config.deploy_src )
    .pipe(rename( function( filePath ) {
        filePath.dirname = path.join( config.s3.resources.dev.path, filePath.dirname );
    } ) )
    .pipe( parallelize( publisher.publish(), 40 ) )
    .pipe( awspublish.reporter() )
    .on('end', function(){
        console.log(color('Dev deployment complete.', 'GREEN'));
    });
});

// Deploy to dev
gulp.task( 'deploy:dev', function() {
    runSequence( ['write:version'], 'dev-deploy' );
});

gulp.task( 'test-deploy', function() {

    return gulp.src( config.deploy_src )
    .pipe(rename( function( filePath ) {
        filePath.dirname = path.join( config.s3.resources.test.path, filePath.dirname );
    } ) )
    .pipe( parallelize( publisher.publish(), 40 ) )
    .pipe( awspublish.reporter() )
    .on('end', function(){
        console.log(color('Test deployment complete.', 'GREEN'));
    });
});

// Deploy to test
gulp.task( 'deploy:test', function() {
    runSequence( ['write:version'], 'test-deploy' );
});

gulp.task( 'prod-deploy', function() {

    return gulp.src(config.deploy_src)
    .pipe(rename( function( filePath ) {
        filePath.dirname = path.join( config.s3.resources.prod.path, filePath.dirname );
    } ) )
    .pipe( parallelize( publisher.publish(), 40 ) )
    .pipe( awspublish.reporter() )
    .on('end', function(){
        console.log(color('Prod deployment complete.', 'GREEN'));
    });
});

// Deploy to production
gulp.task( 'deploy:prod', function() {
    runSequence( ['write:version'], 'prod-deploy' );
});

