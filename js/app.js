var data;
var artistData;
var baseUrl = 'https://api.spotify.com/v1/search?type=track&query=';
var baseArtist = 'https://api.spotify.com/v1/search?type=track&query='

var myApp = angular.module('myApp', [])
var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}

  //Searches songs by the name of the track
  $scope.getTracks = function() {
    $http.get(baseUrl + $scope.track).success(function(response){
      data = $scope.tracks = response.tracks.items
    })
  }

  // $scope.getArtist = function() {
  //   console.log("hi")
  //   $http.get(baseArtist + $scope.artist).success(function(response){
  //     console.log("ho")
  //     artistData = $scope.artists = response.artists.items
  //     console.log(artistData)
  //   }) 
  // }

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
