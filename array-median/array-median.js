function median(a1, a2) {
    const merged = a1.concat(a2).sort((a, b) => a - b) // force numerical sort
    const half = Math.floor(merged.length / 2)
    console.log(merged, half)
    if (merged.length % 2 === 0) {
        return (merged[half - 1] + merged[half]) / 2
    }
    else {
        return merged[half]
    }
}

module.exports = {
    median,
}