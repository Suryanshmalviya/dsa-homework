//https://leetcode.com/problems/reverse-string/
// Topic:Arrays, Easy - Reverse Array. 
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

let arr: number[] = [5, 4, 3, 2, 1, 0];
let reversearr: number[] = [];

for (let i = arr.length - 1; i >= 0; i--){
    reversearr.push(arr[i]);
}
console.log("The Reversed Array is :", reversearr);

// output:
// The Reversed Array is : [0, 1, 2, 3, 4, 5]
// The code has been implemented and tested successfully.

// Explanation: 
// The code initializes an array 'arr' with numbers from 5 to 0.
// It then creates an empty array 'reversearr' to store the reversed elements.
// A for loop iterates through 'arr' from the last index to the first.
// During each iteration, the current element is pushed into 'reversearr'.
// Finally, the reversed array is printed to the console.


