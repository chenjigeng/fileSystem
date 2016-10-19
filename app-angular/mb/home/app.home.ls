angular.module("mb")
	.config ($state-provider, $url-router-provider) !->
		$url-router-provider.otherwise("/home");
		$state-provider
			.state("mb.home", {
				views:
					"main@":
						templateUrl: 'mb/home/home.html'
						controller-as: "vm"
						controller: !->
							@name = "cjg"
				url: "/home"
			})
