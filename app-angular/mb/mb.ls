angular.module("mb". [])
  .config ($state-provider, $url-router-provider) !->
    $url-router-provider.otherwise("/home");
    $state-provider
      .state("mb", {
        url: "/mb"
        abstract: true
    })