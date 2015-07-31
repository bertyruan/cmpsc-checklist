var courseCheckList = angular.module('courseController', []);

courseCheckList.controller('courses', ['$scope', 'localStorage',
	function($scope, localStorage){

		$scope.courses = localStorage.dummyData;

		var audit = [0,0,0];
		angular.forEach(localStorage.dummyData, function(value, key) {
			this[0] += value['credits'];
			this[1] += value['completed'];
			this[2] += value['scheduled'];
		}, audit);

		$scope.totalStr = "Total:";
		$scope.credits = audit[0];
		$scope.completed = audit[1];
		$scope.scheduled = audit[2];
	}]);
