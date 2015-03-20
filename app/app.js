angular.module('MyApp', [
  'ngMessages',
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'mgcrea.ngStrap',
  'auth',
  'kids',
  'profile',
  'angular-cron-jobs',
  'slidingPuzzle',
  'wordSearchPuzzle',
  'posts',
  'reminders'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/views/home.html'
      })
      .when('/404', {
        template: '<h1>Sorry, page not found</h1>'
      })
      .otherwise({ redirectTo: '/404' });


  });
