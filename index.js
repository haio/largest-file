var fs = require('fs');
var co = require('co');
var path = require('path');
var thunkify = require('thunkify');
var readdir = thunkify(fs.readdir);
var stat = thunkify(fs.stat);

module.exports = co(function *(dir) {
    var files = yield readdir(dir);
    var stats = yield files.map(function (file) {
        return stat(path.join(dir, file));
    });
    var largest = stats
        .filter(function (stat) { return stat.isFile(); })
        .reduce(function (prev, next) {
            return (prev.size > next.size) ? prev : next;
        });

    return files[stats.indexOf(largest)];
});