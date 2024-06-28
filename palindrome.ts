const palidromeWord: string = "redivider";
const reversedPalidrome: string[] = [];
const checkIfPalindrom = (word: string): Boolean => {
  word = word.toLowerCase();
  const wordArray = word.split("");
  for (let x: number = wordArray.length; x >= 0; x--) {
    reversedPalidrome.push(word[x]);
  }
  const final = reversedPalidrome.join("");
  const isEqual = final === palidromeWord;
  console.log({ isEqual });
  return isEqual;
};

checkIfPalindrom(palidromeWord);
