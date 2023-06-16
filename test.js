let matriz = [
    [3, 12 ,-1],
    [11, -4, 3],
    [-3, -2, -12]
]
console.log(matriz)

let test = Math.max(...matriz[0])
console.log(test)

var xx = matriz.indexOf(matriz.reduce((accum, arr) =>{
    console.log(arr[0], accum[0])
    return arr[0] > accum[0] ? arr : accum
}))
var yy = matriz.indexOf(matriz.reduce((accum, arr) =>{
    return arr[1] > accum[1] ? arr : accum
}))
var zz = matriz.indexOf(matriz.reduce((accum, arr) =>{
    return arr[2] > accum[2] ? arr : accum
}))
console.log(xx)
console.log(yy)
console.log(zz)

const res = matriz[2].find(item => item != Math.max(...matriz[2]) && item != Math.min(...matriz[2]))
console.log(res+' res')

matriz=[
    [Math.max(...matriz[0]), matriz[0].find(item => item != Math.max(...matriz[0]) && item != Math.min(...matriz[0])) ,Math.min(...matriz[0])],
    [Math.min(...matriz[1]), Math.max(...matriz[1]), matriz[1].find(item => item != Math.max(...matriz[1]) && item != Math.min(...matriz[1]))],
    [Math.min(...matriz[2]), matriz[2].find(item => item != Math.max(...matriz[2]) && item != Math.min(...matriz[2])), Math.max(...matriz[2])]
]

// matriz = [
//     [matriz[xx][0], matriz[yy][1], matriz[zz][2], matriz[xx][3]],
//     [matriz[xx][1], matriz[yy][1], matriz[zz][2], matriz[yy][3]],
//     [matriz[xx][2], matriz[yy][1], matriz[zz][2], matriz[zz][3]]
// ]
console.log(matriz)