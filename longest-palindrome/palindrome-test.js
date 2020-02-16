const assert = require('assert')
const { pal, isPalindrome } = require('./palindrome')

if (require.main === module) {
    assert.strictEqual(isPalindrome("abcba"), true)
    assert.strictEqual(isPalindrome("babad"), false)
    // assert.strictEqual(pal("babad"), "bab")
    assert.strictEqual(pal("cbbd"), "bb")
    assert.strictEqual(pal("a"), "a")
    assert.strictEqual(pal("bab"), "bab")
    assert.strictEqual(pal("baa"), "aa")
    assert.strictEqual(pal("1abcdefgfedcba0"), "abcdefgfedcba")

    // test very long input
    assert.strictEqual(pal("jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel"), "sknks")
}