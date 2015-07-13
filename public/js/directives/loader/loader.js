app.directive('loader', function(){
	return {
		restrict: 'E',
		scope: true, //isolates directive scope, so it doesn't inherit parent's scope
		templateUrl: 'js/directives/loader/loader.html' 
	}
})