angular.module "app"
	.config ($state-provider, $url-router-provider) !->
		$state-provider
			.state("passage.list-passage", {
				url: '/list'
				resolve: 
					result: ($http, $rootScope, $resource) ->
						console.log("coming");
						url = "./post/get/" + $rootScope.user.email
						$http.get url, (data)->
							data.data
				views:
					"main@":
						templateUrl: "passage/passage-list/passage-list.html"
						controller: ($scope, $http, $rootScope, $state, result) !->
							$scope.passages = result.data.data;
							console.log result
							console.log $scope.passages
							$scope.show = (id)!->
								$rootScope.passageId = id;
								console.log id
								$state.go("passage.show-passage");
							$scope.remove = (id)!->
								url = "./post/remove/" + id
								$http.get url, (data) !->
									console.log data
								for i from 0 to $scope.passages.length
									if $scope.passages[i]._id == id
										$scope.passages.splice(i, 1);
										return
							$scope.edit = (id) !->
								$rootScope.editId = id
								$state.go("passage.edit-passage")
			})

