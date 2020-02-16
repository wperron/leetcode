const assert = require('assert')
const { merge, mergeKLists } = require('./merge-linked')
const { LinkedList } = require('./linked-list')

if (require.main === module) {
    let res = mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]])
    console.log(res.toString())
}