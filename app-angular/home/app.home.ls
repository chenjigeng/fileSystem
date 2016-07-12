angular.module("app")
	.config ($state-provider, $url-router-provider) !->
		$url-router-provider.otherwise("/home");
		$state-provider
			.state("home", {
				views:
					"main":
						templateUrl: 'home/home.html'
						controller: ($scope, result, $rootScope, $state) !->
							$scope.posts = result.data;
							console.log result
							$scope.show = (id)->
								$rootScope.passageId = id;
								$state.go("passage.show-passage");
				url: "/home"
				resolve: result: ($http) ->
					$http.get "/post", (data) ->
						console.log(data);
						return data;
			})
