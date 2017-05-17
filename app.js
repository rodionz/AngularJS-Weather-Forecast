

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

weatherApp.controller('forecastController', ['$scope','cityService', function ($scope,cityService)
 { 

    $scope.city = cityService.city; 
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


});

