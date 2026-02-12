//https://leetcode.com/problems/guess-number-higher-or-lower/
// Topic:Sorting & Searching, Easy - Guess Number Higher or Lower.
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

let guess = (num: number): number => {
    const pick = 6;
    if (num === pick) return 0;
    return num < pick ? -1 : 1;
}
function guessNumber(n: number): number  | null{
    let left = 1;
    let right = n;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const res = guess(mid);
        if (res === 0) return mid;
        else if (res < 0) left = mid + 1;
        else right = mid - 1;
    } 
    return null;   
}
console.log(guessNumber(21));
console.log(guessNumber(7));

