MyApp.factory('eventData', function($resource) {
    var resource = $resource('/data/event/:id', {
        id: '@id'
    }, {
        "getAll": {
            method: "GET",
            isArray: true,
            params: {
                something: "foo"
            }
        }
    });
    return {
        getEvent: function() {
            return resource.get({
                id: 999
            });
        },
        save: function(event) {
            event.id = 999;
            console.log(event);
            return resource.save(event);
        },
        getAllEvents: function(){
            return resource.query();
        }
    };
});
