(function(angular) {
	angular.module("todoMvcApp").directive('setfocus', function todoFocus($timeout) {
		return function (scope, elem, attrs) {
			scope.$watch(attrs.setfocus, function (newVal) {
				if (newVal) {
					$timeout(function () {
						elem[0].focus();
					}, 200, false);
				}
			});
		};
	});
})(angular);

