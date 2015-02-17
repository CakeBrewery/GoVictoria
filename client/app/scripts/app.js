'use strict';

/**
 * @ngdoc overview
 * @name ts300appApp
 * @description
 * # ts300appApp
 *
 * Main module of the application.
 */
angular
  .module('ts300App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'dialogs.main',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/events', {
        templateUrl:'views/events.html', 
        controller: 'EventsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

