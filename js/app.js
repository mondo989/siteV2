var app = angular.module('armandosApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouteProvider){
  $urlRouteProvider.otherwise("/index");

  $stateProvider
    .state('index', {
      url: "/index",
      templateUrl: "templates/index.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "templates/about.html"
    })
    .state('portfolio', {
      url: "/portfolio",
      templateUrl: "templates/portfolio.html"
    })
})
