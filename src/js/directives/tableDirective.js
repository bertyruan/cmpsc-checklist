var tableTemplate = angular.module('tableTemplate', []);

tableTemplate.directive('requiredCourse', function () {
  return {
    scope: {
      item: '=requiredCourse'
    },
    restrict: 'EA',
    template: '<td>{{item.name}}</td><td>{{item.number}}</td><td>{{item.credits}}</td><td> <input type="checkbox" name="myTextEditBox"/></td><td> <input type="checkbox" name="myTextEditBox" /></td>'
    };
});

tableTemplate.directive('headers', function () {
  return {
    restrict: 'EA',
    template: '<td>name</td><td>number</td><td>credits</td><td>completed</td><td>scheduled</td>'
    };
});

tableTemplate.directive('degreeAudit', function() {
	return {
		restrict: 'EA',
		template: '<td></td><td>{{totalStr}}</td><td>{{credits}}</td><td>{{completed}}</td><td>{{scheduled}}</td>'
	}

})