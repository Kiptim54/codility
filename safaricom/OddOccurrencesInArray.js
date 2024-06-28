function spliceArr(arr, number, index) {
  arr.splice(index, 1);
  const newPosition = arr.indexOf(number);
  arr.splice(newPosition, 1);

  return arr;
}

function solution(A) {
  const itExists = A.indexOf(A[0], 1);

  if (itExists !== -1) {
    const newArr = spliceArr(A, A[0], 0);

    return solution(newArr);
  }

  return A[0];
}
solution([9, 3, 9, 3, 9, 7, 9]);

// a better more performative solution from chatgpt
// function solution(A) {
//     const counter = {};

//     // Count the occurrences of each element in the array
//     for (let i = 0; i < A.length; i++) {
//       const num = A[i];
//       counter[num] = (counter[num] || 0) + 1;
//     }

//     // Find the element with an odd number of occurrences
//     for (const num in counter) {
//       if (counter[num] % 2 === 1) {
//         return parseInt(num);
//       }
//     }

//     // Return 0 or throw an error if no unpaired element is found
//     return 0;
//   }
