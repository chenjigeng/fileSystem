angular.module "app"
	.config ($state-provider, $url-router-provider) !->
		$state-provider
			.state("user", {
				url:'/user'
				abstract: true
			})
			.state("user.profile", {
				url: '/profile'
				authenticate: true
				views:
					"main@":
						templateUrl: "user/profile/profile.html"
						controller: ($scope, $resource, $rootScope, $state) !->
							$scope.user = $rootScope.user
			})