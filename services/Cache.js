MyApp.factory('myCache', function($cacheFactory) {
    return $cacheFactory('mycache', {
        capacity:3
    });
});
