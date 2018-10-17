angular.module('RPS', ['ui.router'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl'
            })
            .state('game', {
            url: '/game/{id}',
            templateUrl: '/game.html',
            controller: 'GameCtrl'
            });

        $urlRouterProvider.otherwise('home');
    }]) 
    .factory('gameFactory', [function() {
        var o = {
            posts: []
        };
        return o;
    }])
    .controller('MainCtrl', [
        'scope',
        'gameFactory',
        function($scope, gameFactory){
            $scope.games = gameFactory.games;

            $scope.addScore = function() {

            }

            $scope.incrementScore = function(game) {
                score.increment += 1;
            }
        }
    ])
    .controller('GameCtrl', [
        $scope,
        '$stateParams',
        'gameFactory',

    ])