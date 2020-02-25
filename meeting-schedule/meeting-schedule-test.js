const assert = require('assert')
const { findAvailabilities, toSeconds, toHours } = require('./meeting-schedule')

if (require.main === module) {
    assert.strictEqual(toSeconds("00:30"), 60 * 30)
    assert.strictEqual(toSeconds("8:30"), 30600)
    assert.strictEqual(toHours(1800), "00:30")
    assert.strictEqual(toHours(30600), "08:30")
    const res = findAvailabilities(
        [["9:00", "10:30"], ["12:00", "13:00"], ["16:00", "18:00"]],
        ["9:00", "20:00"],
        [["10:00", "11:30"], ["12:30", "14:30"], ["14:30", "15:00"], ["16:00", "17:00"]],
        ["10:00", "18:30"],
        30
    )
    assert.deepStrictEqual(res, [["11:30", "12:00"], ["15:00", "16:00"], ["18:00", "18:30"]])
}