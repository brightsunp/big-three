var app = angular.module('testTask', []);

app.run(function($rootScope) {
	$rootScope.flag = false;
});

app.controller('CloudCtrl', ['$http', '$scope', function($http, $scope) {
	$scope.searchCases = function() {
		$modal.modal('hide');
		$('#cloud_container').hide();
		$('#right_png').removeClass('blur');
		$('#cases_nav').removeClass('todo').addClass('finished');
		$rootScope.flag = true;
	};

}]);

app.controller('CasesCtrl', ['$http', '$scope', function($http, $scope) {
	// get(url) url: route for .json file
	$http.get('cases2.json').success(function(data) {
		$scope.cases = data;
	});
}]);
