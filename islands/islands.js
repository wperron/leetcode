function islands(map) {
    let count = 0
    let visited = []
    let stack = []
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (visited.includes(`${i},${j}`) || map[i][j] === 0) {
                continue
            }
            stack.push([i, j])
            while (stack.length > 0) {
                curr = stack.pop()
                let x = curr[0], y = curr[1]
                // guard clause preventing nodes from being evaluated twice
                if (visited.includes(`${x},${y}`)) {
                    continue
                }
                // add the node as "visited"
                visited.push(`${x},${y}`)
                // left
                if (map[x - 1] !== undefined && map[x - 1][y] === 1) {
                    stack.push([x - 1, y])
                }
                // right
                if (map[x + 1] !== undefined && map[x + 1][y] === 1) {
                    stack.push([x + 1, y])
                }
                // up
                if (map[x][y - 1] === 1) {
                    stack.push([x, y - 1])
                }
                // down
                if (map[x][y + 1] === 1) {
                    stack.push([x, y + 1])
                }
            }
            count++
        }
    }
    return count
}

module.exports = {
    islands,
}