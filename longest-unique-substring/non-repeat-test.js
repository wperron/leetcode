const assert = require('assert')
const { lengthOfSubstring } = require('./non-repeat')

if (require.main === module) {
    assert.strictEqual(lengthOfSubstring("abcabcbb"), 3)
    assert.strictEqual(lengthOfSubstring("bbbbb"), 1)
    assert.strictEqual(lengthOfSubstring("pwwkew"), 3)
    assert.strictEqual(lengthOfSubstring("abcde"), 5)
}