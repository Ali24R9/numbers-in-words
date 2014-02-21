describe('letterScore', function() {

  it('if a is entered returns 1', function() {
    letterScore("a").should.equal(1);
  });

  it('should return 1 if input is a, e, i, o, u, l, n, r, s, or t', function() {
    letterScore("e").should.equal(1);
  });

  it('should return 2 if input is d or g', function() {
    letterScore("g").should.equal(2);
  });

  it('should return the proper score for a 1 letter word', function() {
    letterScore("z").should.equal(10);
  });


});

describe('totalScore', function() {

  it('should return the total score of multiple letters', function() {
    totalScore("to").should.equal(2);
  });

  it('should be case insensitive', function() {
    totalScore("Z").should.equal(10);
  });

});
