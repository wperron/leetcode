const assert = require('assert')
const { prefix } = require('./longest-prefix')

if (require.main === module) {
    assert.strictEqual(prefix(["flower", "flow", "flight"]), "fl")
    assert.strictEqual(prefix(["dog", "racecar", "car"]), "")
    assert.strictEqual(prefix(["carpet", "carpet"]), "carpet")
    assert.strictEqual(prefix([]), "")
    assert.strictEqual(prefix(["foobar"]), "foobar")
}