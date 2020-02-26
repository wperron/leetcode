const { Node, LinkedList } = require('../merge-linked/linked-list')

/**
 * Remove Nth element from end of a list
 * @param {Array} list
 * @param {Number} n
 */
function removenth(head, n) {
    let arr = []
    let last = head
    while (last !== null) {
        arr.push(last.data)
        last = last.next
    }

    let newhead = new Node('')
    let next = newhead
    for (let i = 0; i < arr.length; i++) {
        if (i !== arr.length - n) {
            let n = new Node(arr[i])
            next.next = n
            next = n
        }
    }
    return newhead.next
}

module.exports = {
    removenth,
}