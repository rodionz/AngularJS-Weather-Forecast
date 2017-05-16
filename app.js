

var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource' ]);

weatherApp.value('ngRoute', 'ngRoute');

weatherApp.value('ngResource', 'ngResource');


weatherApp.controller('homeController', ['$scope', function ($scope) { }]);

weatherApp.controller('forecastController', ['$scope', function ($scope) { }]);



weatherApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {

            templateUrl: 'pages/home.html',
            controller: 'homeController'
          })
        .when('/forecast', {
            templateUrl: 'forecast.html',
            controller: 'forecastController'

        })


});

