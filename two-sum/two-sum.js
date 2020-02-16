function twosum(target, nums) {
    // runs in (n^2/2) - (n / 2) or O(n^2)
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

module.exports = {
    twosum,
}