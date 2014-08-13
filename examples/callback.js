var largest = require('..');
var dir = process.argv[2] || '/tmp';

largest(dir, function (err, largestFile) {
    console.log('The largest file in %s is %s', dir, largestFile);
});