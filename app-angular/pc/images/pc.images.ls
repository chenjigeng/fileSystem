angular.module("pc")
  .config ($state-provider, $url-router-provider) !->
    $state-provider
      .state("pc.home.images", {
        views:
          "content":
            templateUrl: 'pc/images/pc.images.html'
            controller-as: "vm"
            controller: !->
              @name = "cjg"
        url: "/images"
      })