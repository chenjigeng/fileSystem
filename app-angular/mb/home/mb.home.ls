angular.module("mb")
  .config ($state-provider, $url-router-provider) !->
    $state-provider
      .state("mb.home", {
        views:
          "main@":
            templateUrl: 'mb/home/home.html'
            controller-as: "vm"
            controller: ($state, $mdDialog)!->
              # alert(window.navigator.connection);
              @name = "cjg"
              @files = 
                * name: "汤臣倍健2016年最新版本的PPT模板"
                  filefolder: "文档模板"
                  date: "2016-10-13"
                  assets: "assets/u218.png"
                * name: "我是一个压缩的文档"
                  filefolder: "档案类目名"
                  date: "2016-10-13"
                  assets: "assets/u257.png"
                * name: "我是一个视频的文档"
                  filefolder: "档案类目"
                  date: "2016-10-13"
                  assets: "assets/u259.png"
                * name: "汤臣倍健2016年最新版本的excel模板"
                  filefolder: "文档模板"
                  date: "2016-10-13"
                  assets: "assets/u253.png"
              @.gotoCatagory = !->
                $state.go "mb.catagory"
              @.get-more-files = !->
                new-files = 
                  * name: "汤臣倍健2016年最新版本的PPT模板"
                    filefolder: "文档模板"
                    date: "2016-10-13"
                    assets: "assets/u218.png"
                  * name: "我是一个压缩的文档"
                    filefolder: "档案类目名"
                    date: "2016-10-13"
                    assets: "assets/u257.png"
                Array.prototype.push.apply @files, new-files
                # requese more files
        url: "/home"
      })
