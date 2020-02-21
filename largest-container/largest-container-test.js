const assert = require('assert')
const { largest } = require('./largest-container')

if (require.main === module) {
    assert.strictEqual(largest([1,8,6,2,5,4,8,3,7]), 49)
}