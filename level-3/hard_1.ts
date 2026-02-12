//https://leetcode.com/problems/divide-two-integers/
// Topic:Sorting & Searching, Hard - Divide Two Integers.
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

const DivideTwoIntegers = (dividend: number, divisor: number): number => {
    if (dividend === 0) {
        return 0;
    }
    return Math.floor(dividend/divisor);
}
console.log(DivideTwoIntegers(10, 3));
console.log(DivideTwoIntegers(7, -3));
console.log(DivideTwoIntegers(0, 1));
console.log(DivideTwoIntegers(1, 1));

// Output:
// 1. 3
// 2. -3
// 3. 0
// 4. 1
// Explanation:
// 10 divided by 3 equals 3.33333.. which is truncated to 3.
// 7 divided by -3 equals -2.33333.. which is truncated to -3.
// 0 divided by 1 equals 0.
// 1 divided by 1 equals 1.
