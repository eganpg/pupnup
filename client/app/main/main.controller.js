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
      $scope.awesomeThings.push($scope.newThing );
      if($scope.awesomeThings.length > 2){
        $scope.awesomeThings = [];
        $('.twoPeople').show();
      }
      else{
        $('.twoPeople').hide();
      }
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
      $scope.awesomeDog.push($scope.newDog );
      // $http.post('/api/things', { name: $scope.newThing });
      $scope.newDog = '';
      if($scope.awesomeDog.length > 1){
        $scope.awesomeDog = [];
      }
    };

    $scope.deleteDog = function(dog) {
      // $http.delete('/api/things/' + thing._id);
      $scope.awesomeDog.pop(dog);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('dog');
    });
    
    $scope.percent1 = function(){
      console.log($('.percent1').val());
      $scope.percentOne = $('.percent1').val();
    };
    $scope.percent2 = function(){
      
      $scope.percentTwo = $('.percent2').val();
    };
    $scope.percentCheck = function(){
      var total = parseInt($scope.percentTwo) + parseInt($scope.percentOne);
      console.log(total);
      if(total !== 100) {
        alert('Ownership must equal 100%');
      }
    };

    $scope.decision = function(){
      var decision = [];  
      console.log(this.thing);
      $('.drop').html(this.thing);
      decision.push(this.thing);
      console.log(decision);
    };

    $scope.breakup = function(){
      var breakup = [];
      console.log(this.thing);
      $('.adjustBreakUpButton').html(this.thing);
      breakup.push(this.thing);
      console.log(breakup);
    };

    // How to make decisions

    $scope.majority = function(){
      $scope.decisionChoice = $('.majority').html();
      console.log($scope.decisionChoice);
      $('.majority').css('text-decoration', 'none');
      $('.vote').css('text-decoration', 'line-through', 'green');
      $('.ultimate').css('text-decoration', 'line-through');
      $('.uni').css('text-decoration', 'line-through');
    };
    $scope.vote = function(){
      $scope.decisionChoice = $('.vote').html();
      console.log($scope.decisionChoice);
      $('.majority').css('text-decoration', 'line-through');
      $('.vote').css('text-decoration', 'none');
      $('.ultimate').css('text-decoration', 'line-through');
      $('.uni').css('text-decoration', 'line-through');
    };
    $scope.ultimate = function(){
      $scope.decisionChoice = $('.drop').html();
      console.log($scope.decisionChoice);
      $('.majority').css('text-decoration', 'line-through');
      $('.vote').css('text-decoration', 'line-through');
      $('.ultimate').css('text-decoration', 'none');
      $('.uni').css('text-decoration', 'line-through');
    };
    $scope.uni = function(){
      $scope.decisionChoice = $('.uni').html();
      $('.majority').css('text-decoration', 'line-through');
      $('.vote').css('text-decoration', 'line-through');
      $('.ultimate').css('text-decoration', 'line-through');
      $('.uni').css('text-decoration', 'none');
    };
    $scope.one = function(){
      $scope.breakupChoice = $('.adjustBreakUpButton').html() + ' ' + $('.getsEverything').html() ;
      console.log($scope.breakupChoice);
      $('.one').css('text-decoration', 'none');
      $('.two').css('text-decoration', 'line-through');
      $('.three').css('text-decoration', 'line-through');
    };
    $scope.two = function(){
      $scope.breakupChoice = $('.two').html();
      $('.one').css('text-decoration', 'line-through');
      $('.two').css('text-decoration', 'none');
      $('.three').css('text-decoration', 'line-through');
    };
    $scope.three = function(){
      $scope.breakupChoice = $('.three').html();
      $('.one').css('text-decoration', 'line-through');
      $('.two').css('text-decoration', 'line-through');
      $('.three').css('text-decoration', 'none');
    };

    $scope.pdf = function(something){
      var partyone = $scope.awesomeThings[0];
      var partytwo = $scope.awesomeThings[1];
      var dog = $scope.awesomeDog[0];
      var one = $scope.percentOne;
      var two = $scope.percentTwo;

      var docDefinition = {
        content: [
          // if you don't need styles, you can use a simple string to define a paragraph 
          { text: 'PUP NUP AGREEMENT', style: 'header' },
          
          
          { text: 'PARTIES:', style: 'titler' },
          { text: '1. ' + partyone, style: 'subbody' },
          { text: '2. ' + partytwo + ' (together, the Family)', style: 'subbody' },
          { text: 'Background:', style: 'titler' },
          { text: 'We have agreed to work together to raise ' + dog + ' (our Pet), and this sets out the basis on which we will work together raising our pet.', style: 'body'},
          { text: 'TERMS OF THIS AGREEMENT:', style: 'titler'},
          { text: '1. Responsibility Share:', style: 'titler' },
          { text: '1.1 We agree that the responsibility for caring for our pet will be divided among the Family as follows:', style: 'body'},
          { text: 'a. ' + partyone + ': ' + $scope.percentOne + '%', style: 'subbody' },
          { text: 'b. ' + partytwo + ': ' + $scope.percentTwo + '%', style: 'subbody' },
          { text: '2. Decision Making: ', style: 'titler' },
          { text: '2.1. We agree that any decisions in relation to our pet will be made ' + $scope.decisionChoice + '.', style: 'subbody'},
          { text: '3. Termination ', style: 'titler' },
          { text: '3.1 If we cannot reach an agreement, or we decide we should not longer own ' + dog + ', we agree that' + $scope.breakupChoice, style: 'subbody' },
          { text: '4. Other ', style: 'titler' },
          { text: '4.1 No infringing or unauthorized changes: Each Family Member must make sure that any property that they purchase is owned by them or a related party that they own and control.', style: 'subbody' },


          { text: '4.2 No assignment: No Family Member is allowed to transfer their interest in the Project to someone else unless we all agree', style: 'subbody' },
          
          
          { text: 'DATED: ' + new Date(),  style: 'date' },
          { text: partyone, style: 'signature'},
          { text: '_______________________________________________________', style: 'signature'},
          { text: partytwo, style: 'signature'},
          { text: '_______________________________________________________', style: 'signature'},
        ],
        styles: {
          header: {
            fontSize: 22,
            bold: true,
            alignment: 'center',
            margin: 10
            
          },
          date: {
            margin: [5,20,0,0]
          },
          title: {
            fontSize: 18,
            bold: true,
            margin: 10
          },
          titler: {
            fontSize: 14,
            bold: true,
            margin: 10
          },
          body: {
            margin: [20,0,0,0]
          },
          subbody: {
            margin: [25,0,0,0]
          },
          signature: {
            margin: 10
          }
        }
      };
      
      pdfMake.createPdf(docDefinition).open();
      // pdfMake.createPdf(docDefinition).download();
    };



  });
