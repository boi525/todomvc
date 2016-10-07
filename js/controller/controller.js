(function(angular) {
	angular.module('app', [])
	.controller('todoController', ['$scope', '$location', function($scope, $location){
		$scope.addTodo = function(event, text) { 
			if(text == '' || undefined == text || null == text) {
				return;
			}
			var keycode = window.event ? event.keyCode : event.which;
			if((13 == keycode) || (108 == keycode)){
                // 1.获取model-inputText值
                console.log(text);
                // 2.创建一个obj
                // todoService.addTodo(text);
                $scope.inpuText = '';
            }
		};
	}]);
})(angular);
