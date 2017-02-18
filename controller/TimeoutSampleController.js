MyApp.controller('TimeoutSampleController', function($scope, $timeout) {
    var promise = $timeout(function() {
        $scope.name = "Hanuman Jayanthi";
        console.log("Timeout...", $timeout);
    }, 3000);

    $scope.cancel = function() {
        $timeout.cancel(promise);
    };

});
