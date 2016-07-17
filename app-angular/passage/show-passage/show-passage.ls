angular.module "app"
	.config ($state-provider, $url-router-provider) !->
		$state-provider
			.state("passage.show-passage", {
				url: '/show'
				views:
					"main@":
						templateUrl: "passage/show-passage/show-passage.html"
						controller: ($scope, $resource, $rootScope, $state, result, $http) !->
							$scope.passage = result.data.data[0];
							$scope.submit = !->
								if !$rootScope.user
									alert("登录了才能评论")
								comment = {body: $scope.content, author: $rootScope.user.name}
								console.log("comment", comment);
								$scope.passage.comments.push(comment);
								console.log($scope.passage);
								$scope.content = ""
								$http.post "./post/saveComment", $scope.passage
									.then(
										(data) !->
											console.log(data);
											$state.reload();
										(err) !->
											console.log(err);
									)
							console.log result.data
							console.log $scope.passage
						resolve:
							result: ($http, $rootScope, $resource) ->
								console.log("coming");
								url = "./post/show/" + $rootScope.passageId
								console.log url
								$http.get url, (data) ->
									console.log(data)
									data.data
			})