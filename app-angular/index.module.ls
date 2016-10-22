'use strict'

angular.module "app", ["ui.router", 
                      "ngMaterial",
                      "textAngular", 
                      'infinite-scroll',
                      'ngMessages', 
                      'ngFileUpload',
                      'ngResource', 
                      'angularMoment',
                      "mb", 
                      "pc"]
  .run(
    * "$rootScope"
      "$state"
      "$http"
      ($root-scope, $state, $http)!->
        $root-scope.$on "$stateChangeStart", (evt, next) !->

      )


