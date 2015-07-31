var cmpscStorage = angular.module('courseService', []);

cmpscStorage.factory('localStorage', function(){

	var STORAGE_ID = 'course-history';

	var store = {
		history: [],

		dummyData: [
			{
				'name': 'Introduction to Programming Techniques',
				'number': '121',
				'credits': 3,
				'done': false,
				'scheduled': false 
			},
			{
				'name': 'Intermediate Programming',
				'number': '122',
				'credits': 3,
				'done': false,
				'scheduled': false 
			},
			{
				'name': 'Object Oriented Programming with Web-Based Applications',
				'number': '221',
				'credits': 3,
				'done': false,
				'scheduled': false 
			}
		],

/*		_getFromLocalStorage: function() {
			return JSON.parse(localStorage.getItem(STORAGE_ID || dummyData));
		},

		_saveToLocalStorage: function(newHistory) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(newHistory));
		},

		get: function() {
			angular.copy(this._getFromLocalStorage(), this.history);
		},

		update: function(newHistory) {
			this.history = newHistory;
		}*/
	};

	return store;

});