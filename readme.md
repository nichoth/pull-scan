## pull scan [![Build Status](https://travis-ci.org/nichoth/pull-scan.svg?branch=master)](https://travis-ci.org/nichoth/pull-scan)

[Scan algorithm](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/scan.md) for pull streams. It's like reduce, but emits intermediate values. So it's more like map but with an accumulator argument.

## example

```js
var test = require('tape')
var S = require('pull-stream')
var scan = require('../')

test('works given initial state', function (t) {
    t.plan(1)
    S(
        S.values([1,2,3]),

        scan(function (acc, n) {
            return acc + n
        }, 10),

        S.collect(function (err, data) {
            t.deepEqual(data, [11,13,16], 'should use init state argument')
        })
    )
})

test('use default init state', function (t) {
    t.plan(1)
    S(
        S.values([1,2,3]),

        scan(function (acc, n) {
            return acc + n
        }),

        S.collect(function (err, data) {
            t.deepEqual(data, [1,3,6],
                'should use first val as default state')
        })
    )
})
```
