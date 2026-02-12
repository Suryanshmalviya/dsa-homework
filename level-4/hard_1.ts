//https://leetcode.com/problems/4sum/
// Topic:Two Pointers, Easy - 4Sum. 
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

const fourSum = (nums: number[], target: number): number[][] => {
    nums.sort((a, b) => a - b);
    const results:number[][] = [];

    for (let i = 0; i < nums.length -3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;  // skip duplicates for i
        for (let j = i + 1; j < nums.length -2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;  // skip duplicates for j
            let left = j + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    results.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) left++;  // skip duplicates for left
                    while (left < right && nums[right] === nums[right + 1]) right--;  // skip duplicates for right
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return results;
}
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

// output:
// [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ].
// Explanation:
// The unique quadruplets that sum up to the target 0 are:
// 1. [ -2, -1, 1, 2 ]
// 2. [ -2, 0, 0, 2 ] 
// 3. [ -1, 0, 0, 1 ] 
// Thus, the output is an array containing these quadruplets.