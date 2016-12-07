MyApp.controller("EditEventController", function($scope, eventData){
$scope.title ="Add New Event";
$scope.saveEvent = function(event){
  eventData.save(event)
            .$promise
            .then(function(response){console.log('Success..', response);})
            .catch(function(response){console.log('Failure..', response);});
};
$scope.cancelEdit = function(){
  window.location = "/EventDetails.html";
};
});
