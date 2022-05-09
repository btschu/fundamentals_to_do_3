// Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr){
    var low = arr[0];
    var high = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < low){
            low = arr[i];
        }
        if (arr[i] > high){
            high = arr[i];
        }
    }
    console.log("Low is " + low);
    return "High is " + high;
}

console.log(printLowReturnHigh([1,2,3,4,5,6,7,8,9]));
