//Iteration 1: [9,3,10,2,15] => [3,9,10,2,15] => [3,9,10,2,15] => [3,9,2,10,15] => [3,9,2,10,15]
//Iteration 2: [3,9,2,10,15] => [3,9,2,10,15] => [3,2,9,10,15] => [3,2,9,10,15] => [3,2,9,10,15]
//Iteration 3: [3,2,9,10,15] => [2,3,9,10,15] => [2,3,9,10,15] => [2,3,9,10,15] => [2,3,9,10,15]

const bubbleSort = (arr) => {
  //shorthand for the length of the array
  let n = arr.length;

  //iterate n times over the array
  for (let i = 0; i < n; i++) {
    //track whether any swaps were performed in this iteration
    let swapped = false;

    //visit each pair of elements in the array
    for (let j = 0; j < n - i - 1; j++) {
      //if they are out of order, swap them
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swapped = true;
      }
    }

    //if there were no swaps, the array is already in sorted
    if (!swapped) {
      break;
    }
  }

  return;
};

const arrayOne = [10, 5, 9, 6, 1];
bubbleSort(arrayOne);
console.log(`arrayOne: ${arrayOne}`);

const arrayTwo = [25, 12, 29, 3, 45, 18, 21, 44, 8, 1, 55];
bubbleSort(arrayTwo);
console.log(`arrayTwo: ${arrayTwo}`);

const arrayThree = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
bubbleSort(arrayThree);
console.log(`arrayThree: ${arrayThree}`);

// const bubbleSorts = (arr) => {
//   let length = arr.length;

//   for (let i = 0; i < length; i++) {
//     let swap = false;

//     for (let j = 0; j < length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swap = true;
//       }
//     }

//     if (!swap) {
//       break;
//     }

//     console.log(`iteration ${i + 1}:`, arr);
//     return arr;
//   }
// };

// console.log(bubbleSorts([10, 12, 15, 9, 1, 3, 2]), "sorted");
