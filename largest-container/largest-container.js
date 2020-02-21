function largest(height) {
    let max = 0
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const area = Math.min(height[i], height[j]) * (j - i)
            if (area > max) max = area
        }
    }
    return max
}

module.exports = {
    largest,
}