(function () {
    "use strict";

    angular
        .module('kids', [
            "ngRoute"

        ])
        .config(function ($routeProvider) {
          // var checkAuth = function ($q, $location, $auth) {
          //   var dfd = $q.defer();
          //   if(!$auth.isAuthenticated()) {
          //     $location.path('/login');
          //   } else {
          //     dfd.resolve();
          //   }
          //   return dfd.promise;
          // };
            $routeProvider
                .when('/kids', {
                    templateUrl: 'kids/views/cword.html',
                    
                  //controller: 'kidsController as kidsCtl'
                })
                // .when('/kids/cword', {
                //     templateUrl: 'kids/views/cword.html',
                //     controller: 'kidsController as kidsCtl'
                // })


                // .when('/posts/new', {
                //     templateUrl: 'posts/views/create.html',
                //     controller: 'postsController as postsCtl',
                //     resolve: {
                //       authenticated: checkAuth
                //     }
                // })
                // .when('/posts/:postId', {
                //     templateUrl: 'posts/views/show.html',
                //     controller: 'postsController as postsCtl'
                // })
                // .when('/posts/:postId/edit', {
                //     templateUrl: 'posts/views/edit.html',
                //     controller: 'postsController as postsCtl',
                //     resolve: {
                //       authenticated: checkAuth
                //     }
              //  });
        });

})();
