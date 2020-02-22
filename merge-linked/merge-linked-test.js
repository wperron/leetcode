const assert = require('assert')
const { merge } = require('./merge-linked')
const { LinkedList } = require('./linked-list')

if (require.main === module) {
    let res, actual, last

    // Assumes lists are sorted before merging
    res = merge([
        new LinkedList([1, 4, 5]).sort().head,
        new LinkedList([1, 3, 4]).sort().head,
        new LinkedList([2, 6]).sort().head,
    ])
    actual = []
    last = res
    while (last !== null) {
        actual.push(last.data)
        last = last.next
    }

    assert.deepStrictEqual(actual, actual.sort())

    res = merge([
        new LinkedList([4, 1, 5]).sort().head,
        new LinkedList([1, 4, 3]).sort().head,
        new LinkedList([2, 6]).sort().head,
    ])
    actual = []
    last = res
    while (last !== null) {
        actual.push(last.data)
        last = last.next
    }

    assert.deepStrictEqual(actual, actual.slice().sort())
}