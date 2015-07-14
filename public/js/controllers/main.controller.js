app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	$scope.loaded = false;
	
	FlashCardsFactory.getFlashCards()
			.then(function(cards){
				$scope.flashCards = cards;
				$scope.loaded = true;
			}).then(null, function(err){
				return next(err);
			})

	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.selected = 'all';
	$scope.getCategoryCards = function(category){
		$scope.selected = category;
		$scope.loaded = false;
		FlashCardsFactory.getFlashCards(category)
			.then(function(data){
				$scope.flashCards = data;
				$scope.loaded = true;
			})
	}

	$scope.resetCategories = function(){
		$scope.selected = 'all';
		FlashCardsFactory.getFlashCards()
				.then(function(data){
				$scope.flashCards = data;
			})
	}

	$scope.$on('addNewCard', function(event, data){
		if(data.category === $scope.selected || $scope.selected === 'all') $scope.flashCards.push(data)
	})

})