var app = angular.module('Nabilswebsite',['ui.router', 'ngAnimate']);

angular.module('Nabilswebsite')
  
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      
      .state('home', {
        url: '/home',
        templateUrl: 'urls/home.html',
      })
    
      .state('about', {
        url: '/about',
        templateUrl: 'urls/about.html'
      })
      
      .state('contact', {
        url: '/contact',
        templateUrl: 'urls/contact.html'
      })
    
      .state('projects', {
        url: '/projects',
        templateUrl: 'urls/projects.html'
      })
    
      .state('skills', {
        url: '/skills',
        templateUrl: 'urls/skills.html',
        controller: 'skillsStateCtrl'
      })
     
    $urlRouterProvider.otherwise('/home');
  }])

  
   .controller('skillsStateCtrl', function($scope) {
    
    $scope.range = [1, 2, 3, 4, 5];
    
    $scope.skills = [
        {'skill': 'HTML', 'rating': 5},
        {'skill': 'CSS', 'rating': 5},
        {'skill': 'JavaScript', 'rating': 4},
        {'skill': 'Java', 'rating': 4},
        {'skill': 'C++', 'rating': 3},
        {'skill': 'Python', 'rating': 4},
        {'skill': 'SQL', 'rating': 3},
        {'skill': 'Swift', 'rating': 4},
        {'skill': 'NASM', 'rating': 3},
        {'skill': 'Shell Scripting', 'rating': 5},
    ];
  })