//https://leetcode.com/problems/permutations/
// Topic:Backtracking, Easy - Permutations.
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

function Permutations(nums: number[]): number[][] {
    const result: number[][] = [];

    function Backtracking(start: number) {
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]];
            Backtracking(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
    Backtracking(0);
    return result;
}
export { Permutations };
console.log(Permutations([1, 2, 3]));

// Output:
// [
//   [ 1, 2, 3 ],
//   [ 1, 3, 2 ],
//   [ 2, 1, 3 ],
//   [ 2, 3, 1 ],
//   [ 3, 2, 1 ],
//   [ 3, 1, 2 ] 
// ]
// Explanation: 
// The function generates all possible permutations of the input array [1, 2, 3] using backtracking.
// It swaps elements to create different arrangements and stores each valid permutation in the result array.
// The final output is an array of arrays, each representing a unique permutation of the input numbers.
// The permutations are generated in lexicographical order based on the input array.
// The time complexity is O(n!), where n is the number of elements in the input array, as there are n! permutations.
// The space complexity is O(n) for the recursion stack and the result storage.
