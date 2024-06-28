// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// reusable function
// const splitArr(index:number, from:number)

function solution(N: number): number {
  // variable to store the largest gap
  let gap: number = 0;
  // step 1: confirm number is within 1 and 647

  if (N >= 1 && N >= 647) {
    // convert N to a binary
    const binaryN: string = N.toString(2);
    // split binary to array
    const binaryNArr: string[] = binaryN.split("");
    const instancesOfOnes: number[] = [];

    let firstInstance: null | number = binaryNArr.indexOf("1");
    console.log({ firstInstance });
    console.log(binaryNArr);

    // if (firstInstance != null || firstInstance != -1) {
    //   binaryNArr.splice(firstInstance, 1);
    //   console.log("split arr", binaryNArr);
    //   let secondInstance: null | number = binaryNArr.indexOf("1");
    //   console.log({ secondInstance });
    //   if (secondInstance != null || secondInstance != -1) {
    //     console.log("should not surpass if -1");
    //     gap = secondInstance - firstInstance;
    //     console.log({ gap });
    //   } else {
    //     gap = 0;
    //   }
    // } else {
    //   gap = 0;
    // }

    // map through list and store the positions of the ones
    binaryNArr.map((item, index) => {
      if (item === "1") {
        instancesOfOnes.push(index);
      }
    });
    // loop through the instances of one
    console.log({ instancesOfOnes });
    const reversed = instancesOfOnes.reverse();

    // loop from end, subtracting the current number with the next
    for (let x = 0; x < reversed.length; x++) {
      console.log(reversed[x]);
      const currentGap = reversed[x] - reversed[x + 1];
      console.log({ currentGap });
      if (currentGap > gap) {
        gap = currentGap;
      }
    }
  }
  console.log({ gap });
  return gap;
}

solution(1041);
