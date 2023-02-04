

function selectionSort(arr) {

  // Copy the original array
  let unsorted = arr.slice();

  // Create an array to store the sorted values
  let sorted = [];
  let minIndex;
  let min;

  // While the array is not empty...
  while (unsorted.length !== 0) {
    // Do not move this console.log
    console.log(sorted.join(","));

    minIndex = 0;
    // Find the index of the minimum value in the unsorted half
    for (let i = 0; i < unsorted.length; i++) {
      if (unsorted[i] < unsorted[minIndex]) {
        minIndex = i;
      }
    }

    // Save and remove the value at the min index
    min = unsorted.splice(minIndex, 1);
    // Add the min value to the end of the sorted array
    sorted.push(min[0]);
  }

  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;
  let minIndex;
  let min;

  // Repeat while the unsorted half is not empty:
  while (divider !== arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    minIndex = divider;
    // Find the index of the minimum value in the unsorted half
    for (let i = divider; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }

    // Save the min value
    min = arr[minIndex];

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minIndex - 1; i >= divider; i--) {
      arr[i + 1] = arr[i];
    }

    // Put the min value at the divider
    arr[divider] = min;

    // Increment the divider and repeat
    divider++;
  }

}


module.exports = [selectionSort, selectionSortInPlace];
