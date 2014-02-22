describe('numbers', function() {
  it('should return the word one if the number 1 is entered', function() {
    numbers("1").should.equal("one");
  });
  
  it('should return the word of any number entered', function() {
    numbers("3").should.equal("three");
  });

  it('should return the correct word for a "teen" number', function() {
    numbers("17").should.equal("seventeen");
  });

  it('should return the correct word for a "ten" number', function() {
    numbers("30").should.equal("thirty");
  });

  it('should return the proper word for any two digit number', function() {
    numbers('57').should.equal("fifty-seven");
  });

  it('should return the proper word for any three digit number', function(){
    numbers('952').should.equal("nine-hundred-fifty-two");
  });

  it('should return the proper word for any three digit number', function(){
    numbers('100').should.equal("one-hundred");
  });

  it('should return ten properly', function(){
    numbers('10').should.equal("ten");
  });

  it('should return the proper word for a 3 digit number with 0 in the middle', function(){
    numbers('111').should.equal("one-hundred-eleven");
  });

  it('should return the proper word for a 3 digit number with 0 at the end', function(){
    numbers('110').should.equal("one-hundred-ten");
  });
});


describe('bigNumbers', function() {

  it('should return return the proper word value of a number in the thousands', function() {
    bigNumbers('654321').should.equal('six-hundred-fifty-four-thousand-three-hundred-twenty-one');
  });

  it('should return return the proper word value of a number in the millions', function() {
    bigNumbers('987654321').should.equal('nine-hundred-eighty-seven-million-six-hundred-fifty-four-thousand-three-hundred-twenty-one');
  });
  it('remove all extra characters before running', function() {
    bigNumbers('987,654,321').should.equal('nine-hundred-eighty-seven-million-six-hundred-fifty-four-thousand-three-hundred-twenty-one');
  });
  it('should return properly for a number whose length is not divisable by 3', function() {
    bigNumbers('7654321').should.equal('seven-million-six-hundred-fifty-four-thousand-three-hundred-twenty-one');
  });
});
