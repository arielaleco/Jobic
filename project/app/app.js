var app = angular.module("JobicApp" , ["ngRoute"]); 

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'app/landingPage/landingPage.html',
      controller: 'landingPageCtrl'
    })
    .when('/signUp', {
      templateUrl: 'app/signUp/signUp.html',
      controller: 'signUpCtrl'
    })
    .when('/profile', {
        templateUrl: 'app/profile/profile.html',
        controller: 'profileCtrl'
      })
    .when('/moviessection/:movieId', {
        templateUrl: 'app/movies/movieFullDetails.html',
        controller: 'movieFullDetailsCtrl'
      })
    .otherwise({
      redirectTo: '/'
    })
  })
