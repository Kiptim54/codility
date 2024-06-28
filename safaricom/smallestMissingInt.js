// function solution(A) {
//   let missing = 1;

//   const newSet = new Set([...A]);

//   for (let x = 1; x <= 10000; x++) {
//     if (!newSet.has(x)) {
//       return (missing = x);
//     }
//   }

//   return missing;
// }

// function solution(A) {
//   const N = A.length;
//   const counter = new Array(N + 1).fill(false);
//   console.log({ counter });

//   for (let i = 0; i < N; i++) {
//     const value = A[i];
//     if (value > 0 && value <= N) {
//       counter[value] = true;
//     }
//   }

//   console.log({ counter });
//   for (let i = 1; i <= N; i++) {
//     if (!counter[i]) {
//       console.log({ i });
//       return i;
//     }
//   }
//   console.log(N + 1);

//   return N + 1;
// }

function solution(A) {
  const setA = new Set([...A]);

  for (let x = 1; x <= 100000; x++) {
    if (!setA.has(x)) {
      console.log({ x });
      return x;
    }
  }
  return 1;
}

solution([-1, -2]);
