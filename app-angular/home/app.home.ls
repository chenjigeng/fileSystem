angular.module("app")
	.config ($state-provider, $url-router-provider) !->
		$url-router-provider.otherwise("/home");
		$state-provider
			.state("home", {
				views:
					"main@":
						templateUrl: 'home/home.html'
						controller-as: "vm"
						controller: !->
							@name = "cjg"
				url: "/home"
			})
