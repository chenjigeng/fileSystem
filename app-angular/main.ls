'use strict'
test1 = ($scope)!->
	$scope.name = "CJG"
angular.module "app", ["ui.router", "ngMaterial"]
	.controller("test", test1);
