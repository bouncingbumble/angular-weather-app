//CONTROLLERS
app.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    })
    
}]);

app.controller('forecastingController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){
    
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '5';
    $scope.weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast/?appid=340f3559bb20bb3f0ec04fe4ac89b969", {
        callback: "JSON_CALLBACK" }, { get: {method: "JSONP" }});
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days });
    
    console.log($scope.weatherResult);
    
    $scope.convertToFahrenheit = function(degK){
        return Math.round((1.8 * (degK-273)) + 32);
    }
    
    $scope.convertToDate = function(days){
        return new Date(days * 1000);
    }
    
}]);