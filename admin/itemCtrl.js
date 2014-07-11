 angular.module('itemApp', [])
    .controller('itemCtrl', ['$scope', function($scope) {
      $scope.master = {};

      $scope.update = function(item) {
        $scope.master = angular.copy(item);
      };

      $scope.reset = function() {
        $scope.item = angular.copy($scope.master);
      };

      $scope.reset();
    }]);