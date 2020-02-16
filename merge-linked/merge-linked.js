const { LinkedList } = require('./linked-list')

function convert(s) {
    let ints = []
    s.split('').forEach(c => {
        const parsed = parseInt(c)
        if (!isNaN(parsed)) {
            ints.push(parsed)
        }
    })
    return ints
}

function merge(lists) {
    let llists = []
    lists.forEach(l => {
        llists.push(new LinkedList(l))
    })
    let ref = llists.pop()
    llists.forEach(l => {
        for (const val of l) {
            ref.push(val)
        }
    })
    return ref.sort()
}

var mergeKLists = function(lists) {
    let flat = []
    Array.prototype.push.apply(flat, lists[0])
    return flat.sort()
}

module.exports = {
    merge,
    mergeKLists,
}