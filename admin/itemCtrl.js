 angular.module('itemApp', ['itemService'])
    .controller('itemCtrl', ['$scope', 'itemsApi', function($scope, itemsApi) {
       $scope.store = {items:[]};

       itemsApi.get();

       $scope.save = function(item) {
          $scope.newItem = angular.copy($scope.item);
          $scope.store.items.push($scope.newItem);
          console.log($scope.store);

           itemsApi.post(item);
       };

       
    }]);