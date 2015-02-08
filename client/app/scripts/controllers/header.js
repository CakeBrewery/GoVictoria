'use strict';

angular.module('ts300App')
  .controller('HeaderCtrl', function ($scope, $location) {

    $scope.isActive = function (viewLocation) 
    {
    	return viewLocation === $location.path();
    };

  });
