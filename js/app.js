var data;
var baseArtist = 'https://api.spotify.com/v1/search?type=artist&query=';
var topTracks

var myApp = angular.module('myApp', [])
var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}

  $scope.getArtist = function() {
    console.log("hi");
    $http.get(baseArtist + $scope.artists).success(function(response){
      console.log("ho");
      data = $scope.artists = response.artists.items
      console.log(data);
    })

    // $http.get('http://api.spotify.com/v1/artists/' + id + '/top-tracks?country=US').success(function(response) {
    //   topTracks = $scope.tracks = response.tracks
    // })
  }

  //Plays a sample of the song found on Spotify
  $scope.play = function(song) {
    if($scope.currentSong == song) {
      $scope.audioObject.pause()
      $scope.currentSong = false
      return
    }
    else {
      if($scope.audioObject.pause != undefined) $scope.audioObject.pause()
      $scope.audioObject = new Audio(song);
      $scope.audioObject.play()  
      $scope.currentSong = song
    }
  }

})

// Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});
