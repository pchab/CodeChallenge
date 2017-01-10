(function(){
	var app = angular.module('codeChallenge', [],
		function($locationProvider){$locationProvider.html5Mode(true);}
    );

	app.controller('EditorController',['$http', '$window', function($http, $window){
		var editor = this;

		editor.executePython = function() {
			$http({
		        url: '/python',
		        method: "POST",
		        data: { code : editor.input }
		    }).success(function(data){
				editor.output = data;
			});
		}
	}]);
})();