var standardTable = angular.module('standardTable', []);

standardTable.directive('requiredTable', function(){
	return {
		restrict: 'E',
		scope: {
			courseInfo: '=info'
		},
		templateURL: '../partials/standard-table.html'

	};
});
