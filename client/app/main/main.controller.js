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


    // How to make decisions

    $scope.majority = function(){
      $('.majority').css('text-decoration', 'none');
      $('.vote').css('text-decoration', 'line-through', 'green');
      $('.ultimate').css('text-decoration', 'line-through');
      $('.uni').css('text-decoration', 'line-through');
    }
    $scope.vote = function(){
      $('.majority').css('text-decoration', 'line-through');
      $('.vote').css('text-decoration', 'none');
      $('.ultimate').css('text-decoration', 'line-through');
      $('.uni').css('text-decoration', 'line-through');
    }
    $scope.ultimate = function(){
      $('.majority').css('text-decoration', 'line-through');
      $('.vote').css('text-decoration', 'line-through');
      $('.ultimate').css('text-decoration', 'none');
      $('.uni').css('text-decoration', 'line-through');
    }
    $scope.uni = function(){
      $('.majority').css('text-decoration', 'line-through');
      $('.vote').css('text-decoration', 'line-through');
      $('.ultimate').css('text-decoration', 'line-through');
      $('.uni').css('text-decoration', 'none');
    }
    $scope.one = function(){
      $('.one').css('text-decoration', 'none');
      $('.two').css('text-decoration', 'line-through');
      $('.three').css('text-decoration', 'line-through');
    }
    $scope.two = function(){
      $('.one').css('text-decoration', 'line-through');
      $('.two').css('text-decoration', 'none');
      $('.three').css('text-decoration', 'line-through');
    }
    $scope.three = function(){
      $('.one').css('text-decoration', 'line-through');
      $('.two').css('text-decoration', 'line-through');
      $('.three').css('text-decoration', 'none');
    }




  });
