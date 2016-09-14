var app = angular.module('testTask', []);
var testCases;

app.controller('CloudCtrl', ['$http', '$scope', function($http, $scope) {
	$scope.searchCases = function() {
		$modal.modal('hide');
		$('#cloud_container').hide();
		$('#right_png').removeClass('blur');
		$('#cases_nav').removeClass('todo').addClass('finished');
		return testCases = $http.get('/cases.json');
	};

}]);

app.controller('CasesCtrl', function($scope) {
	$scope.cases = JSON.parse(testCases);
	
});
