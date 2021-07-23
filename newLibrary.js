const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three" },
    t02:
              { id: "t02",
                name: "Model View Controller",
                artist: "James Dempsey",
                album: "WWDC 2003"},
    t03:
              { id: "t03",
                name: "Four Thirty-Three",
                artist: "John Cage",
                album: "Woodstock 1952"}
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: function() {
    for (let play in this.playlists) {
      console.log(`${this.playlists[play].id}: ${this.playlists[play].name} - ${this.playlists[play].tracks.length} tracks`);
    }
  },
   
  
  
  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function() {
    for (let track in this.tracks) {
      console.log(`${this.tracks[track].id}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`);
    }
  },
   
  
  
  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function(playlistId) {
    console.log(`${playlistId}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks`);
    for (let track of this.playlists[playlistId].tracks) {
      console.log(`${track}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`);
    }
  },
  
  
  // adds an existing track to an existing playlist
  addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },
  
  
  // generates a unique id
  // (already implemented: use this for addTrack and addPlaylist)
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  
  
  // adds a track to the library
  addTrack: function(name, artist, album) {
    let trackID = 't' + this.generateUid();
    this.tracks[trackID] = {
      'id': trackID,
      'name': name,
      'artist': artist,
      'album': album
    };
  },
  
  
  // adds a playlist to the library
  addPlaylist: function(name) {
    let playlistID = 'p' + this.generateUid();
    this.playlists[playlistID] = {
      'id' : playlistID,
      'name' : name,
      'tracks' : []
    };
  }
  
};


library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t01','p02');
library.addTrack("nice","Ary","Comeback Season");
library.addPlaylist("Wow");
console.log(library);
