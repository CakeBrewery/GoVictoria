'use strict';

angular.module('ts300App')
  .controller('EventsCtrl', function ($scope, $location, $routeParams) {
  	$scope.currentId = $routeParams.id;

    $scope.events = [
	    {
	    	id: 1,
	    	name: "Free Food", 
	    	description: "There is going to be free food in this event",
	    	location: "1010 nice street",
	    	img_url: "images/events/img1.jpg"
	    }, 
	   	{
	   		id: 2,
	    	name: "Beacon Hill Petting Zoo",
	    	description: "Come to beacon hill and interact with fluffy animals!",
	    	location: "Beacon Hill Park, Circle Drive, Victoria, BC V8V",
	    	img_url: "images/events/img5.jpg"
	    },
	    {
	    	id: 3,
	    	name: "Awesome Mt. Tolmie Hike", 
	    	description: "It's a group hike at Mt. Tolmie! Feel free to come", 
	    	location: "Mount Tolmie, Victoria, BC V8P 4R6",
	    	img_url: "images/events/img2.jpg"
	    },
	    {
	    	id: 4,
	    	name: "Beach Volleyball Party at Willows", 
	    	description: "Come to Willows beach and play volleyball with us! ", 
	    	location: "Willows Beach, Victoria, BC",
	    	img_url: "images/events/img3.jpg"
	    },
	    {
	    	id: 5,
	    	name: "Hot Dogs for Free @ UVic",
	    	description: "We are giving out free hot dogs at UVic, come and get yours!",
	    	location: "Outside the SUB at UVic, Victoria BC",
	    	img_url: "images/events/img4.jpg"
	    }
    ];

    $scope.prototypeEvents = [
	    {
	    	id: 2,
	    	name: "Beacon Hill Petting Zoo",
	    	description: "Come to beacon hill and interact with fluffy animals!",
	    	location: "Beacon Hill Park, Circle Drive, Victoria, BC V8V",
	    	img_url: "images/events/img5.jpg"
	    },
	    {
	    	id: 3,
	    	name: "Awesome Mt. Tolmie Hike", 
	    	description: "It's a group hike a Mt. Tolmie! Feel free to come", 
	    	location: "Mount Tolmie, Victoria, BC V8P 4R6",
	    	img_url: "images/events/img2.jpg"
	    }
	];


    $scope.go = function(url){
    	$location.path(url);
    };

    $scope.getEventId = function(url){
    	console.log($routeParams.id);
    	$scope.currentId = $routeParams.id;
    }
    /*
    $scope.eventModal = function(evnt) {
    	$dlg = $dialogs.notify(evnt.name, evnt.description);
    }*/
  })


.config(function(dialogsProvider){
    // this provider is only available in the 4.0.0+ versions of angular-dialog-service
    dialogsProvider.useBackdrop(true);
    dialogsProvider.useEscClose(true);
    dialogsProvider.setSize('md');
});
