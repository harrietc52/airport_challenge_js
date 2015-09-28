describe("Airport", function() {

 var airport;
 var plane;

 beforeEach(function() {
   airport = new Airport();
 });

 it("airport can land plane", function() {
   airport.landPlane(plane)
   expect(airport.planes.length).toEqual(1);
 });

});
