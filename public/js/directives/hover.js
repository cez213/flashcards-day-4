app.directive('borderOnHover', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			element.on('mouseenter', function(){
				element.addClass('bordered');
				//element.css({border: "black solid 10px"});
			})
			element.on('mouseleave', function(){
				element.removeClass('bordered');
				//element.css({border: "black solid 1px"});
			})
		}
	}
})

//link function: angulars way of giving you controll on what gets put on the page
//link is the last chance to change the element before displaying it on the page