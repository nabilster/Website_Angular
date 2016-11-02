var myApp = angular.module('NabilsWebsite',['ui.router']);

angular.module('NabilsWebsite')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      // Add your own states
      .state('home', {
        url: '/home',
        templateUrl: 'template-home.html',
      })
      $urlRouterProvider.otherwise('/home');
  }])

  .run(['$rootScope', '$state', function($rootScope, $state) {
      $rootScope.$on('$stateChangeStart', function(evt, to, params) {          
          if (to.redirectTo) {
            evt.preventDefault();
            $state.go(to.redirectTo, params, {location: 'replace'})
          }
      })
  }])
  