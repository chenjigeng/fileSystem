angular.module "app"
	.config ($state-provider, $url-router-provider) !->
		$state-provider
			.state("passage.show-passage", {
				url: '/show'
				views:
					"main@":
						templateUrl: "passage/show-passage/show-passage.html"
						controller: ($scope, $resource, $rootScope, $state, result) !->
							$scope.passage = result.data.data[0];
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