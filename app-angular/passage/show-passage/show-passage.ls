angular.module "app"
	.config ($state-provider, $url-router-provider) !->
		$state-provider
			.state("passage.show-passage", {
				url: '/show'
				views:
					"main@":
						templateUrl: "passage/show-passage/show-passage.html"
						controller: ($scope, $resource, $rootScope, $state, result) !->
							while $resource == undefined
								console.log "enter"
							$scope.passage = result.data[0];
							console.log result
							console.log $scope.passage
						resolve:
							result: ($http, $rootScope, $resource) ->
								console.log("coming");
								Post = $resource("./post/show/:id", {})
								Post.get({id: $rootScope.passageId},
									(data)->
										console.log data
										data.data)	
			})