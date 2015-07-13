app.factory('NewCardFactory', function ($http){
	return {
		postNewCard: function (newCard, newCardForm) {
			//var newCard = {question: question, answers: answers, category: category}
			if (newCardForm.$valid) {
				return $http.post('/cards', newCard)
					.then(function(res){
						return res.data;
					})
				}
		}
	}
})