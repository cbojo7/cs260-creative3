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
            games: [
                {name:'rock',imgUrl:'images/rock.png',id:0,hand:'images/rockHand.png'},
                {name:'paper',imgUrl:'images/paper.png',id:1,hand:'images/paperHand.png'},
                {name:'scissors',imgUrl:'images/scissors.png',id:2,hand:'images/scissorsHand.png'}
            ]
        };
        return o;
    }])
    .factory('playerFactory', [function() {
        var o = {
            player:{wins:0,losses:0,name:'RPSHero'}
        };
        return o;
    }])
    .controller('MainCtrl', [
        '$scope',
        'gameFactory',
        'playerFactory',
        function($scope, gameFactory, playerFactory){
            $scope.games = gameFactory.games;
            $scope.player = playerFactory.player;
        }
    ])
    .controller('GameCtrl', [
        '$scope',
        '$stateParams',
        'gameFactory',
        'playerFactory',
        function($scope, $stateParams, gameFactory, playerFactory) {
            $scope.game = gameFactory.games[$stateParams.id];
            $scope.player = playerFactory.player;
            $scope.computer = {pick:getRandomInt(3),hand:''};
            $scope.computer.hand = gameFactory.games[$scope.computer.pick].hand;
            $scope.result = findWinner($scope.game.id,$scope.computer.pick);
            if ($scope.result == 'Player Lose') {
                $scope.player.losses++;
            } else if ($scope.result == 'Player Wins!') {
                $scope.player.wins++;
            }
        }
    ])

    function getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
    }

    function findWinner(player,comp) {
        if(player == comp) {
            return 'Draw';
        }
        if (player == 0) {
            if (comp == 1) {
                return 'Player Lose';
            } else {
                return 'Player Win!';
            }
        }
        if (player == 1) {
            if (comp==2) {
                return 'Player Lose';
            } else {
                return 'Player Win!';
            }
        }
        if (comp==0) {
            return 'Player Lose';
        } else {
            return 'Player Win!';
        }

    }