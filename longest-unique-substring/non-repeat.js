function lengthOfSubstring(str) {
    let last = {} // last known index for each char
    let max = 0 // length of the longest substring
    // i runs through the length of the string
    // j is set to (last known index for char[i] + 1)
    for (let i = 0, j = 0; i < str.length; i++) {
        if (Object.keys(last).includes(str[i])) {
            j = Math.max(j, last[str[i]] + 1)
        }
        last[str[i]] = i
        max = Math.max(max, i - j + 1)
    }
    return max
}

module.exports = {
    lengthOfSubstring
}