class Node {
    constructor(d, n = null) {
        this.data = d
        this.next = n
    }
}

class LinkedList {
    constructor(l) {
        if (l.length > 0) {
            this.head = new Node(l[0])
            let last = this.head
            for (let i = 1; i < l.length; i++) {
                let node = new Node(l[i])
                last.next = node
                last = node
            }
        }
        else {
            this.head = null
        }
    }

    toString() {
        let curr = this.head
        let out = []
        while (curr !== null) {
            out.push(curr.data)
            curr = curr.next
        }
        return out.join(' -> ')
    }

    toArray() {
        let vals = []
        let curr = this.head
        while (curr !== null) {
            vals.push(curr.data)
            curr = curr.next
        }
        return vals
    }

    push(n) {
        if (this.head === null) {
            this.head = new Node(n)
            return
        }
        let last = this.head
        while (last.next !== null) {
            last = last.next
        }
        last.next = new Node(n)
    }

    pop() {
        let penultimate = this.head
        while (penultimate.next.next !== null) {
            penultimate = penultimate.next
        }
        let last = penultimate.next
        penultimate.next = null
        return last.data
    }

    shift() {
        let first = this.head
        this.head = first.next
        return first.data
    }

    unshift(n) {
        this.head = new Node(n, this.head)
    }

    insert(prev, n) {
        if (prev === null) {
            return
        }
        let newnode = new Node(n, prev.next)
        prev.next = newnode
    }

    remove(n) {
        let tmp = this.head
        let prev = null
        if (tmp !== null && tmp.data === n) {
            this.head = tmp.next
            return
        }

        while (tmp !== null && tmp.data !== n) {
            prev = tmp
            tmp = tmp.next
        }

        if (tmp === null) {
            return
        }

        prev.next = tmp.next
    }

    // sort in-place, return reference to self for chaining
    sort() {
        let vals = []
        let curr = this.head
        while (curr !== null) {
            vals.push(curr.data)
            curr = curr.next
        }
        vals.sort()
        let copy = new LinkedList(vals)
        this.head = copy.head
        return this
    }

    [Symbol.iterator]() {
        let curr = this.head
        return {
            next() {
                if (curr) {
                    let val = curr.data
                    curr = curr.next
                    return { value: val, done: false}
                }
                return { done: true }
            }
        }
    }
}

module.exports = {
    LinkedList,
    Node,
}