var numbers = function(num) {
  var result = "";
  var singles = {"1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six",
                 "7": "seven", "8": "eight", "9": "nine", "0": ""};

  var teens = {"10": "ten", "11": "eleven", "12": "twelve", "13": "thirteen", "14": "fourteen", 
               "15": "fifteen", "16": "sixteen", "17": "seventeen", "18": "eighteen", 
               "19": "nineteen"};
  var tens =  {"1": "ten", "2": "twenty", "3": "thirty", "4": "forty", "5": "fifty",
               "6": "sixty", "7": "seventy", "8": "eighty", "9": "ninety", "0": ""};

    if (num.length === 3) {
      if(num[1] === "0" && num[2] === "0") {
        result += singles[num[0]] + "-hundred";
      } else if (num[1] === "0"){
          result += singles[num[0]] + "-hundred-" + singles[num[2]];
      } else if (num[2] === "0") {

          result += singles[num[0]] + "-hundred-" + tens[num[1]];
          }
      else if (num[1] === "1") {
        result += singles[num[0]] + "-hundred-" + teens[num.slice(1)];
      }
      else{
          result += singles[num[0]] + "-hundred-" + tens[num[1]] + "-" + singles[num[2]];
        }
    
    } else if (num.length === 2) {
    if(num.charAt(0) === "1") {
      result += teens[num]; 
    } 
    else if (num[1] === "0") { 
      result += tens[num[0]]; 
    } 
    else {
      result += tens[num[0]] + "-" + singles[num[1]];
    }
  } else {
    result += singles[num];
  }

  return result;
};


var bigNumbers = function(input) {
  var scrubbedInput = input.replace(/[^0-9]/g, '');
  if(scrubbedInput > 1000000000000) {
    return "We said up to one-trillion, go back to school";
  }
  var slicedNum = scrubbedInput;
  var numArray = [];
  for(var i = 0; i < scrubbedInput.length / 3; i++) {
    numArray.push(slicedNum.slice(-3))
    slicedNum = slicedNum.slice(0, -3);
  }

  var outputString = "";


    if (numArray.length > 0){
    outputString = numbers(numArray[0]) + outputString;
    }
    if (numArray.length > 1){
    outputString = numbers(numArray[1]) + "-thousand-" + outputString;
    }
    if (numArray.length > 2){
    outputString = numbers(numArray[2]) + "-million-" + outputString;
    }
    if (numArray.length > 3){
    outputString = numbers(numArray[3]) + "-billion-" + outputString;
    }
    if (numArray.length > 4){
      outputString = numbers(numArray[4]) + "-trillion-" + outputString;
    }


  return outputString;

}


$(document).ready(function() {
  $('form').submit(function(event) {
    var input = $("#input").val();

    $("#numberWord").text(bigNumbers(input));

    event.preventDefault();
  });

});












