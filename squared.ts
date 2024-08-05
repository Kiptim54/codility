// Create a function that should take one argument n, which is a positive integer. The function should return the sum of all squared positive integers between 1 and n, inclusive.

/*
1. create a function called squared that takes  args n with type number
2.  create variable called sum with type number and assign it to 0
3. start a for loop that starts from 1 and ends at n
inside the loop, take the current number square it and add it to the sum
4. return the sum
*/

function squares(n: number) {
  let sum = 0;

  for (let x = 0; x <= n; x++) {
    const squared = x * x;
    sum += squared;
  }
  console.log({ sum });
  return sum;
}

squares(5);
squares(10);
squares(25);
squares(100);
