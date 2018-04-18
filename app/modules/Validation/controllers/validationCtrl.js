app.controller('validationCtrl', ['$rootScope', '$scope', '$http', 'homefactory', '$location', function ($rootScope, $scope, $http, homefactory, $location) {

	console.log("validation Controller");

	homefactory.userInfo().then(function (data) {
		console.log('Success');
	}, function (err) {
		console.log('error', err);
	})

}]);

