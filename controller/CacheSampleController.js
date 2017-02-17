MyApp.controller('CacheSampleController', function($scope, myCache){
    console.log(myCache);
  $scope.addToCache = function(key, value){
    myCache.put(key, value);
  };
  $scope.readFromCache = function(key){
    return myCache.get(key);
  };
  $scope.getCacheStatus = function(){
    return myCache.info();
  };
});
