// Given array, swap first and last, third and third-to-last, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swapTowardTheCenter(arr){
    var left = 0;
    var right = arr.length -1;
    while(left < right){
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left+=2;
        right-=2;
    }
    return arr;
}

console.log(swapTowardTheCenter([true,42,"Ada",2,"pizza"])); // ["pizza",42,"Ada",2,true]
console.log(swapTowardTheCenter([1,2,3,4,5,6])); // [6,2,4,3,5,1]