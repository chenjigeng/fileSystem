angular.module "app"
	.config ($state-provider, $url-router-provider) !->
		$state-provider
			.state("passage.list-passage", {
				url: '/list'
				resolve: 
					result: ($http, $rootScope, $resource) ->
						console.log("coming");
						Post = $resource("./post/get/:id", {id:"@id"})
						Post.get({id: $rootScope.user.email},
							(data)->
								console.log data
								data.data)	
				views:
					"main@":
						templateUrl: "passage/passage-list/passage-list.html"
						controller: ($scope, $resource, $rootScope, $state, result) !->
							$scope.passages = result.data;
							console.log result
							console.log $scope.passages
							$scope.show = (id)->
								$rootScope.passageId = id;
								$state.go("passage.show-passage");
			})
