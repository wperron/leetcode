const assert = require('assert')
const { letterCombinations } = require('./letter-combination')

if (require.main === module) {
    assert.deepStrictEqual(letterCombinations("23"), ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
}