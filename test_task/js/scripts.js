var app = angular.module('testTask', []);

app.controller('MainCtrl', function($scope) {
	$scope.$on("CasesShowChange", function(event, msg) {		
		$scope.$broadcast("CasesShowChangeFromMain", msg);
	});
	$scope.$on("HistShowChange", function(event, msg) {
		$scope.$broadcast("HistShowChangeFromMain", msg);
	});

}).controller('CloudCtrl', function($scope) {
	$scope.searchCases = function() {
		$modal.modal('hide');
		$('#cloud_container').hide();
		$('#right_png').removeClass('blur');
		$('#cases_nav').removeClass('todo').addClass('finished');
		$scope.$emit("CasesShowChange", 1);
	};

}).controller('CasesCtrl', function($http, $scope) {
	$scope.$on("CasesShowChangeFromMain", function(event, msg) {	
		$scope.casesShow = msg;
	});	
	// get(url) url: route for .json file
	$http.get('cases2.json').success(function(data) {
		$scope.cases = data;
	});

	$scope.submit = function() {
		$('#cases_container').hide();
		$('#run_png').removeClass('blur');
		$('#run_nav').removeClass('todo').addClass('finished');
		$scope.$emit("HistShowChange", 1);
		
	};
}).controller('HistoryCtrl', function($scope) {
	$scope.$on("HistShowChangeFromMain", function(event, msg) {
		$scope.histShow = msg;
	});
});
