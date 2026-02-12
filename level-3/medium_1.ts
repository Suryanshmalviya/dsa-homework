//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// Topic:Sorting & Searching, Medium - Search in Rotated Sorted Array.
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

let nums = [4,5,6,7,0,1,2];
let target = 0;

function SearchInRotatedSortedArray(nums: number[], targrt: number): number {
    let left = 0;
    let right = nums.length -1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums [mid]) right = mid -1;
            else left = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid -1;
        }
    }
    return -1;
}
console.log(SearchInRotatedSortedArray(nums, target));

//Outputs:
// 4
// Explanation:
// The target 0 is located at index 4 in the rotated sorted array.
// Hence, the output is an shown above.