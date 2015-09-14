describe('triangleTracker', function() {
  it("is true for a triangle where the sum of two sides equals the third", function() {
    expect(triangleTracker(4, 4, 8)).to.equal(true);
  });
  //
  // it("is true for most years divisible by 4", function() {
  //   expect(leapYear(2012)).to.equal(true);
  // });
  //
  // it("is false for most years divisible by 100", function() {
  //   expect(leapYear(1900)).to.equal(false);
  // });
  //
  // it("is false for most years divisible by 400", function() {
  //   expect(leapYear(1600)).to.equal(true);
  // });

});
