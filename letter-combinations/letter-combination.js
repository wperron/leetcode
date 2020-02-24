function letterCombinations(digits) {
    const letters = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }
    digits = digits.split('')
    let combinations = [''] // initialize with at least one element
    for (let i = 0; i < digits.length; i++) {
        let tmp = []
        for (let j = 0; j < combinations.length; j++) {
            for (let k = 0; k < letters[digits[i]].length; k++) {
                console.log(combinations[j] + letters[digits[i]][k])
                tmp.push(combinations[j] + letters[digits[i]][k])
            }
        }
        combinations = tmp
    }
    return combinations
}

module.exports = {
    letterCombinations,
}