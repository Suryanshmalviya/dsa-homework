//https://leetcode.com/problems/generate-parentheses/
// Topic:Recursion, Medium - Generate Parentheses.
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

function GenerateParentheses(n: number): string[] {
    const result: string[] = [];

    function backtrack(current: string, open: number, close: number) {
        if (current.length === n * 2) {
            result.push(current);
            return;
        }
        if (open < n) {
            backtrack(current + '(', open + 1, close);
        }
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    }
    backtrack('', 0, 0);
    return result;
}
console.log(GenerateParentheses(1));
console.log(GenerateParentheses(2));
console.log(GenerateParentheses(3));
console.log(GenerateParentheses(4));

// Output:
// [ '()' ]
// [ '(())', '()()' ]
// [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
// [
//   '(((())))', '((()()))',
//   '((())())', '((()))()',
//   '(()(()))', '(()()())',
//   '(()())()', '(())(())',
//   '(())()()', '()((()))',
//   '()(()())', '()(())()',
//   '()()(())', '()()()()'
// ]
// Explanation:
// The function GenerateParentheses generates all combinations of well-formed parentheses for a given number n.
// using a backtracking approach. It builds the combinations by adding '(' and ')' while ensuring the parentheses remain valid.
// The time complexity is O(4^n / sqrt(n)), as the number of valid combinations grows exponentially with n.
// The space complexity is O(n) due to the recursion stack and the space needed to store the result.