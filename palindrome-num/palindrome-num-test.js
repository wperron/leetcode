const assert = require('assert')
const { isPalindrome } = require('./palindrome-num')

if (require.main === module) {
    assert.strictEqual(isPalindrome(121), true)
    assert.strictEqual(isPalindrome(-121), false)
    assert.strictEqual(isPalindrome(12321), true)
    assert.strictEqual(isPalindrome(155), false)
}