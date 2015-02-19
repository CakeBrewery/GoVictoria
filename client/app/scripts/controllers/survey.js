'use strict';

angular.module('ts300App')
  .controller('SurveyCtrl', function ($scope) {

  	$scope.currentQuestion; 

  	$scope.switchQuestion = function(n){
  		$scope.currentQuestion = n; 
  	};


  });