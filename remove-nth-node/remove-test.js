const assert = require('assert')
const { Node, LinkedList} = require('../merge-linked/linked-list')
const { removenth } = require('./remove')

if (require.main === module) {
    let n1 = new Node(1)
    let n2 = new Node(2)
    let n3 = new Node(3)
    let n4 = new Node(4)
    let n5 = new Node(5)
    n1.next = n2
    n2.next = n3
    n3.next = n4
    n4.next = n5

    let newhead = removenth(n1, 2)
    let last = newhead
    let arr = []
    while (last !== null) {
        arr.push(last.data)
        last = last.next
    }

    assert.deepStrictEqual(arr, [1, 2, 3, 5])

    n1 = new Node(1)
    n2 = new Node(2)
    n1.next = n2
    newhead = removenth(n1, 1)
    last = newhead
    arr = []
    while (last !== null) {
        arr.push(last.data)
        last = last.next
    }

    assert.deepStrictEqual(arr, [1])
}