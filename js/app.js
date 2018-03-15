// app.js
var app = angular.module('ideal2018', ['ui.router', 'ngSanitize']);

//Constants
app.constant('CONSTANTS', {
    CAROUSEL_TITLE: "The 19th International Conference on Intelligent Data Engineering and Automated Learning </br> IDEAL 2018",
    DATE_PLACE: "21-23 November, Madrid, Spain"
});

//Assign constants to root scope
app.run(function ($rootScope, CONSTANTS) {
    $rootScope.CONSTANTS = CONSTANTS;
});

//States
app.config(function($stateProvider, $urlRouterProvider) {

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

        .state('publication', {
            url: '/publication',
            templateUrl: 'pages/publication.html'       
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

