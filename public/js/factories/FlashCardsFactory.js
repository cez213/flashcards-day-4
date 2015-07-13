app.factory('FlashCardsFactory', function ($http) {
        
        return {
            getFlashCards: function (category) {
            	var config = {};
            	if(category) config = {params: {category: category}};
                //var url = (category)? '/cards' + '?category=' + category : '/cards'
                return $http.get('/cards', config)
                    .then(function (res) {
                        return res.data;
                    })
            	}
        }
});
