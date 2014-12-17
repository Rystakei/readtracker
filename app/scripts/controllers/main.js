'use strict';

/**
 * @ngdoc function
 * @name readtrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the readtrackerApp
 */
angular.module('readtrackerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.b1 = {
      title: "HTML5 in Action", 
      tags: ["html5", "apis"], 
      readPages: 100, 
      totalPages: 400
    };

    $scope.b2 = {
      title: "D3.js in Action", 
      tags: ["dataviz", "javascript"],
      readPages: 300, 
      totalPages: 400
    };

    $scope.b3 = {
      title: "Introducing Elixir",
      tags: ["elixir", "functional"],
      readPages: 100, 
      totalPages: 250
    };

    $scope.currentlyReading = [$scope.b1, $scope.b2, $scope.b3]; 

    $scope.items = $scope.currentlyReading; 

    $scope.progressRate = function(readPages, totalPages) {
      return (readPages / totalPages) * 100; 
    }

    $scope.dailyRate = 30; 
    $scope.startDate = "12/1/2014";

    $scope.finishDate = function() {
      return new Date(); 
    }

    $scope.website = ["http://sxywu.github.io/80k/#default/2PIC", "Annual salary and cost of living for a Station Agent depending on Bart and Union proposals"];

    $scope.p1 = "Shadow DOM";

    $scope.addToQueue = function() {
      $('.queue-body').append($("<tr><td>Title Here</td><td>Random, Tags</td></tr>"));
    }

  });
