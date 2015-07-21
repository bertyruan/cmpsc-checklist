var tableTemplate = angular.module('tableTemplate', []);
tableTemplate.directive('requiredTable', function() {
	return {
		restrict: 'E',
		scope: {
			courseName: '=info'
		},
		template: 'These are the course names {{courseName.name}}'
	};
});

