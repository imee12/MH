angular.module('MyApp', [
  'ngMessages',
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'mgcrea.ngStrap',
  'auth',
 'kids',
  'profile',
  'images',
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
      .when('/info', {
        templateUrl: 'home/views/info.html',
        controller: 'imageController as imgCtl',

      })
      .when('/kids', {
        templateUrl: 'kids/views/puzz.html'
        //controller: 'imageController as imgCtl',
      })
      .when('/friends', {
        templateUrl: 'home/views/gang.html'
        //controller: 'imageController as imgCtl',
      })

      .when('/404', {
        template: '<h1>Sorry, page not found</h1>'
      })
      .otherwise({ redirectTo: '/404' });


  });
