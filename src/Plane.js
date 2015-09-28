function Plane() {
  this.isFlying = true;
}
Plane.prototype.land = function(airport) {
  this.isFlying = false;
};

var plane = new Plane;
console.log(plane.land("JFK"));



// plane.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// plane.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// plane.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
