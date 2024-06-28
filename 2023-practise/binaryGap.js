// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');
// // reusable function
// // const splitArr(index:number, from:number)
// function solution(N) {
//     // variable to store the largest gap
//     var gap = 0;
//     // step 1: confirm number is within 1 and 647
//     if (N >= 1 && N >= 647) {
//         // convert N to a binary
//         var binaryN = N.toString(2);
//         // split binary to array
//         var binaryNArr = binaryN.split("");
//         var instancesOfOnes_1 = [];
//         var firstInstance = binaryNArr.indexOf("1");
//         console.log({ firstInstance: firstInstance });
//         console.log(binaryNArr);
//         // if (firstInstance != null || firstInstance != -1) {
//         //   binaryNArr.splice(firstInstance, 1);
//         //   console.log("split arr", binaryNArr);
//         //   let secondInstance: null | number = binaryNArr.indexOf("1");
//         //   console.log({ secondInstance });
//         //   if (secondInstance != null || secondInstance != -1) {
//         //     console.log("should not surpass if -1");
//         //     gap = secondInstance - firstInstance;
//         //     console.log({ gap });
//         //   } else {
//         //     gap = 0;
//         //   }
//         // } else {
//         //   gap = 0;
//         // }
//         // map through list and store the positions of the ones
//         binaryNArr.map(function (item, index) {
//             if (item === "1") {
//                 instancesOfOnes_1.push(index);
//             }
//         });
//         // loop through the instances of one
//         console.log({ instancesOfOnes: instancesOfOnes_1 });
//         var reversed = instancesOfOnes_1.reverse();
//         // loop from end, subtracting the current number with the next
//         for (var x = 0; x < reversed.length; x++) {
//             console.log(reversed[x]);
//             var currentGap = reversed[x] - reversed[x + 1];
//             console.log({ currentGap: currentGap });
//             if (currentGap > gap) {
//                 gap = currentGap;
//             }
//         }
//     }
//     console.log({ gap: gap });
//     return gap;
// }

function solution(N) {
  // step 1 -> check if N is within the given range
  if (N >= 1 && N <= 2147483647) {
    let gap = 0;
    // step 2 -> convert N to a binary
    const binaryNum = N.toString(2);
    const binaryArr = binaryNum.split("");
    const positionsOfOne = [];

    // step 3 find the positions of all the ones in the array
    for (let x = 0; x < binaryArr.length; x++) {
      if (binaryNum[x] == 1) {
        positionsOfOne.push(x);
      }
    }

    // find the greatest range
    positionsOfOne.map((x, index) => {
      let next = positionsOfOne[index + 1] - 1;
      if (next) {
        let newGap = next - x;
        if (newGap > gap) {
          gap = newGap;
        }
      }
    });
    return gap;
  }
}
solution(32);
