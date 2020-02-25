function findAvailabilities(a, abound, b, bbound, inc) {
    const avail = []
    a = a.map(x => [toSeconds(x[0]), toSeconds(x[1])])
    b = b.map(x => [toSeconds(x[0]), toSeconds(x[1])])
    abound = [toSeconds(abound[0]), toSeconds(abound[1])]
    bbound = [toSeconds(bbound[0]), toSeconds(bbound[1])]
    a.push([abound[1], abound[1]])
    b.push([bbound[1], bbound[1]])

    let i = abound[0], j = bbound[0]
    let anext = 0, bnext = 0
    while (i < abound[1] && j < bbound[1]) {
        while (anext < a.length && i >= a[anext][0]) {
            i = a[anext][1]
            anext < a.length && anext++
        }
        while (bnext < b.length && j >= b[bnext][0]) {
            j = b[bnext][1]
            bnext < b.length && bnext++
        }

        if (
            i < j && a[anext] && a[anext][0] > j || 
            i >= j && b[bnext] && b[bnext][0] > i
        ) {
            let from = Math.max(i, j)
            let to = Math.min(a[anext][0], b[bnext][0])
            if (to - from >= 60 * inc) avail.push([from, to])
            i = a[anext][1]
            j = b[bnext][1]
        }
    }
    return avail.map(x => [toHours(x[0]), toHours(x[1])])
}

function toSeconds(hour) {
    const parts = hour.split(":")
    return (parseInt(parts[0]) * 60 * 60) + (parseInt(parts[1]) * 60)
}

function toHours(seconds) {
    const hours = Math.floor(seconds / (60 * 60))
    const minutes = seconds % 3600 / 60
    return hours.toString().padStart(2, '0')
        + ":" 
        + minutes.toString().padStart(2, '0')
}

module.exports = {
    findAvailabilities,
    toHours,
    toSeconds,
}