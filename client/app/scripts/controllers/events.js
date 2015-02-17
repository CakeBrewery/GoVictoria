'use strict';

angular.module('ts300App')
  .controller('EventsCtrl', function ($scope, dialogs) {
    $scope.events = [
	    {
	    	name: "Free Food", 
	    	description: "There is going to be free food in this event",
	    	location: "1010 nice street",
	    	img_url: "images/events/img1.jpg"
	    }, 

	    {
	    	name: "Awesome Mt. Tolmie Hike", 
	    	description: "It's a hike a Mt. Tolmie! Feel free to come", 
	    	location: "Mount Tolmie",
	    	img_url: "images/events/img2.jpg"
	    },
	    {
	    	name: "Beach Volleyball Party at Willows", 
	    	description: "Come to Willows beach and play volleyball with us! ", 
	    	location: "Willows Beach",
	    	img_url: "images/events/img3.jpg"
	    }
    ];

    $scope.eventModal = function(event){
    	var dlg = dialogs.notify(event.name, event.description);
    };
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
