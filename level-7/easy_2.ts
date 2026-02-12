//https://leetcode.com/problems/power-of-two/
// Topic:Recursion, Easy - Power of Two.
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

function isPowerofTwo(n: number): boolean {
    if (n < 1) {
        return false;
    } else if (n === 1) {
        return true;
    } else {
        return isPowerofTwo(n / 2);
    } 

}
console.log(isPowerofTwo(16));
console.log(isPowerofTwo(7));
console.log(isPowerofTwo(15));
console.log(isPowerofTwo(1));
console.log(isPowerofTwo(0));

// Output:
// true
// false
// false
// true
// false
// Explanation:
// The function checks if a number is a power of two by recursively dividing the number by 2.
// If the number becomes 1, it is a power of two; if it becomes less than 1, it is not.
// Finally, it returns true or false based on the checks.