const assert = require('assert')
const { median } = require('./array-median')

if (require.main === module) {
    assert.strictEqual(median([1, 3], [2]), 2.0)
    assert.strictEqual(median([1, 2], [3, 4]), 2.5)
    assert.strictEqual(median([3], [-2, -1]), -1)
}