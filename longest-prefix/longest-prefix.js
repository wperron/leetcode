function prefix(words) {
    if (words.length === 0) return ""
    if (words.length === 1) return words[0]
    words.sort((a, b) => a.length = b.length)
    const shortest = words.shift()
    let longest = ""
    for (let i = 0; i < shortest.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (words[j][i] !== shortest[i]) return longest
        }
        longest += shortest[i]
    }
    return longest
}

module.exports = {
    prefix,
}