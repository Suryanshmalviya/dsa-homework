//https://leetcode.com/problems/container-with-most-water/
// Topic:Two Pointers, Easy - Container With Most Water. 
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

const maxArea = (height: number[]): number => {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const currentHeight = Math.min(height[left], height[right]);
        const currentWidth = right - left;
        const currentArea = currentHeight * currentWidth;
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}
console.log(maxArea([8,8,8,8,8,8,8,8,8,8]));

// Output:
// 72
// Explanation:
// The vertical lines are represented by the array [8,8,8,8,8,8,8,8,8,8].
// The maximum area of water that can be contained is 72. 
// which is formed between the lines at index 0 and index 9 (both with height 8) with a width of 9.
//  Area = height * width = 8 * 9 = 72.

