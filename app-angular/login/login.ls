LoginCtrl = ($scope, $mdDialog, $mdMedia) !->
	$scope.showLogin = (ev) ->
		$mdDialog.show({
			controller: loginCtrl,
			templateUrl: "login/login.html",
			parent: angular.element(document.body)
			targetEvent: ev
			clickOutsideToClose: true
			fullscreen: useFullScreen
		)}

loginCtrl = ($scope, $mdDialog) !->
	$scope.submit = ($http)!->
		var user = {name:$scope.name, password: $scope.password, email: $scope.email};
		$http.post("users/regist", user).then(
			!->
				console.log "successfully"
			!->
				console.log "fail"
		)
angular.module "app"
	.controller "LoginCtrl", LoginCtrl