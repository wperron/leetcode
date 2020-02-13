function lengthOfSubstring(str) {
    const chars = str.split('')
    let last = []
    for (let i = 0; i < chars.length; i++) {
        let remaining = chars.slice(i)
        remaining.forEach((_, j, arr) => {
            const before = arr.slice(0, j + 1)
            const uniq = [...new Set(before)]
            if (uniq.length === before.length && uniq.length > last.length) {
                last = before
            }
        })
    }
    return last.length
}

module.exports = {
    lengthOfSubstring
}