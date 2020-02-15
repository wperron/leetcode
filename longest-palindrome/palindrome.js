function isPalindrome(s) {
    return s === s.split('').reverse().join('')
}

function pal(s) {
    if (s.length <= 1) return s
    if (isPalindrome(s)) return s
    let start = 0
    let max = 0
    let i = 0
    while (i < s.length) {
        // initialize lower/upper bounds of substr
        let left = i
        let right = i
        // guard clause if middle of palindrome has duplicates/even number of chars
        while (right < s.length - 1 && s[right] === s[right + 1]) {
            right++
        }
        i = right + 1 // set loop counter to next non-duplicate character
        // while next chars outbound are equal, increment upper/lower bounds
        while (right < s.length - 1 && left > 0 && s[right + 1] === s[left - 1]) {
            right++
            left--
        }
        // calculate new maximum length
        let newlen = right - left + 1
        if (newlen > max) {
            start = left
            max = newlen
        }
    }
    return s.slice(start, start + max)
}

module.exports = {
    pal,
    isPalindrome,
}