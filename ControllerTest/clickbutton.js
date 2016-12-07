MyApp.controller('MyCont',function($scope){
    $scope.firstName = "John";
     $scope.lastName = "Doe";
    $scope.myFunc = function(){
      console.log("i am in controller");
     alert("hello");
    };
});
