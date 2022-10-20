// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }
  // Divide the array in half
  let mid = Math.floor(arr.length / 2);
  // Recursively sort the left half
  let left = mergeSort(arr.slice(0, mid));
  // Recursively sort the right half
  let right = mergeSort(arr.slice(mid));
  // Merge the halves together and return
  return merge(left, right);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let arr = [];
  // Point to the first value of each array
  let i = 0;
  let j = 0;
  // While there are still values in each array...
  while (i < arrA.length || j < arrB.length) {
    if (i < arrA.length && j < arrB.length) {
      if (arrA[i] < arrB[j]) {
        arr.push(arrA[i]);
        i += 1;
      } else {
        arr.push(arrB[j]);
        j += 1;
      }
    } else if (i === arrA.length) {
      arr.push(arrB[j]);
      j += 1;
    } else {
      arr.push(arrA[i]);
      i += 1;
    }
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
  }
  // Return the return array
  return arr;
}

module.exports = [merge, mergeSort];
