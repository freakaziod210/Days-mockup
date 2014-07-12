 angular.module('itemApp', [])
    .controller('itemCtrl', ['$scope', function($scope) {
       $scope.store = {items:[]};
       
       $scope.save = function(item) {
          $scope.newItem = angular.copy($scope.item);
          $scope.store.items.push($scope.newItem);
          console.log($scope.store);
       };

       
    }]);