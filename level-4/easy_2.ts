//https://leetcode.com/problems/reverse-string/
// Topic:Two Pointers, Easy - Reverse String. 
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

let reversestring = ['s', 'u', 'r', 'y', 'a', 'n', 's', 'h'];

function reversestrings(arr: string[]): string[] | void{
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}
reversestrings(reversestring);
console.log(reversestring);

// Output:
// ['h', 's', 'n', 'a', 'y', 'r', 'u', 's']
// Explanation:
// We maintain two pointers, left and right.
// The left pointer starts at the beginning of the array, and the right pointer starts at the end.
// We swap the elements at these pointers and then move the left pointer to the right and the right pointer to the left.
// This process continues untill the left pointer is no longer less than the right pointer.
