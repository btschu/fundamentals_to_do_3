// Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array.

function printOneReturnAnother(arr){
    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 != 0){
            return arr[i];
        }
    }
    return "There are no odd values in this array!!!";
}

console.log("First Array:");
console.log(printOneReturnAnother([2,4,6,8,11,12,14,16]));
console.log("Second Array:");
console.log(printOneReturnAnother([2,4,6,8,12,14,16]));
