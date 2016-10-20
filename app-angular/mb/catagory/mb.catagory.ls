angular.module("mb")
  .config ($state-provider, $url-router-provider) !->
    $state-provider
      .state("mb.catagory", {
        views:
          "main@":
            templateUrl: 'mb/catagory/mb.catagory.html'
            controller-as: "vm"
            controller: !->
              @name = "cjg"
              @filefolders =
                * name: "企业VI标准"
                * name: "文档模板"
                * name: "电脑软件"
        url: "/catagory"
      })
