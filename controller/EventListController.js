MyApp.controller("EventListController", function($scope, eventData) {
    $scope.events = eventData.getAllEvents();
});
