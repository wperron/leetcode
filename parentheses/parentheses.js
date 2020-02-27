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
    let set = ['('] // all combinations must start with an opened bracket
    for (let i = 0; i < (n * 2) - 1; i++) {
        let tmp = []
        for (let j = 0; j < set.length; j++) {
            tmp.push(set[j] + ')')
            tmp.push(set[j] + '(')
        }
        set = tmp
    }
    return set.filter(s => valid(s))
}

module.exports = {
    valid,
    generate,
}