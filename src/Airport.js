function Airport() {
  this.planes = [];
  this.defaultCapacity = 3;
}

  Airport.prototype.landPlane = function(plane) {
    if (this.planes.length >= 3) {
      throw Error("Airport is full");
    } else {
    this.planes.push(plane);
    };
  };

  Airport.prototype.releasePlane = function(plane) {
    if (this.planes.length == 0) {
      throw Error("Airport is empty");
    };
    this.planes.pop(plane);
  };
