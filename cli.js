#!/usr/bin/env node
'use strict';

var meow = require('meow');
var mainfile = require('./index.js');

var cli = meow({
    help: [
        'Usage',
        '    zipme z <file_path> // this will zip the file',
        '    zipme uz <file_path> // this will unzip the file',
        'Example',
        '    zipme /home/aupadhyay/Videos/amit.mp4',
        '',
        'Developer',
        '    Amit Upadhyay (github.com/amit-upadhyay-it)'
    ].join('\n')
});

mainfile(cli.input[0], cli.input[1]);
