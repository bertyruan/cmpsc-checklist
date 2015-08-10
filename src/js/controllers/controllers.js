var courseCheckList = angular.module('courseController', []);

courseCheckList.controller('courses', ['$scope', 'data',
	function($scope, data){
		var courses = $scope.courses = data.get('required');

		var init = function(){
			$scope.toggleCompleted();
			$scope.toggleScheduled();
			sumCredits();
		};

		
		$scope.toggleCompleted = function() {		
			$scope.completed = courses[0]['completed'] + courses[1]['completed'] + courses[2]['completed'];
		};

		$scope.toggleScheduled = function() {
			$scope.scheduled = courses[0]['scheduled'] + courses[1]['scheduled'] + courses[2]['scheduled'];
		};

		sumCredits = function() {
			$scope.credits = courses[0]['credits'] + courses[1]['credits'] + courses[2]['credits'];
		};

		init();
		/*
		var audit = [0,0,0];
		angular.forEach(data.dummyData, function(value, key) {
			this[0] += value['credits'];
			this[1] += value['completed'];
			this[2] += value['scheduled'];
		}, audit);


		$scope.credits = audit[0];
		$scope.completed = audit[1];
		$scope.scheduled = audit[2];

		$scope.change = function() {
			console.log('here');
		};

		$scope.c = true;
		*/		
	}]);
