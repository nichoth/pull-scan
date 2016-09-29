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
