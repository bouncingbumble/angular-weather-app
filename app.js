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

//SERVICES

app.service('cityService', function(){
    
    this.city = "New York, NY";
    
})

//CONTROLLERS
app.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    })
    
}]);

app.controller('forecastingController', ['$scope', 'cityService', function($scope, cityService){
    
    $scope.city = cityService.city;
    
}]);