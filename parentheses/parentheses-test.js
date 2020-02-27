const assert = require('assert')
const { valid, generate } = require('./parentheses')

function testValid() {
    assert.strictEqual(valid('[](){}'), true)
    assert.strictEqual(valid('()'), true)
    assert.strictEqual(valid('{[}'), false)
    assert.strictEqual(valid('({[]{}})((()))'), true)
}

function testGenerate() {
    console.log(generate(3))
}

if (require.main === module) {
    testValid()
    testGenerate()
}