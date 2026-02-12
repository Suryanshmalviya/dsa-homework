//https://leetcode.com/problems/first-missing-positive/
// Topic:Arrays, Hard - First Missing Positive. 
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

let firstmissingpositive = function (nums: number[]): number | undefined{
    const n = nums.length;
    const numSet = new Set<number>(nums);

    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }
    return n + 1;
}

console.log(firstmissingpositive([1, 2, 0, 3]));
console.log(firstmissingpositive([3, 4, -1, 1]));

// Output: 
// 1. 4
// 2. 2
// Explanation:
// The function firstmissingpositive takes an array of integers as input and returns the samllest missing positive integer.
// It uses a set to store the numbers in the array for 0(1) average time complexity lookups.
// It then iterates from 1 to n (Length of the array) and checks if each integer is presnt in the set.
// The first integer that is not found in the set is returned as the smallest missing positive integer.
// If all integers from 1 to n are present, it returns n + 1 as the smallest mising positive integer.

