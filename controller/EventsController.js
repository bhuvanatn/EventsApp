MyApp.controller('EventsController', function EventsController($scope, eventData, $log, $anchorScroll) {
    $scope.event = eventData.event;
    console.log("I am first console", event);
    
    eventData.getEvent()
        .$promise
        .then(function(event) {
            $scope.event = event;
            console.log("I am second console", event);
        })
        .catch(function(response) {
            console.log(response);
        });
    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    };
    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };
    $scope.scrollToSession = function() {
        $anchorScroll();
    };
});
