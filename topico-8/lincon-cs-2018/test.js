const lib = require('./app')

let arr = new Array(100)
arr.fill(0, 0, 100)
console.log(lib.CrivoEratostenes(arr, 100), arr[99])
