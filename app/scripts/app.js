'use strict';

angular.module('myApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
]).config(function ($stateProvider, $urlRouterProvider) {
    var main = {
        name: 'main',
        url: "/",
        templateUrl: "views/main.html",
        controller:'MainCtrl'
    };
    $urlRouterProvider.otherwise("/");
    $stateProvider.state(main);
});
