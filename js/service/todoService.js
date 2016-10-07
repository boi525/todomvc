/*
* @Author: 虚竹
* @Date:   2016-09-28 10:13:31
* @Last Modified by:   虚竹
* @Last Modified time: 2016-09-28 11:40:52
*/

(function(angular) {
	angular.module("todoMvcApp").service('todoService', [
		'$window', function($window) {
		var localStorage = $window.localStorage;
		var todo = localStorage['my_do_list']?localStorage['my_do_list']:'[]';
		this.todoList = JSON.parse(todo);
		console.log(this.todoList);

		this.saveLocal = function(todoList) {
			localStorage['my_do_list'] = JSON.stringify(todoList);
		};

		var self = this;
		this.removeTodo = function(item) {
			self.todoList.splice(self.todoList.indexOf(item), 1);
			this.saveLocal(self.todoList);
		};

		this.addTodo = function(text) {
            var obj = {
            	id: self.todoList.length + 1,
				text: text,
				completed: false
            }
            // 3.添加到数组中
            self.todoList.push(obj);
            this.saveLocal(self.todoList);
		};

		this.clearAllCompleted = function() {
			//es6 里面的let
			// var completeds = [];
			// for(var i = 0; i < self.todoList.length; i++) {
			// 	if(!self.todoList[i].completed) {
			// 		completeds.push(self.todoList[i]);
			// 	}
			// }

			// self.todoList = completeds;
			var completeds = [];
			for(var i = 0; i < self.todoList.length; i++) {
				if(!self.todoList[i].completed) {
					completeds.push(self.todoList[i]);
				}
			}
			this.saveLocal(completeds);
			return completeds;
		};
		
		this.updateTodo = function(item) {
			item.isEditing = !item.isEditing;
			for(var i = 0; i < self.todoList.length; i++) {
				if(self.todoList[i].id == item.id) {
					self.todoList[i].text = item.text;
					break;
				}
			}
			this.saveLocal(self.todoList);
		}
	}]);
})(angular);

