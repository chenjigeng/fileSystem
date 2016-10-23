angular.module("pc", [])
  .config ($state-provider, $url-router-provider) !->
    $url-router-provider.otherwise("/pc/home");
    $state-provider
      .state("pc", {
        url: "/pc"
        abstract: true
      })