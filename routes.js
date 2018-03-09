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
    
    .when('/forecasting/:days', {
        templateUrl: 'pages/forecasting.htm',
        controller: 'forecastingController'
    })
})