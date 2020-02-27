function volume(heightmap) {
    let volume = 0
    let leftmax = 0, rightmax = 0
    let left = 0, right = heightmap.length - 1
    while (left < right) {
        if (heightmap[left] < heightmap[right]) {
            heightmap[left] >= leftmax ? leftmax = heightmap[left] : volume += leftmax - heightmap[left]
            left++
        }
        else{
            heightmap[right] >= rightmax ? rightmax = heightmap[right] : volume += rightmax - heightmap[right]
            right--
        }
    }
    return volume
}

module.exports = {
    volume,
}