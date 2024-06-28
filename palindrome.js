var palidromeWord = "redivider";
var reversedPalidrome = [];
var checkIfPalindrom = function (word) {
    word = word.toLowerCase();
    var wordArray = word.split("");
    for (var x = wordArray.length; x >= 0; x--) {
        reversedPalidrome.push(word[x]);
    }
    var final = reversedPalidrome.join("");
    var isEqual = final === palidromeWord;
    console.log({ isEqual: isEqual });
    return isEqual;
};
checkIfPalindrom(palidromeWord);
//# sourceMappingURL=palindrome.js.map