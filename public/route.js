var app = angular.module('myApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('main', {
    url: '/main',
    templateUrl: 'static/main.html',
    controller: 'ctrl'
  })
  .state('page1', {
    url: '/page1',
    templateUrl: 'static/theList.html'
  })
  .state('page2', {
  url: '/page2',
  templateUrl: 'static/page2.html'
  })
  .state('page3', {
  url: '/hello',
  templateUrl: 'static/page3.html'
  });

  $urlRouterProvider.otherwise('/main');
});
