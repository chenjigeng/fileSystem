angular.module("app")
	.config ($state-provider, $url-router-provider) !->
		$url-router-provider.otherwise("/home");
		$state-provider
			.state("home", {
				url: "/home"
				templateUrl: "home/home.html"
				resolve: result: ($http) ->
					$http.get "/post", (data) ->
						console.log(data);
						return data;
				controller: ($scope, result) !->
					#$scope.regist = regist;
					$scope.posts = result.data;
					console.log result
			})
