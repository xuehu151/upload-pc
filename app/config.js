/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider) {

/*    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/dashboards/dashboard_1");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });*/

    $urlRouterProvider.when('', 'account');

    $stateProvider
        .state('shareCapture', {
            url: "/shareCapture",
            templateUrl: "views/account/shareCapture.html",
            controller : shareCaptureCtrl
        })

        .state('account', {
            url: "/account",
            templateUrl: "views/account/account.html",
            controller : accountCtrl
        })


}

angular
    .module('uploadimg')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });
