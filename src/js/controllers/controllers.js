var courseCheckList = angular.module('courseController', []);

courseCheckList.controller('courses', ['$scope', 'localStorage',
	function($scope, localStorage){

		$scope.toggleCompleted = function() {		
			$scope.completed = courses[0]['completed'] + courses[1]['completed'] + courses[2]['completed'];
		};

		$scope.toggleScheduled = function() {
			$scope.scheduled = courses[0]['scheduled'] + courses[1]['scheduled'] + courses[2]['scheduled'];
		};

		$scope.change = function() {
			console.log('here');
		};

		$scope.c = true;

		var courses = $scope.courses = localStorage.dummyData;

		var audit = [0,0,0];

	

		angular.forEach(localStorage.dummyData, function(value, key) {
			this[0] += value['credits'];
			this[1] += value['completed'];
			this[2] += value['scheduled'];
		}, audit);

		
		$scope.credits = audit[0];
		$scope.completed = audit[1];
		$scope.scheduled = audit[2];

		
	}]);
