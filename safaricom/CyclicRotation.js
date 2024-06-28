function solution(A, K) {
  // Implement your solution here
  // first confirm the range of A and K is correct
  if (K >= 0 && K <= 100 && A.length > 0) {
    let counter = 0;
    // step 2 create a deep copy of the array A

    while (counter < K) {
      const ACopy = [...A];

      for (let x = 0; x < A.length; x++) {
        if (x === 0) {
          A[0] = ACopy[A.length - 1];
        } else {
          A[x] = ACopy[x - 1];
        }
      }
      counter++;
    }

    return A;
    // then start a loop that rotates and shifts each item one position to the right
  }
  return A;
}

solution([3, 8, 9, 7, 6], 2);
