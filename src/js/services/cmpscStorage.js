var cmpscStorage = angular.module('courseService', []);

cmpscStorage.factory('localStorage', function(){

	var STORAGE_ID = 'course-history';

	var store = {
		history: [],

		_getFromLocalStorage: function() {
			return JSON.parse(localStorage.getItem(STORAGE_ID || '[]'));
		},

		_saveToLocalStorage: function(newHistory) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(newHistory));
		},

		get: function() {
			angular.copy(this._getFromLocalStorage(), this.history);
		},

		update: function(newHistory) {
			this.history = newHistory;
		}
	};

	return store;

});