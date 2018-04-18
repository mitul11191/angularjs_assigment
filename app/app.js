var app = angular.module("angDemo", ["ngRoute"]);

app.controller('mainCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

}]);

app.directive("matchPassword", function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=matchPassword"
        },
        link: function (scope, element, attributes, ngModel) {

            console.log("match pass", element);
            ngModel.$validators.matchPassword = function (modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function () {
                ngModel.$validate();
            });
        }
    };
});