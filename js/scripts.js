var letterScore = function(letter) {
  var onePoint = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
  var twoPoint = ["d", "g"];
  var threePoint = ["b", "c", "m", "p"];
  var fourPoint = ["f", "h", "v", "w", "y"];
  var fivePoint = ["k"];
  var eightPoint = ["j", "x"];
  var tenPoint = ["q", "z"];

  for (var i = 0; i < 10; i++) {
    if (letter === onePoint[i]) 
      return 1;
    if (letter === twoPoint[i])
      return 2;
    if (letter === threePoint[i])
      return 3;
    if (letter === fourPoint[i])
      return 4;
    if (letter === fivePoint[i])
      return 5;
    if (letter === eightPoint[i])
      return 8;
    if (letter === tenPoint[i]) {
      return 10;
    }
  }
};

var totalScore = function(word) {
  var lowerCased = word.toLowerCase();
  var splitWord = lowerCased.split("");
  var totalScore = 0
  for (var i = 0; i < splitWord.length; i++) {
    totalScore += letterScore(splitWord[i]);

  };
  return totalScore;

};

$(document).ready(function() {
  var userInput = prompt("Enter a word and recieve a scrabble score");

  $('#word').text(totalScore(userInput));

});
