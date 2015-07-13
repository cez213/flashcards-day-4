app.directive('flashCard', function(FlashCardsFactory, ScoreFactory){
	return {
		restrict: 'E',
		templateUrl: '/js/directives/flashCard/flashCard.html',
		link: function(scope){
			scope.answerQuestion = function (answer, flashCard) {
				if (!flashCard.answered) {
					flashCard.answered = true;
					flashCard.answeredCorrectly = answer.correct;
					if(flashCard.answeredCorrectly) ScoreFactory.correct ++;
					else ScoreFactory.incorrect ++;
				}
			}
		},
		scope: {
			card: '=' //specify what we are getting in a is a javascript variable
		}
	}
})