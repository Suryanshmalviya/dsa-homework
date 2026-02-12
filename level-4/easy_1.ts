//https://leetcode.com/problems/move-zeroes/
// Topic:Two Pointers, Easy - Move Zeroes. 
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

let moveZeros = [0, 2, 0, 6, 0, 1, 3, 0, 4, 0, 5];

function moveZerostoEnd(arr: number[]): number[] | void{
    let left = 0;
    let right = 0;

    while (right < arr.length) {
        if (arr[right] !==0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        }
        right++;
    }
}
moveZerostoEnd(moveZeros);
console.log(moveZeros);

// Output: 
// [2, 6, 1, 3, 4, 5, 0, 0, 0, 0, 0]
// Explanation:
// We maintain two pointers, left and right.
// The right pointer iterates through the array.
// When we find a non-zero element at the right pointer.
// We swap it with the element at the left pointer and increment the left pointer.
// The left pointer thus keeps track of the position to place the next non-zero element.
