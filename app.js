//MODULE
var app = angular.module('app',["ngRoute", "ngResource"]);

//ROUTES
app.config(function($routeProvider){
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    
    .when('/forecasting', {
        templateUrl: 'pages/forecasting.htm',
        controller: 'forecastingController'
    })
})

//CONTROLLERS
app.controller('homeController', ['$scope', function($scope){
    $scope.page = 'home page';
}]);

app.controller('forecastingController', ['$scope', function($scope){
    $scope.page = 'forcast page';
}]);