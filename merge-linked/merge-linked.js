const { LinkedList, Node } = require('./linked-list')

function merge(heads) {
    const half = Math.ceil(heads.length / 2)
    let left = heads.slice(0, half)
    let right = heads.slice(half)
    if (left.length > 1) left = merge(left)
    else left = left[0]
    if (right.length > 1) right = merge(right)
    else right = right[0]

    const start = new Node(-1)
    let last = start
    let i = left, j = right
    while (i && j) {
        if (i.data < j.data) {
            last.next = i
            last = i
            i = i.next
        } else {
            last.next = j
            last = j
            j = j.next
        }
    }
    if (i !== null) {
        last.next = i
    }
    if (j !== null) {
        last.next = j
    }
    return start.next
}

module.exports = {
    merge,
}