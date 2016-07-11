'use strict'

nav = ($scope, $mdDialog, $state) !->
	$scope.openMenu = ($mdOpenMenu, ev) !->
		$mdOpenMenu(ev);
	$scope.createPass = !->
		$state.go("passage.create-passage");
angular.module "app", ["ui.router", "ngMaterial", 'ngMessages']
	.controller "nav", nav