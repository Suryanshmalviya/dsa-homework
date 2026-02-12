//https://leetcode.com/problems/first-bad-version/
// Topic:Sorting & Searching, Easy - First Bad Version.
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

function isBadVersion(Version: number): boolean {
    const badVersion = 4;
    return Version >= badVersion;
}
function firstBadVersion(n: number): number | null {
    let left = 1;
    let right = n;
    while (left <= right){
        const mid = left + Math.floor((right - left) / 2);
        if (isBadVersion(mid)) right = mid - 1;
        else left = mid + 1;
    }
    return left <= n ? left : null;
}
console.log(firstBadVersion(5));
console.log(firstBadVersion(1));
console.log(firstBadVersion(6));

// Outputs:
// 1. 4
// 2. Null
// 3. 4
// Explanation:
// In the first case, the first bad version is 4.
// In the second case, there is no bad version since n = 1 and version 1 is good.
// in the third case, the first bad version is 4.
// Hence, the output is as shown above.

