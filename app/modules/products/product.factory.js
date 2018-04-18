app.factory('productfactory', ['$q', '$http',
    function ($q, $http) {
        var userInfo = function (params) {
            var deferred = $q.defer();

            // $http.get('products.json')
            //     .then(function (res) {
            //         console.log("Produsts", res)
            //     })

            $http.get('products.json').success(function (data) {
                deferred.resolve(data);
            }).error(function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        };
        return {
            userInfo: userInfo,
        };
    }]);