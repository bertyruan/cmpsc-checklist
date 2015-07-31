var tableTemplate = angular.module('tableTemplate', []);

tableTemplate.directive('requiredCourse', function () {
  return {
    scope: {
      item: '=requiredCourse'
    },
    restrict: 'EA',
    template: '<td>{{item.name}}</td><td>{{item.number}}</td><td>{{item.credits}}</td><td>{{item.done}}</td><td>{{item.scheduled}}</td>'
    };
});

tableTemplate.directive('headers', function () {
  return {
    scope: {
      item: '=headers'
    },
    restrict: 'EA',
    template: '<td>name</td><td>number</td><td>credits</td><td>done</td><td>scheduled</td>'
    };
});