const assert = require('assert')
const { volume } = require('./rain-water')

if (require.main === module) {
    // assert.strictEqual(volume([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6)
    // assert.strictEqual(volume([2, 0, 2]), 2)
    // assert.strictEqual(volume([5, 4, 1, 2]), 1)
    assert.strictEqual(volume([5, 2, 1, 2, 1, 5]), 14)
}