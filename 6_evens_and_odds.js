// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

// Example [1,1,2,5,5,5,10,10,10]

// Output:

// That's Odd

// That's Even

function evensAndOdds(arr) {
    var evenCount = 0;
    var oddCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenCount++;
            if (evenCount == 3) {
                evenCount = 0;
                console.log("Even more so!");
            }
        }
        else {
            oddCount++;
            if (oddCount == 3) {
            oddCount = 0;
            console.log("That's odd!");
            }
        }
    }
    return arr;
}

console.log(evensAndOdds([1,3,5,3,3,3,2,4,6,4,4,4]));