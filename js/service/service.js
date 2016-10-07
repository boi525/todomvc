(function(angular) {
	angular.module("app").service('todoService', ['$window', function($window) {
		var self = this;
		this.addTodo = function(text) {
            var obj = {
            	id: self.todoList.length + 1,
				text: text,
				completed: false
            }
            self.todoList.push(obj);
            this.saveLocal(self.todoList);
		};
	}]);
})(angular);