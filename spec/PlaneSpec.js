describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should be flying when created", function() {
    expect(plane.isFlying).toBe(true);
  });

  it("should not be flying when landed", function(){
    plane.land();
    expect(plane.isFlying).toBe(false);
  });

  // it("should be able to play a Song", function() {
  //   plane.play(song);
  //   expect(plane.currentlyPlayingSong).toEqual(song);
  //
  //   //demonstrates use of custom matcher
  //   expect(plane).toBePlaying(song);
  // });
  //
  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     plane.play(song);
  //     plane.pause();
  //   });
  //
  //   it("should indicate that the song is currently paused", function() {
  //     expect(plane.isPlaying).toBeFalsy();
  //
  //     // demonstrates use of 'not' with a custom matcher
  //     expect(plane).not.toBePlaying(song);
  //   });
  //
  //   it("should be possible to resume", function() {
  //     plane.resume();
  //     expect(plane.isPlaying).toBeTruthy();
  //     expect(plane.currentlyPlayingSong).toEqual(song);
  //   });
  // });
  //
  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');
  //
  //   plane.play(song);
  //   plane.makeFavorite();
  //
  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });
  //
  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     plane.play(song);
  //
  //     expect(function() {
  //       plane.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
});
