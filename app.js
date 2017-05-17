

var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource' ]);

weatherApp.value('ngRoute', 'ngRoute');

weatherApp.value('ngResource', 'ngResource');




weatherApp.service('cityService', function(){

this.city = 'New York, NY';



});

weatherApp.controller('homeController', ['$scope', 'cityService',function ($scope,cityService) { 

$scope.city = cityService.city;

$scope.$watch('city',function(){
    cityService.city = $scope.city;
});

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams,cityService)
 { 

    $scope.city = cityService.city; 

    $scope.days = $routeParams.days || '2';

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/");


    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days, units : "metric", appid: "2d794d499eac9db4bee944fe95e97a0a" }, function () {

        console.log($scope.weatherResult);
    });


    $scope.converttoDate = function (dt) {
        return new Date(dt * 1000);
    }

 }]);



weatherApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {

            templateUrl: 'pages/home.html',
            controller: 'homeController'
          })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'

        })
        .when('/forecast/:days', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'

        })

});

