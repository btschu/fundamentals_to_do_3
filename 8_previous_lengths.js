// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index, replace the first value with the length of the last string – and return the array.

// Example ['this', 'is', 'an', 'array']

// Output [5,4,2,2]

function previousLength(arr) {
    var lastString = arr[arr.length - 1];
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    arr[0] = lastString.length
    return arr
}

console.log(previousLength(["this", "is", "an", "array"]));
console.log(previousLength(["I", "am", "testing", "this", "again", "to", "see", "if", "it", "works"]));
console.log(previousLength(["woohoo"]));