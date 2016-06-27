hrApp.controller('EmployeeController', ['$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams, $location) {
        $scope.back = function() {
            $location.url('/main');
        },
        $scope.reset = function() {
            $scope.firstName = undefined;
            $scope.lastName = undefined;
            $scope.cnp = undefined;
            $scope.age = undefined;
        }
    }]);