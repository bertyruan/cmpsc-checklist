var courseCheckList = angular.module('courseController', []);

courseCheckList.controller('requiredCourses', ['$scope', 'localStorage',
	function($scope, localStorage) {

		console.log(localStorage);
		var history = $scope.history = localStorage.history;

	}]);