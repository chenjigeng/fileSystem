angular.module "app"
	.config ($state-provider, $url-router-provider) !->
		$state-provider
			.state("passage.edit-passage", {
				url: '/edit'
				authenticate: true
				resolve: 
					result: ($http, $rootScope, $resource) ->
						console.log("coming");
						url = "./post/show/" + $rootScope.editId
						console.log url
						$http.get url, (data) ->
							console.log(data)
							data.data
				views:
					"main@":
						templateUrl: "passage/edit-passage/edit-passage.html"
						controller: ($scope, $http, $rootScope, $state, result) !->
							$scope.passage = result.data.data[0];
							console.log result
							console.log $scope.passage
							$scope.submit = !->
								$http.post "/post/save", $scope.passage
									.then(
										(data)!->
											console.log data
											console.log "successfully"
											$state.go('home')
										(data)!->
											console.log "fail"
									)
			})
