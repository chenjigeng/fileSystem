angular.module("app")
	.config ($state-provider, $url-router-provider) !->
		$url-router-provider.otherwise("/home");
		$state-provider
			.state("home", {
				views:
					"main":
						templateUrl: 'home/home.html'
						controller: ($scope, result) !->
							$scope.posts = result.data;
							console.log result
				url: "/home"
				resolve: result: ($http) ->
					$http.get "/post", (data) ->
						console.log(data);
						return data;
			})
