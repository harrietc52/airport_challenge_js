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

  Airport.prototype.releasePlane = function(plane) {
    if (this.planes.length == 0) {
      throw new Error("Airport is empty");
    }
    this.planes.pop(plane);
  }
