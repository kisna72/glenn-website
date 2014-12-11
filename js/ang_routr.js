// script.js

    // create the module and name it exoticApp
        // also include ngRoute for all our routing needs
    var exoticApp = angular.module('exoticApp', ['ngRoute', 'uiGmapgoogle-maps']);

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

        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });

    exoticApp.controller('DropdownCtrl', function ($scope, $log) {
      $scope.items = [
        'The first choice!',
        'And another choice for you.',
        'but wait! A third!'
      ];

      $scope.status = {
        isopen: false
      };

      $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
        console.log('Yeah')
      };

      $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
      };
    });


// angular.module('project', ['ngRoute'])
 
// // .value('fbURL', 'https://angularjs-projects.firebaseio.com/')
 
// // .factory('Projects', function($firebase, fbURL) {
// //   return $firebase(new Firebase(fbURL)).$asArray();
// // })
 
// .config(function($routeProvider) {
//   $routeProvider
//     .when('/', {
//       controller:'ListCtrl',
//       templateUrl:'list.html'
//     })
//     .when('/edit/:projectId', {
//       controller:'EditCtrl',
//       templateUrl:'detail.html'
//     })
//     .when('/new', {
//       controller:'CreateCtrl',
//       templateUrl:'detail.html'
//     })
//     .otherwise({
//       redirectTo:'/'
//     });
// })
 
// .controller('ListCtrl', function($scope, Projects) {
//   $scope.projects = Projects;
// })
 
// .controller('CreateCtrl', function($scope, $location, Projects) {
//   $scope.save = function() {
//       Projects.$add($scope.project).then(function(data) {
//           $location.path('/');
//       });
//   };
// })
 
// .controller('EditCtrl',
//   function($scope, $location, $routeParams, Projects) {
//     var projectId = $routeParams.projectId,
//         projectIndex;
 
//     $scope.projects = Projects;
//     projectIndex = $scope.projects.$indexFor(projectId);
//     $scope.project = $scope.projects[projectIndex];
 
//     $scope.destroy = function() {
//         $scope.projects.$remove($scope.project).then(function(data) {
//             $location.path('/');
//         });
//     };
 
//     $scope.save = function() {
//         $scope.projects.$save($scope.project).then(function(data) {
//            $location.path('/');
//         });
//     };
// });