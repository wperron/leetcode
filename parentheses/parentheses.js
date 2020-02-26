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

module.exports = {
    valid,
}