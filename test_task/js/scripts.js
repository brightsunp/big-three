var app = angular.module('testTask', []);

app.controller('MainCtrl', function($scope) {
	$scope.$on("CasesShowChange", function(event, msg) {		
		$scope.$broadcast("CasesShowChangeFromMain", msg);
	});
	$scope.$on("HistShowChange", function(event, msg) {
		$scope.$broadcast("HistShowChangeFromMain", msg);
	});

}).controller('CloudCtrl', function($scope) {
	var cloudChange = function() {
		$modal.modal('hide');
		$('#cloud_container').hide();
		$('#right_png').removeClass('blur');
		$('#cases_nav').removeClass('todo').addClass('finished');
	};

	$scope.searchCases = function() {
		cloudChange();
		$scope.$emit("CasesShowChange", 1);
	};

}).controller('CasesCtrl', function($http, $scope) {
	$scope.$on("CasesShowChangeFromMain", function(event, msg) {	
		$scope.casesShow = msg;
	});	
	// get(url) url: route for .json file
	$http.get('json/cases2.json').success(function(data) {
		$scope.cases = data;
	}).error(function() {
		alert('a $http request error occurred.');
	});

	var casesChange = function() {
		$('#cases_container').hide();
		$('#run_png').removeClass('blur');
		$('#run_nav').removeClass('todo').addClass('finished');
	};

	$scope.submit = function() {
		casesChange();
		$scope.$emit("HistShowChange", 1);
		
	};
}).controller('HistoryCtrl', function($scope) {
	$scope.$on("HistShowChangeFromMain", function(event, msg) {
		$scope.histShow = msg;
	});
});
