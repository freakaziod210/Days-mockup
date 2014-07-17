
angular.module('itemService', ['ngResource'])

.factory('itemsApi', function($resource) {
    return $resource('http://localhost:3000/items', {}, {
        get: {method: 'GET'},
        post: {method:'POST'}
    })
})