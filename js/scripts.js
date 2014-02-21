var letterScore = function(letter) {
  var pts = {};
  pts.a = pts.e = pts.i = pts.o = pts.u = pts.l = pts.n = pts.r = pts.s = pts.t = 1;
  pts.d = pts.g = 2;
  pts.b = pts.c = pts.m = pts.p = 3;
  pts.f = pts.h = pts.v = pts.w = pts.y = 4;
  pts.k = 5; 
  pts.j = pts.x = 8;
  pts.q = pts.z = 10;

 return pts[letter];

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
