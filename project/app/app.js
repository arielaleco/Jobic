var app = angular.module("JobicApp" , ["ngRoute"]); 

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'app/landingPage/landingPage.html',
      controller: 'landingPageCtrl'
    })
    .when('/register', {
      templateUrl: 'app/register/register.html',
      controller: 'registerCtrl'
    })
    .when('/moviessection', {
        templateUrl: 'app/movies/moviessection.html',
        controller: 'movieCtrl'
      })
    .when('/moviessection/:movieId', {
        templateUrl: 'app/movies/movieFullDetails.html',
        controller: 'movieFullDetailsCtrl'
      })
    .otherwise({
      redirectTo: '/'
    })
  })
