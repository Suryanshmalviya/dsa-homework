//https://leetcode.com/problems/group-anagrams/
// Topic:Strings (Easy Focus), Medium - Group Anagrams.
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

function groupAnagrams(str: string[]): string[][] {
    const map: { [key: string]: string[] } = {};

    for (const s of str) {
        const key = s.split('').sort().join('');
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(s);
    }
    return Object.values(map);
}
console.log(groupAnagrams(["eat", "tea", "ate", "tan", "nat", "bat", "tab", "tale"]));


// Output:
// [
//   [ 'eat', 'tea', 'ate' ],
//   [ 'tan', 'nat' ],       
//   [ 'bat', 'tab' ],       
//   [ 'tale' ]
// ]
// Explanation:
// The function groups the input stings into arrays of anagrams.
// For example, "eat", "tea", and "ate" are anagrams of each other and are grouped together.
// Finally, it prints the result to the console.