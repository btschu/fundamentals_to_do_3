// Given an array, add 1 to the value located at each odd indices of the array ([1], [3], etc.), console.log all values and return arr.

// Example [1,2,3,4,5,6] would become [1,3,3,5,5,7]


function incrementTheSeconds(arr){
    for (var i = 0; i < arr.length; i++){
        if (i % 2 != 0){
            arr[i]++;
        }
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementTheSeconds([1,2,3,4,5,6]));


// another solution

// function incrementTheSecond(arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++)
//         if (arr[arr[i]] % 2 != 0) {
//             newArr.push(arr[i] + 1)
//         }
//         else {
//             newArr.push(arr[i])
//         }
//     return newArr
// }

// console.log(incrementTheSecond([1,2,3,4,5,6]));