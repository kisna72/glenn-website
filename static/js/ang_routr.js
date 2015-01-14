// script.js

    // create the module and name it exoticApp
        // also include ngRoute for all our routing needs
    var exoticApp = angular.module('exoticApp', ['ngRoute','ngAnimate', 'uiGmapgoogle-maps']);

    // configure our routes
    exoticApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
            .when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/services', {
                templateUrl : 'pages/services.html',
                controller  : 'contactController'
            })

            // route for the location page
            .when('/location', {
                templateUrl : 'pages/location.html',
                controller  : 'locationController'
            })
            //Glenn : When you make a new route, make sure it doesn't have the ; at the end.
            .when('/test_new', {
                templateUrl : 'pages/new_page.html',
                controller  : 'aboutController'
            });
    });

    // create the controller and inject Angular's $scope
    exoticApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    exoticApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    exoticApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    exoticApp.controller('locationController', function($scope) {
        $scope.message = 'Location to show up Here!!  Until then go to Glenn House';

        $scope.map = { center: { latitude: 29.907858, longitude: -90.030365 }, zoom: 14 };
        $scope.marker = {
            id:0,
            coords:{
                latitude: 29.907858,
                longitude: -90.030365
            },
            // options:{draggable:false},
        }
    });
