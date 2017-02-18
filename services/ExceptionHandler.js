MyApp.factory('$exceptionHandler', function() {
    return function(exception) {
        console.log("Message exception: " + exception.message);
    };
});
