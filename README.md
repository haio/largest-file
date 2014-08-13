# Largest File

Find the largest file in a specify directory

## Usage

### CO style

```js
largest = thunkify(largest);
co(function *() {
    try {
        var largestFile = yield largest(dir);
        console.log('The largest file in %s is %s', dir, largestFile);
    } catch (e) {
        console.log('Oh, got error!');
    }
})();
```

### Callback style

```js
largest(dir, function (err, largestFile) {
    console.log('The largest file in %s is %s', dir, largestFile);
});
```