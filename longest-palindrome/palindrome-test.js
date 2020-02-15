const assert = require('assert')
const { pal, isPalindrome } = require('./palindrome')

if (require.main === module) {
    assert.strictEqual(isPalindrome("abcba"), true)
    assert.strictEqual(isPalindrome("babad"), false)
    assert.strictEqual(pal("babad"), "bab")
    assert.strictEqual(pal("cbbd"), "bb")
}