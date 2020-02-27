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
    const set = {
        ['()'.repeat(n)]: true,
        ['('.repeat(n) + ')'.repeat(n)]: true,
    }

    for (let i = 1; i < n; i++) {
        generate(i).forEach(g1 => {
            generate(n - i).forEach(g2 => {
                set[g1.slice(0, g1.length / 2) + g2 + g1.slice(g1.length / 2)] = true
                set[g1 + g2] = true
            })
        })
    }

    return Object.keys(set)
}

module.exports = {
    valid,
    generate,
}