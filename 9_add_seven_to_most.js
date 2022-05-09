// Build a function that accepts an array. Return a new array with all values except the first index, adding 7 to each. Do not alter the original array.

//  Example [1,2,3,4,5]

// Output [9,10,11,12]

function addSevenToMost(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 7)
    }
    newArr.shift() //shift removes the first index
    console.log(arr); //to make sure the original array did not change
    return newArr
}

console.log(addSevenToMost([1, 2, 3, 4, 5])); // [9.10.11.12]