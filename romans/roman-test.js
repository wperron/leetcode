const assert = require('assert')
const { itor, rtoi } = require('./roman')

if (require.main === module) {
    // convert decimal integers to roman
    assert.strictEqual(itor(1), "I")
    assert.strictEqual(itor(4), "IV")
    assert.strictEqual(itor(5), "V")
    assert.strictEqual(itor(9), "IX")
    assert.strictEqual(itor(10), "X")
    assert.strictEqual(itor(14), "XIV")
    assert.strictEqual(itor(15), "XV")
    assert.strictEqual(itor(19), "XIX")
    assert.strictEqual(itor(20), "XX")
    assert.strictEqual(itor(39), "XXXIX")
    assert.strictEqual(itor(40), "XL")
    assert.strictEqual(itor(49), "XLIX")
    assert.strictEqual(itor(50), "L")
    assert.strictEqual(itor(54), "LIV")
    assert.strictEqual(itor(99), "XCIX")
    assert.strictEqual(itor(100), "C")
    assert.strictEqual(itor(240), "CCXL")
    assert.strictEqual(itor(245), "CCXLV")
    assert.strictEqual(itor(499), "CDXCIX")
    assert.strictEqual(itor(500), "D")
    assert.strictEqual(itor(999), "CMXCIX")
    assert.strictEqual(itor(1000), "M")

    // convert roman numeral to decimal integer
    assert.strictEqual(rtoi("I"), 1)
    assert.strictEqual(rtoi("IV"), 4)
    assert.strictEqual(rtoi("V"), 5)
    assert.strictEqual(rtoi("IX"), 9)
    assert.strictEqual(rtoi("X"), 10)
    assert.strictEqual(rtoi("XIV"), 14)
    assert.strictEqual(rtoi("XV"), 15)
    assert.strictEqual(rtoi("XIX"), 19)
    assert.strictEqual(rtoi("XX"), 20)
    assert.strictEqual(rtoi("XXXIX"), 39)
    assert.strictEqual(rtoi("XL"), 40)
    assert.strictEqual(rtoi("XLIX"), 49)
    assert.strictEqual(rtoi("L"), 50)
    assert.strictEqual(rtoi("LIV"), 54)
    assert.strictEqual(rtoi("XCIX"), 99)
    assert.strictEqual(rtoi("C"), 100)
    assert.strictEqual(rtoi("CCXL"), 240)
    assert.strictEqual(rtoi("CCXLV"), 245)
    assert.strictEqual(rtoi("CDXCIX"), 499)
    assert.strictEqual(rtoi("D"), 500)
    assert.strictEqual(rtoi("CMXCIX"), 999)
    assert.strictEqual(rtoi("M"), 1000)
}