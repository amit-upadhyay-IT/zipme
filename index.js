'use strict';

var zlib = require('zlib');
var fs = require('fs');


module.exports = function(operation, filePath) {


    if (operation === 'z')
    {
        // need to do zipping of the filePath
        if (fs.existsSync(filePath))
        {
            var r = fs.createReadStream(filePath);
            var w = fs.createWriteStream(filePath+'.zipme');

            r.pipe(zlib.createGzip()).pipe(w);
            r.on('end', function() {
                console.log('\nFile compressed successfully');
            });
            r.on('error', function(err) {
                console.log(err);
            });
        }
        else
        {
            console.log(filePath + ' doesn\'t exists, enter path properly!');
        }

    }
    else if (operation === 'uz')
    {
        // need to do unzipping of the filePath
        if (fs.existsSync(filePath))
        {
            var r = fs.createReadStream(filePath);
            var properFileName = filePath.replace('.zipme', '');
            var w = fs.createWriteStream(properFileName);

            r.pipe(zlib.createGzip()).pipe(w);
            r.on('end', function() {
                console.log('\nFile de-compressed successfully');
            });
            r.on('error', function(err) {
                console.log(err);
            });
        }
        else
        {
            console.log(filePath + ' doesn\'t exists, enter path properly!');
        }
    }
    else
    {
        console.log('Enter the command properly');
        console.log('check : zipme --help');
    }

};
