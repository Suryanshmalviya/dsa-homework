//https://leetcode.com/problems/reverse-words-in-a-string-iii/
// Topic:Strings (Easy Focus), Easy - Reverse Words in a String III.
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

let str: string = "Hello i am Suryansh Malviya";
let reversewords = (s: string): string => {        // Function to reverse the order of words in a string.
    return s.split(" ").reverse().join(" ");
}
let result: string = reversewords(str);

console.log(result);

// Output: 
// "Malviya Suryansh am i Hello".
// Explanation:
// The words in the input string are reversed.
// The order of characters within each word remains the same.
// The reversed words are joined back together with spaces to from the final output string.