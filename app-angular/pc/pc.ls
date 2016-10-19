angular.module("pc". [])
  .config ($state-provider, $url-router-provider) !->
    $state-provider
      .state("pc", {
        url: "/pc"
        abstract: true
    })