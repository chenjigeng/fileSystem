'use strict'

angular.module "app", ["ui.router", "ngMaterial","textAngular", 'infinite-scroll','ngMessages', 'ngFileUpload','ngResource', 'angularMoment']
  .run(
    * "$rootScope"
      "$state"
      "$http"
      ($root-scope, $state, $http)!->
        $root-scope.$on("$stateChangeStart", (evt, next) !->
            if next.authenticate && !$root-scope.login
              evt.preventDefault()
              $state.go("home"))
      )


