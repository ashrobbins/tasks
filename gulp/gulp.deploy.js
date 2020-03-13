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
