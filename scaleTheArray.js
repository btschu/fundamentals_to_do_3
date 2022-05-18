// Given array arr and number num, multiply each arr value by num, and return the changed arr.

// Example scaleArr([1,2,3,4,5],3) = 3,6,9,12,15

function scaleTheArr (arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= num
    }
    return arr
}

console.log(scaleTheArr([1,2,3,4,5],3));