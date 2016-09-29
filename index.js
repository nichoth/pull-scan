var map = require('pull-stream/throughs/map')

function scan (fn, acc) {
    return map(function (data) {
        if (acc === undefined) {
            acc = data
            return acc
        }
        acc = fn(acc, data)
        return acc
    })
}

module.exports = scan
