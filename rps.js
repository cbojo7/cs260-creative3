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
                {name:rock,imgUrl:'images/rock.png',hand:'images/rockHand.png'},
                {name:paper,imgUrl:'images/paper.png',hand:'images/paperHand.png'},
                {name:scissors,imgUrl:'images/scissors.png',hand:'images/scissorsHand.png'}
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