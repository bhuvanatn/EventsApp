MyApp.controller("EditEventController", function($scope, eventData) {
    $scope.title = "Add New Event";
    $scope.saveEvent = function(event, newEventForm) {
              if(newEventForm.$valid) {
            window.alert("saved clicked");
            // eventData.save(event)
            //     .$promise
            //     .then(function(response) {
            //         // alert("you clicked saved");
            //         console.log('Success..', response);
            //     })
            //     .catch(function(response) {
            //         console.log('Failure..', response);
            //     });
        }
    };
    $scope.cancelEdit = function() {
        window.location = "/EventDetails.html";
    };
});
