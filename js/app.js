// app.js
var app = angular.module('ideal2018', ['ui.router', 'ngSanitize']);

//Constants
app.constant('CONSTANTS', {
    CAROUSEL_TITLE: "The next edition of IDEAL conference will be hosted on Manchester (UK).",
    DATE_PLACE: "Please check all the information on our new website: http://www.confercare.manchester.ac.uk/events/ideal2019/"
});

//Assign constants to root scope
app.run(function ($rootScope, CONSTANTS) {
    $rootScope.CONSTANTS = CONSTANTS;

    // this function run after a page have been loaded
    $rootScope.$on('$viewContentLoaded', function (event, view) {
        // if the page is content.html then load the events to change the arrows icons
        if (view && view.viewDecl.templateUrl == "pages/content.html") {
            $('.icon-toogleable').click(function () {
                icon = $(this).find(".icon-to-toogle .fa")

                if (icon.hasClass("fa fa-level-down")) {
                    icon.removeClass("fa fa-level-down").addClass("fa fa-level-up")
                } else if (icon.hasClass("fa fa-level-up")) {
                    icon.removeClass("fa fa-level-up").addClass("fa fa-level-down")
                }
            });
        }
    });
});

//States
app.config(function ($stateProvider, $urlRouterProvider) {

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
            templateUrl: 'pages/content.html',
            onEnter: function () {

            }
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
