var courseCheckList = angular.module('courseController', []);

courseCheckList.controller('requiredCourses', ['$scope', 'localStorage',

	function($scope, localStorage) {
		var history = $scope.history = localStorage.history;
		console.log(history);
		console.log(localStorage.dummyData);

		$scope.courses = localStorage.dummyData;

	}]);


courseCheckList.controller('testCase', ['$scope', 'localStorage',
	function($scope, localStorage){
		$scope.tests = localStorage.dummyData;
	}]);
