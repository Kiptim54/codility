// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/* psuedo code
step one: convert decimal to binary
description --> to get the binary from a decimal, take the number divide it by 2, if there is a reminder return 1 if there is no reminder return 0. Then take the quotient and repeat the process until the quoteient  === 0

step 2: count the largest binary gap
*/

function solution(N) {
  //first declare needed  variables
  let rem, quotient;
  const binaryArr = [];
  let count = 0;
  let one = 0;
  let currentCount = 0;

  // run division until N is zero
  while (N !== 0) {
    rem = N % 2;
    if (rem === 1) {
      binaryArr.push(1);
      one++;
      if (currentCount > 0 && currentCount > count && one == 2) {
        count = currentCount;
        currentCount = 0;
        one--;
      }
    } else {
      binaryArr.push(0);
      currentCount++;
    }
    quotient = parseInt(N / 2);
    N = quotient;
  }
  console.log({ count });
  return count;
}
solution(1041);
