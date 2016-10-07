/*
* @Author: 虚竹
* @Date:   2016-09-28 09:55:06
* @Last Modified by:   虚竹
* @Last Modified time: 2016-09-28 17:52:09
*/

(function(angular) {
	angular.module("todoMvcApp").controller('todoController', [
		'$scope', 
		'$location',
		'todoService',
		function($scope, $location, todoService){
		console.log("123");
		// 给input暴露一个数据模型
		// $scope.inpuText = '';

		// console.log($location.path());
		$scope.location = $location;
		$scope.selector = {};
		
		var path = $location.path();
		if(path == "/") {
			$scope.selector = {};
		}else if(path == "/active") {
			$scope.selector = {completed:false};
		}else if(path == '/completed') {
			$scope.selector = {completed:true};
		}else {
			$scope.selector = {};
			// $location.path("/");
		}


		$scope.todoList = todoService.todoList;

		$scope.removeItem = function(item) {
			todoService.removeTodo(item);
		};

		$scope.addTodo = function(event, text) {
			if(text == '' || undefined == text || null == text) {
				return;
			}

			var keycode = window.event ? event.keyCode : event.which;
            if((13 == keycode) || (108 == keycode)){
                // 1.获取model-inputText值
                console.log(text);
                // 2.创建一个obj
                todoService.addTodo(text);
                $scope.inpuText = '';
            }
		};

		$scope.clearAllCompleted = function() {
			//es6 里面的let
			$scope.todoList = todoService.clearAllCompleted();
		};
		
		$scope.save = function(item) {
			todoService.updateTodo(item);
		}

		$scope.toggle = function() {
			todoService.saveLocal($scope.todoList);
		}
	}]);
})(angular);