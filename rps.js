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
                {name:'rock',imgUrl:'images/rock.png',id:0,hand:'images/rockHand.png'},
                {name:'paper',imgUrl:'images/paper.png',id:1,hand:'images/paperHand.png'},
                {name:'scissors',imgUrl:'images/scissors.png',id:2,hand:'images/scissorsHand.png'}
            ]
        };
        return o;
    }])
    .controller('MainCtrl', [
        '$scope',
        'gameFactory',
        function($scope, gameFactory){
            $scope.games = gameFactory.games;
        }
    ])
    .controller('GameCtrl', [
        '$scope',
        '$stateParams',
        'gameFactory',
        function($scope, $stateParams, gameFactory) {
            $scope.game = gameFactory.games[$stateParams.game];
            $scope.computer = {pick:getRandomInt(3),hand:''};
            

        }
    ])

    function getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
    }