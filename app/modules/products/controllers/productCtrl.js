app.controller('productCtrl', ['$rootScope', '$scope', '$http', 'productfactory', '$location', function ($rootScope, $scope, $http, homefactory, $location) {

	$scope.productsList = {};
	$scope.selectedLang = 'english';

	homefactory.userInfo().then(function (data) {
		$scope.productsList = data;
	}, function (err) {
		console.log('error', err);
	});

}]);


function testInterceptor() {
	return {
		request: function (config) {
			return config;
		},

		requestError: function (config) {
			return config;
		},

		response: function (res) {
			return res;
		},

		responseError: function (res) {
			return res;
		}
	}
}


app.factory('testInterceptor', testInterceptor)
	.config(function ($httpProvider) {
		$httpProvider.interceptors.push('testInterceptor');
	})
	.run(function ($http) {
		$http.get('http://test-routes.herokuapp.com/test/hello')
			.then(function (res) {
				console.log(res.data.message)
			})
	})

