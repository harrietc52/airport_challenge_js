describe("Airport", function() {

 var airport;
 var plane;

 beforeEach(function() {
   airport = new Airport();
   plane = jasmine.createSpy();
 });

 it("airport can land plane", function() {
   airport.landPlane(plane);
   expect(airport.planes.length).toEqual(1);
 });

 it("airport can release plane", function() {
   airport.landPlane(plane);
   airport.landPlane(plane);
   airport.releasePlane(plane);
   expect(airport.planes.length).not.toEqual(0);
 });

 it("airport can not land plane when full", function() {
   airport.landPlane(plane);
   airport.landPlane(plane);
   airport.landPlane(plane);
   expect(function() { airport.landPlane(plane);
  }).toThrowError("Airport is full");
 });

 it("airport can not release plane when empty", function() {
   expect(function() { airport.releasePlane(plane);
  }).toThrowError("Airport is empty");
 });

});
