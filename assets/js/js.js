jQuery(document).ready(function($) {
	$('input:first').focus();	

});


var _ng= new function(){
	var _x=this;
	_x.app=function(appNomb){
		var appl= angular.module(appNomb, []);
		return appl;
	};
	_x.controller=function(obj){
				obj.app.controller(
					obj.controller,
					['$scope',
						obj.function
					]
				);
	};
}