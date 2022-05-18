// Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr) {
    var positiveCount = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        }
    }
    arr[arr.length-1] = positiveCount;
    return arr;
}

console.log(countPositives([-1,1,1,1]));