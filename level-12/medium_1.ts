//https://leetcode.com/problems/combination-sum/
// Topic:Backtracking, Medium - Combination Sum. 
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

function CombinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    candidates.sort((a, b) => a - b);
    function Backtracking(remaining: number, combination: number[], start: number) {
        if (remaining === 0) {
            result.push([...combination]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remaining) break;
            combination.push(candidates[i]);
            Backtracking(remaining - candidates[i], combination, i);
            combination.pop();
        }
    }
    Backtracking(target, [], 0);
    return result;
}
export { CombinationSum };
console.log(CombinationSum([2, 3, 6, 5], 8));

// Output:
// [ [ 2, 2, 2, 2 ], [ 2, 3, 3 ], [ 2, 6 ], [ 3, 5 ] ]
// Explanation:
// The function finds all unique combinations of numbers from the candidates array that sum up to the target value of 8.
// It uses backtracking to explore different combinations, allowing the same number to be used multiple times.
// The final output is an array of arrays, each representing a valid combination that adds up to the target.
// The time complexity is O(2^t), where t is the target value, as each number can either be included or excluded.
// The space complexity is O(t) for the recursion stack and the combination storage.