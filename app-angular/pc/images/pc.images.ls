angular.module("pc")
  .config ($state-provider, $url-router-provider) !->
    $state-provider
      .state("pc.home.images", {
        views:
          "content":
            templateUrl: 'pc/images/pc.images.html'
            controller-as: "vm"
            controller: (Upload, $root-scope, $http, $md-dialog)->

              #预览
              @preview = (file, event) !->
                $root-scope.file = file;
                $md-dialog.show({
                  controller: PriviewController,
                  templateUrl: "pc/images/pc.preview.html"
                  parent: angular.element(document.body)
                  targetEvent: event
                  clickOutsideToClose:true
                  })

              #删除图片
              @delete = (file) !->
                $root-scope.user.files.splice $root-scope.user.files.indexOf(file), 1
                $http.delete "api/users/files/" + file._id
                  .then(
                    (data) !->
                      console.log data
                  )
                  
              @name = "cjg"
        url: "/images"
      })

PriviewController = ($scope, $root-scope, $md-dialog) !->
  $scope.file = $root-scope.file
  $scope.hide = !->
    $md-dialog.hide!