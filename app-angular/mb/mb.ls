angular.module "mb", []
  .config ($state-provider, $url-router-provider) !->
    $state-provider
      .state("mb", {
        url: "/mb"
        abstract: true
      })