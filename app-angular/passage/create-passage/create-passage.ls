angular.module "app"
	.config ($state-provider, $url-router-provider) !->
		$state-provider
			.state("passage", {
				url: '/passage'
				abstract: true
			})
			.state("passage.create-passage", {
				url: '/create'
				views:
					"main@":
						templateUrl: "passage/create-passage/create-passage.html"
						controller: ($scope) !->
							#todo
			})