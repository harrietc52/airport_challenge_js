function Plane() {
 this.isFlying = true;
};

Plane.prototype.land = function() {
 this.isFlying = false;
};

Plane.prototype.takeOff = function() {
 this.isFlying = true;
};


// Plane.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
//
// Plane.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Plane.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Plane.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
