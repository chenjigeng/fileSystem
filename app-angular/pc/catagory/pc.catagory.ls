angular.module("pc")
  .config ($state-provider, $url-router-provider) !->
    $state-provider
      .state("pc.home.catagory", {
        views:
          "content":
            templateUrl: 'pc/catagory/pc.catagory.html'
            controller-as: "vm"
            controller: !->
              @name = "cjg"
        url: "/catagory"
      })