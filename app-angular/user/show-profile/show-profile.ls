angular.module "app"
	.config ($state-provider, $url-router-provider) !->
		$state-provider
			.state("user.show-profile", {
				url: '/show-profile/:id'
				resolve: result: ($state-params, $http) ->
					url = "/users/" + $state-params.id
					$http.get url
						.then(
							(data) ->
								console.log data
								data
							(err) !->
								console.log err
								null
						)
				views:
					"main@":
						templateUrl: "user/show-profile/show-profile.html"
						controller: ($scope, $resource, $rootScope, $state, result) !->
							$scope.user = result.data.user[0]
							$scope.imgSrc = "public/img/" + $scope.user.email + ".jpg"
							$scope.edit-profile = !->
								$state.go("user.edit");
			})