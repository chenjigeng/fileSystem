angular.module("pc")
	.config ($state-provider, $url-router-provider) !->
		$url-router-provider.otherwise("/home");
		$state-provider
			.state("pc.home", {
				views:
					"main@":
						templateUrl: 'pc/home/home.html'
						controller-as: "vm"
						controller: !->
							@name = "cjg"
				url: "/home"
			})
