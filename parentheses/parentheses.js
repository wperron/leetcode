function valid(s) {
    if (s.length & 1) return false // number of brackets must be even.

    const open  = ['(', '[', '{']
    const close = [')', ']', '}']
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {
            stack.push(s[i])
        }
        if (close.includes(s[i])) {
            let last = stack.pop()
            if (open.indexOf(last) !== close.indexOf(s[i])) return false
        }
    }
    return stack.length === 0
}

// find all paths through graph
function generate(n) {
    let set = ['(']
    let len = 1
    while (len < n * 2) { // keep going while permutations are less than twice the limit
        let tmp = []
        for (let i = 0; i < set.length; i++) { // for every known path
            let curr = set[i]
            let groups = 0  // number of logical groups, ex: ()(()) -> 3 groups
            let stack  = [] // stack of opened groups
            for (let j = 0; j < curr.length; j++) {
                if (curr[j] === '(') {
                    groups++
                    stack.push(curr[j])
                }
                else {
                    stack.pop()
                }
            }

            if (groups === n) {
                tmp.push(curr + ')')
            }
            else if (stack.length > 0) {
                tmp.push(curr + '(', curr + ')')
            }
            else {
                tmp.push(curr + '(')
            }
            len = curr.length + 1
        }
        set = tmp
    }
    return set
}

module.exports = {
    valid,
    generate,
}