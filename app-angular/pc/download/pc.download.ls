angular.module("pc")
  .config ($state-provider, $url-router-provider) !->
    $state-provider
      .state("pc.home.download", {
        views:
          "content":
            templateUrl: 'pc/download/pc.download.html'
            controller-as: "vm"
            controller: (Upload, $root-scope, $http)->
              @name = "cjg"
        url: "/downloads"
      })