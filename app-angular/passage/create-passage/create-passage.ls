angular.module "app"
	.config ($state-provider, $url-router-provider) !->
		$state-provider
			.state("passage", {
				url: '/passage'
				abstract: true
			})
			.state("passage.create-passage", {
				url: '/create'
				views:
					"main@":
						templateUrl: "passage/create-passage/create-passage.html"
						controller: ($scope, $http, $rootScope, $state) !->
							$scope.submit = !->
								post = 
									title: $scope.title
									content: $scope.content
									author: $rootScope.user.email
								console.log post
								$http.post './post/create', post
									.then(
										(data)!->
											console.log(data);
											console.log("successfully");
											$state.go("home")
										(data)!->
											console.log "fail"
									)
							#todo
			})