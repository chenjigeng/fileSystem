'use strict'

nav = ($scope, $mdDialog, $state) !->
	$scope.openMenu = ($mdOpenMenu, ev) !->
		$mdOpenMenu(ev);
	$scope.createPass = !->
		$state.go("passage.create-passage");
	$scope.Passages = !->
		console.log("enter");
		$state.go("passage.list-passage")
angular.module "app", ["ui.router", "ngMaterial", 'ngMessages', 'ngResource']
	.controller "nav", nav

