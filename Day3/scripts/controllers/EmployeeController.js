hrApp.controller('EmployeeController', ['$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams, $location) {
        $scope.back = function() {
            $location.url('/main');
        }
    }]);