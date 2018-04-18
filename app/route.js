app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/modules/home/templates/home.html",
            controller: "homeCtrl",
            pagename: "Home"
        })
        .when("/products", {
            templateUrl: "app/modules/products/templates/product.html",
            controller: "productCtrl",
            pagename: "Products"
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);