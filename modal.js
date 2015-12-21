'use strict';

angular.module('app.modal', [])

.directive('modal', function() {
	return {
		restrict : 'E',
		templateUrl : 'app/components/modal/modal.html',
		replace : true,
		transclude : true,
		scope : {
			show : '='
		},
		controller : 'ModalCtrl',
		controllerAs : 'modal',
		bindToController : true
	}
})

.controller('ModalCtrl', [ '$scope', ModalCtrl ]);

function ModalCtrl($scope) {
	var _this = this;

	this.hide = function() {
		_this.show = false;
	}
};