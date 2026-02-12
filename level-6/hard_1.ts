//https://leetcode.com/problems/distinct-subsequences/
// Topic:Strings (Easy Focus), Easy - Distinct Subsequences.
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

function distinctSubsequences(s: string, t: string): number {
    const m = s.length;
    const n = t.length;
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[m][n];
}
console.log(distinctSubsequences("rabbit", "rabbit"));
console.log(distinctSubsequences("rabbit", "dog"));
console.log(distinctSubsequences("rabbit", "rabit")); 
console.log(distinctSubsequences("babgbag", "bag"));

// Output:
// 1
// 0
// 2
// 5
// Explanation:
// The function distinctSubsequences calculates the number of distinct subsequences of string s that equal string t using dynamic programming.
// It initializes a 2D array dp where dp[i][j] represents the number of distinct subsequences of the first i characters of s that equal the first j characters of t.
// The function iterates through each character of s and t, updating the dp array based on whether the characters match or not.
// Finally, it returns the value in dp[m][n], which contains the total number of distinct subsequences of s that equal t.