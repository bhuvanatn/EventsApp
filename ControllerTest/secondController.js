MyApp.controller('secCont', function($scope){
  $scope.count = 0;
  $scope.secFunc = function(){
    $scope.count++;
    // alert("My New Count" + $scope.count);
  };
});
