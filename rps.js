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
            url: '/game',
            templateUrl: '/game.html',
            controller: 'GameCtrl'
            });

        $urlRouterProvider.otherwise('home');
    }]) 
    .factory('gameFactory', [function() {
        var o = {
            games: [
                {name:rock,imgUrl:'rock.png'},
                {name:paper,imgUrl:'paper.png'},
                {name:scissors,imgUrl:'scissors.png'}
            ]
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