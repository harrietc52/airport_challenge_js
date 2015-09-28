function Airport() {
  this.planes = [];
  this.defaultCapacity = 20;
}

  Airport.prototype.landPlane = function(plane) {
    if (this.planes.length > 20) {
      throw new Error("Airport is full");
    }
    this.planes.push(plane);
  };
