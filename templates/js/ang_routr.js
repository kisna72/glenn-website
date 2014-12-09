// script.js

    // create the module and name it exoticApp
        // also include ngRoute for all our routing needs
    var exoticApp = angular.module('exoticApp', ['ngRoute']);

    // configure our routes
    exoticApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
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