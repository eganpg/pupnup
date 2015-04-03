'use strict';

angular.module('pupnupApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
      
    // });
    socket.syncUpdates('thing', $scope.awesomeThings);

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $scope.awesomeThings.push({ name: $scope.newThing });
      // $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      // $http.delete('/api/things/' + thing._id);
      $scope.awesomeThings.pop(thing);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
    

//Describes the dogs name


    $scope.awesomeDog = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
      
    // });
    socket.syncUpdates('dog', $scope.awesomeDog);

    $scope.addDog = function() {
      if($scope.newDog === '') {
        return;
      }
      $scope.awesomeDog.push({ name: $scope.newDog });
      // $http.post('/api/things', { name: $scope.newThing });
      $scope.newDog = '';
    };

    $scope.deleteDog = function(dog) {
      // $http.delete('/api/things/' + thing._id);
      $scope.awesomeDog.pop(dog);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('dog');
    });
  });
