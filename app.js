var MyApp = angular.module("MyApp", ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {

        $routeProvider.when('/newEvent', {
            templateUrl: 'template/NewEvent.html',
            controller: 'EditEventController'
        });
        $routeProvider.when('/eventList', {
            templateUrl: 'template/EventList.html',
            controller: 'EventListController'
        });

        $routeProvider.when('/eventsDetails', {
            templateUrl: 'template/EventsDetails.html',
            controller: 'EventsController'
        });
    });
