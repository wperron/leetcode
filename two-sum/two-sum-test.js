const assert = require('assert')
const { twosum } = require('./two-sum')

if (require.main === module) {
    assert.deepStrictEqual(twosum(9, [2, 7, 11, 15]), [0, 1])
    assert.deepStrictEqual(twosum(6, [3, 2, 4]), [1, 2])
    assert.deepStrictEqual(twosum(6, [3, 3]), [0, 1])
    assert.deepStrictEqual(twosum(0, [0, 4, 3, 0]), [0, 3])
    assert.deepStrictEqual(twosum(1, [1, 4, 3, 0]), [0, 3])
    assert.deepStrictEqual(twosum(0, [-3, 4, 3, 90]), [0, 2]) // negative numbers should work
    assert.deepStrictEqual(twosum(100000000, [50000000,3,2,4,50000000]), [0, 4])
}