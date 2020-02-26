const assert = require('assert')
const { valid } = require('./parentheses')

if (require.main === module) {
    assert.strictEqual(valid('[](){}'), true)
    assert.strictEqual(valid('()'), true)
    assert.strictEqual(valid('{[}'), false)
    assert.strictEqual(valid('({[]{}})((()))'), true)
}