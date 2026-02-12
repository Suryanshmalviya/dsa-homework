//https://leetcode.com/problems/subsets/ 
// Topic:Backtracking, Easy - Subsets. 
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

function Subsets(nums: number[]): number[][] {
    const result: number[][] = [];

    function Backtracking(start: number, path: number[]) {
        result.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            Backtracking(i + 1, path);
            path.pop();
        }
    }
    Backtracking(0, []);
    return result;
}
console.log(Subsets([1, 2, 3]));

// Output:
// [
//   [],       [ 1 ],
//   [ 1, 2 ], [ 1, 2, 3 ],
//   [ 1, 3 ], [ 2 ],
//   [ 2, 3 ], [ 3 ]
// ]
// Explanation:
// The subsets of the array [1, 2, 3] are listed above, including the empty set and the set itself.
// Each subset is generated through backtracking by exploring all possible combinations of the input numbers.
// The order of subsets in the output may vary.