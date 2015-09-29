describe("Plane", function() {
  var plane;

  beforeEach(function() {
   plane = new Plane();
  });

  it("should be flying when created", function() {
   expect(plane.isFlying).toBe(true);
  });

  it("plane can land", function() {
   plane.land();
   expect(plane.isFlying).toBe(false);
  });

  it("plane can take off", function() {
   plane.takeOff();
   expect(plane.isFlying).toBe(true);
  });
});
