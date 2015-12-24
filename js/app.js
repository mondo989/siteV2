var app = angular.module('armandosApp', ['ui.bootstrap','ui.router']);
//
app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider
    .otherwise("/index");
  $stateProvider
    .state("index", {
      url: "/index",
      templateUrl: "templates/index.html"
    })
    .state("about", {
      url: "/about",
      templateUrl: "templates/about.html"
    })
    .state("portfolio", {
      url: "/portfolio",
      templateUrl: "templates/portfolio.html"
    })
    .state("contact", {
      url: "/contact",
      templateUrl: "templates/contact.html"
    })
})
