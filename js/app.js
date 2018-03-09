// app.js
var routerApp = angular.module('ideal2018', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('main', {
            url: '/main',
            templateUrl: 'pages/main.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('content', {
            url: '/content',
            templateUrl: 'pages/content.html'       
        })

        .state('about', {
            url: '/about',
            templateUrl: 'pages/about.html'       
        })

        .state('organization', {
            url: '/organization',
            templateUrl: 'pages/organization.html'       
        })

        .state('previousEvents', {
            url: '/previousEvents',
            templateUrl: 'pages/previousEvents.html'       
        });

    });

