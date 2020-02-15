function isPalindrome(s) {
    return s === s.split('').reverse().join('')
}

function pal(s) {
    let longest = ""
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (isPalindrome(s.slice(i, j)) && s.slice(i, j).length > longest.length) {
                longest = s.slice(i, j)
            } 
        }
    }
    return longest
}

module.exports = {
    pal,
    isPalindrome,
}