const { Node, LinkedList } = require('../merge-linked/linked-list')

/**
 * Remove Nth element from end of a list
 * @param {Array} list
 * @param {Number} n
 */
function removenth(head, n) {
    if (head.next === null) return null
    let buf = []
    let last = head
    while (last !== null) {
        buf.push(last)
        buf = buf.slice(-n - 1)
        last = last.next
    }

    // handle case where n is equal to the length of the list, thus removing the first item
    if (buf.length > n) {
        buf[0].next = buf[2] ? buf[2] : null
        return head
    }
    else {
        return head.next
    }
}

module.exports = {
    removenth,
}