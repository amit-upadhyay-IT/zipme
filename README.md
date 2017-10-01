# zipme [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A command line utility to compress and decompress any type of file.

Are you running out of space? Don't worry, you can save space by using zipme.

## Installation

```sh
$ npm install --g zipme
```

## Options
`zipme --help`

##### Example
      aupadhyay@localhost zipme$ zipme --help

      A command line utility to compress and de-compress any type of file.

      Usage
          zipme z <file_path> // this will zip the file
          zipme uz <file_path> // this will unzip the file
      Example
          zipme /home/aupadhyay/Videos/amit.mp4

      Developer
          Amit Upadhyay (github.com/amit-upadhyay-it)



## Usage

```
$ zipme z filename // this will compress the file 'filename'

$ zipme uz filename // this will decompress the file 'filename'

```
**NOTE**: Once the file gets compressed it's extension is changed to `.zipme`.

## Documentation

It's easy to use.

- To compress any file, just write `zipme z filename`, on the command line.
- To decompress the file, write `zipme uz filename`, on the command line.

## License

Apache-2.0 © [Amit Upadhyay](https://github.com/amit-upadhyay-IT)


[npm-image]: https://badge.fury.io/js/zipme.svg
[npm-url]: https://npmjs.org/package/zipme
[travis-image]: https://travis-ci.org/amit-upadhyay-it/zipme.svg?branch=master
[travis-url]: https://travis-ci.org/amit-upadhyay-it/zipme
[daviddm-image]: https://david-dm.org/amit-upadhyay-it/zipme.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/amit-upadhyay-it/zipme
[coveralls-image]: https://coveralls.io/repos/amit-upadhyay-it/zipme/badge.svg
[coveralls-url]: https://coveralls.io/r/amit-upadhyay-it/zipme
