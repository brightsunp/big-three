var app = angular.module('loginForm', []);


app.controller('LoginCtrl', function($scope) {
	$scope.users = {
		{
			usr: 'admin',
			pwd: 'admin'
		},
		{
			usr: 'another',
			pwd: '123456'
		}
	}

	$scope.click = function() {
		alert($scope.username);
	};
});
