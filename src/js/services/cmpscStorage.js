var cmpscStorage = angular.module('courseService', ['ngStorage']);

cmpscStorage.factory('data', ['$localStorage', function($localStorage){

	var defaults =  $localStorage.$default({
		required: [
			{
				'name': 'Introduction to Programming Techniques',
				'number': '121',
				'credits': 3,
				'completed': false,
				'scheduled': false 
			},
			{
				'name': 'Intermediate Programming',
				'number': '122',
				'credits': 3,
				'completed': false,
				'scheduled': false 
			},
			{
				'name': 'Object Oriented Programming with Web-Based Applications',
				'number': '221',
				'credits': 3,
				'completed': false,
				'scheduled': false 
			}
		]
	});999

	var store = {
		get: function(item) {
			if(angular.isUndefined($localStorage.required))	{
				$localStorage = defaults;
			}
			return $localStorage[item];
		},

		reset: function() {
			$localStorage = defaults;
		}
	};

	return store;

}]);