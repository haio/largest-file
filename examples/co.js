var co = require('co');
var thunkify = require('thunkify');
var largest = require('..');
var dir = process.argv[2] || '/tmp';
largest = thunkify(largest);

co(function *() {
    try {
        var largestFile = yield largest(dir);
        console.log('The largest file in %s is %s', dir, largestFile);
    } catch (e) {
        console.log('Oh, got error!');
    }
})();