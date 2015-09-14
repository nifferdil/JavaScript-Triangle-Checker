describe('triangleTracker', function() {
  it("is true for a triangle where the sum of two sides equals the third", function() {
    expect(triangleTracker(4, 4, 8)).to.equal(true);
  });

  it("is true for a triangle where all three sides are of equal length", function() {
    expect(isEquilateral(4, 4, 4)).to.equal(true);
  });

  it("is true for a triangle where two sides are of equal length", function() {
    expect(isIsosceles(4, 4, 2)).to.equal(true);
  });

  it("is true for a triangle where all three sides are not of equal length", function() {
    expect(isScalene(4, 3, 2)).to.equal(true);
  });
});
