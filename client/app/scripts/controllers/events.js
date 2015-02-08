'use strict';

angular.module('ts300App')
  .controller('EventsCtrl', function ($scope) {
    $scope.events = [
	    {
	    	name: "Free food", 
	    	description: "There is going to be free food in this event",
	    	location: "1010 nice street"
	    }, 

	    {
	    	name: "awesome hike", 
	    	description: "It's a hike a Mt. Tolmie! Feel free to come", 
	    	location: "Mount Tolmie"
	    }
    ];
  });
