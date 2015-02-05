(function () {
    var app = angular.module('userModule', []);

    app.controller('userController', ['$scope', function ($scope) {
            $scope.user = {};
            $scope.showForm = false;
            this.showForm = function () {
                $scope.showForm = true;
            };
            this.save = function () {
                //alert("Guardado: " + $scope.user.firstName + " " + $scope.user.lastName + " " + $scope.user.Date);
                document.getElementById('resultado').innerHTML = 'Guardado: '+ $scope.user.firstName + " " + $scope.user.lastName + " Nacimiento: " + $scope.user.Date;
            };
        }]);

    app.directive('userForm', [function () {
            return {
                restrict: 'E',
                templateUrl: 'src/modules/user/userTemplates.html'
            };
        }]);
})();

