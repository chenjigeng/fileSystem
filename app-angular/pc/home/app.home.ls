angular.module("pc")
	.config ($state-provider, $url-router-provider) !->
		$state-provider
			.state("pc.home", {
				views:
					"main@":
						templateUrl: 'pc/home/home.html'
						controller-as: "vm"
						controller: ($root-scope, $md-dialog) !->

							if $root-scope.user
								$root-scope.login = true
							else
								$root-scope.login = false

							#登出
							@logout = !->
								$root-scope.login = false
								$root-scope.user = null

							#弹出登录界面
							@showLogin = (event) !->
								$md-dialog.show({
									controller: LoginController,
									templateUrl: "pc/home/LoginDialog.html"
									parent: angular.element(document.body)
									targetEvent: event
									clickOutsideToClose:true
									})

							@showRegist = (event) !->
								$md-dialog.show({
									controller: RegistController,
									templateUrl: "pc/home/RegistDialog.html"
									parent: angular.element(document.body)
									targetEvent: event
									clickOutsideToClose:true
									})
							@name = "cjg"
				url: "/home"
			})

#登录控制器
LoginController = ($scope, $md-dialog, $http, $root-scope) !->
	$scope.submit = !->
		user = {
			email: $scope.email
			password: $scope.password
		}
		$http.post "/api/users/login", user
			.then(
				(data) !->
					console.log data
					$root-scope.user = data.data[0];
					$root-scope.login = true
					$md-dialog.hide!
				(err) !->
					console.log err
			)
	$scope.hide = !->
		$md-dialog.hide!

#注册控制器
RegistController = ($scope, $md-dialog, $http, $root-scope) !->
	$scope.submit = !->
		user = {
			name: $scope.name
			password: $scope.password
			email: $scope.email
		}
		$http.post "api/users/regist", user
			.then( 
				(data) !->
					console.log(data)
					$root-scope.user = data.data;
					$root-scope.login = true
					$md-dialog.hide!
				(err) !->
					@err = err
			)

