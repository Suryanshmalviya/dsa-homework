//https://leetcode.com/problems/two-sum/
// Topic:Arrays, Medium - Two Sum. 
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

let twosum = function(nums: number[], target: number): number[] | undefined {
    const numMap: {[key: number]: number}= {};
    for (let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if (complement in numMap){
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
    return undefined;
}
console.log(twosum([2,7,11,15], 9));

// output:
// [0, 1]
// Explanation:
//The function find two numbers in the array that add up to the target (9). In this case, nums[0] + nums[1] = 2 + 7 = 9.
// Therefore, it returns their indices [0, 1].





 