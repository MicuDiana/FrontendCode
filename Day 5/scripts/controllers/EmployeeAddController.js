hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup','EmployeeService',
    function($scope, $http, $location, CommonResourcesFactoryBackup, EmployeeService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        $http({url: CommonResourcesFactoryBackup.findAllEmployeesUrl , method: 'GET'})
            .success(function (data, status, headers, config) {

                $scope.managers = data;
            });
        $http({url: CommonResourcesFactoryBackup.findAllDepartmentsUrl , method: 'GET'})
            .success(function (data, status, headers, config) {
                console.log(data[0]);
                $scope.departments = data;
            });
        $http({url: CommonResourcesFactoryBackup.findAllJobsUrl , method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });


        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);