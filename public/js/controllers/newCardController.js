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
				return data;
			}).then(null, function(err) {
				return next(err);
			})
	}
})