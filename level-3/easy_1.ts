//https://leetcode.com/problems/binary-search/
// Topic:Sorting & Searching, Easy - Binary Search.
// Time Complexity: 
// Best:
// Average:
// Worst:
// Space Complexity:

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarysearch(target: number, array: number[]): number | undefined{
    let left: number = 0;
    let right: number = array.length - 1;

    while (left <= right) {
        let mid: number = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return undefined;        
}
console.log(binarysearch(6, arr));

// Output:
// 5
// Explanation:
// The target value 6 is located at index 5 in the sorted array.
// Hence, the function returns 5.
// If the target value were not present in the array, the function would return undefined.
// Finally, the result is printed to the console.
    
