//https://www.codingninjas.com/studio/problems/largest-element-in-the-array-largest-element-in-the-array_5026279
// Topic:Arrays, Easy - Largest Element. 
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

let arr: number[] = [3, 5, 7, 2, 8, 1]
let largestElement = arr[0];

for (let i = 1; i < arr.length; i++){
    
    if (arr[i] > largestElement){
        largestElement = arr[i];
    }
}
console.log("The Largest Element in the array is :", largestElement);

//output:
//The Largest Element in the array is : 8

//explanation:
// We initialize the LargestElement variable with the first element of the array.
// Then we loop through the array starting from the second element.
// In each iteration, we compare the current element with the largestElement.
// If the current element is greater than LargestElement, we update LargestElement with the current element.
//Finally, we print the LargestElement after the loop ends.

