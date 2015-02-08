'use strict';
angular.module('ts300App')
  .directive('eventCard', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/eventcard.html'
    };
  });