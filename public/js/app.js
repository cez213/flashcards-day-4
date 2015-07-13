var app = angular.module('flashCards', []);

app.factory('FlashCardsFactory', function ($http) {
        
        return {
            getFlashCards: function (category) {
                var url = (category)? '/cards' + '?category=' + category : '/cards'
                return $http.get(url)
                    .then(function (res) {
                        return res.data;
                    })
                }
                
        }
});

app.factory('ScoreFactory', function(){
    return {
        correct: 0,
        incorrect: 0
    };
});

app.controller('StatsController', function ($scope, ScoreFactory){
    $scope.scores = ScoreFactory;
})
