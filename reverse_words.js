function reverse_words(str){
  // "this is the string" ==> "siht si eht gnirts"

  var wordsArr = string.split(' ');
  var reversedWordsArr = [];

  wordsArr.forEach(word => {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    };
    reversedWordsArr.push(reversedWord);
  });

  return reversedWordsArr.join(' ');
}

reverseWords('Coding JavaScript');
}
