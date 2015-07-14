app.controller('NewCardController', function ($scope, $rootScope, NewCardFactory){
	$scope.newCard = {
	    question: null,
	    category: null,
	    answers: [
	        { text: null, correct: false },
	        { text: null, correct: false },
	        { text: null, correct: false }
	    ]
	}

	$scope.defaultCard = angular.copy($scope.newCard);

	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];
	//$scope.categories = FlashCardsFactory.categories;

	$scope.setCorrect = function (givenAnswer){
		var card = $scope.newCard;
		card.answers.forEach(function (a){
			a.correct = false;
		})
		givenAnswer.correct = true;
	}

	$scope.submitted = false;

	$scope.reset = function(){
		$scope.newCard = $scope.defaultCard;
	}
	

	$scope.submitNewCard = function(newCard, newCardForm){
		$scope.submitted = true;
		NewCardFactory.postNewCard(newCard, newCardForm)
			.then(function(data){
				$rootScope.$broadcast('addNewCard', data);
				$scope.reset();
				$scope.submitted = false;
				return data;
			}).then(null, function(err) {
				return next(err);
			})
	}


/*	$scope.newCardForm.$validators.noSameText = function(){
		return $scope.newCard.answers.reduce(function (isValid, answer){
			if(!isValid) return false;
			if(texts.indexOf(answer.text) === -1){
				texts.push(answer.text);
				return true;
			}else return false;
		}, true)
	}*/

})