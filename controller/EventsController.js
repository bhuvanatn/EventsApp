MyApp.controller('EventsController', function EventsController($scope, eventData, $log){
  $scope.event = eventData.event;
  console.log(event);
  eventData.getEvent()
      .$promise
      .then(function(event) { $scope.event = event; console.log(event);})
      .catch(function(response){ console.log(response); });


  $scope.downVoteSession = function(session){
    session.upVoteCount--;
  };
  $scope.upVoteSession = function(session) {
    session.upVoteCount++;
  };
});
