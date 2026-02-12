//https://leetcode.com/problems/fibonacci-number/
// Topic:Recursion, Easy - Fibonacci Number.
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

let fib = function(n: number): number {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
console.log(fib(10));

// Output:
// 55.
// Explanation: 
// The 10th Fibonacci number is 55.
// The Fibonacci sequence is defined as follows:
// F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2) for n > 1.
// Therefore, the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
// Thus, F(10) = 55.
// Hence, the output is 55.