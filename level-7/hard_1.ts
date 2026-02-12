//https://leetcode.com/problems/expression-add-operators/
// Topic:Recursion, Hard - Expression Add Operators.
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

let num: string;
let target: number;
function addOperators(n: string, t: number): string[] {
    num = n;
    target = t;
    const result: string[] = [];
    backtrack(result, "", 0, 0, 0);
    return result;
}
function backtrack(result: string[], path: string, pos: number, evaluated: number, multed: number): void{
    if (pos === num.length) {
        if(evaluated === target) {
            result.push(path);
        }
        return;
    }
    for(let i = pos; i < num.length; i++) {
        if (i !== pos && num.charAt(pos) === '0') break;
        const cur = parseInt(num.substring(pos, i + 1));
        if (pos === 0) {
            backtrack(result, path + cur, i + 1, cur, cur);
        } else{
            backtrack(result, path + "+" + cur, i + 1, evaluated + cur, cur);
            backtrack(result, path + "-" + cur, i + 1, evaluated - cur, -cur);
            backtrack(result, path + "*" + cur, i + 1, evaluated - multed + multed * cur, multed * cur);
        }

    }

}
console.log(addOperators("123", 6));
console.log(addOperators("232", 8));

// Output:
// [ '1+2+3', '1*2*3' ]
// [ '2+3*2', '2*3+2' ]
// Explanation:
// 
