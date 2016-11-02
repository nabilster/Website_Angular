var myApp = angular.module('NabilsWebsite',['ui.router']);

angular.module('NabilsWebsite')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'template-home.html',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates-about.html'
      })
      
      .state('contact', {
        url: '/contact',
        templateUrl: 'templates-contacts.html'
      })
    
      .state('projects', {
        url: '/projects',
        templateUrl: 'templates-projects.html'
      })
    
      .state('skills', {
        url: '/skills',
        templateUrl: 'templates-skills.html',
        controller: 'skillsStateCtrl'
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
  
   .controller('skillsStateCtrl', function($scope) {
    $scope.skills = [
        {'name': 'HTML', 'duration': 2},
        {'name': 'jQuery', 'duration': 3},
        {'name': 'WordPress', 'duration': 4},
        {'name': 'Java', 'duration': 4}
    ];
  })