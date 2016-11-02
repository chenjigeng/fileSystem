angular.module("pc")
  .config ($state-provider, $url-router-provider) !->
    $state-provider
      .state("pc.home.upload", {
        views:
          "content":
            templateUrl: 'pc/upload/pc.upload.html'
            controller-as: "vm"
            controller: (Upload, $root-scope, $http)->

              #文件上传
              @fileSubmit = !->
                if (@file)
                  Upload
                    .upload({
                    url: 'api/users/uploadFile',
                    data: {file: @file, username: $root-scope.user.name, user-id: $root-scope.user._id}
                    })
                    .then(
                      (data) !->
                        if (data.status == 200) 
                          updateUser!
                    )
                else
                  alert("请选择文件");

              #图片上传
              @imgSubmit = !->
                if @img
                  Upload
                    .upload({
                      url: "api/users/uploadImage"
                      data: {file: @img, username: $root-scope.user.name, user-id: $root-scope.user._id}
                    })
                    .then(
                        (data) !->
                          if (data.status == 200) 
                            updateUser!
                        (resp) !->
                          console.log "error" + resp.status
                        (evt) !->
                          progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                          console.log progressPercentage
                    )
                else
                  alert("请选择图像")

              #更新用户信息
              updateUser = !->
                $http.get "/api/users/getAllFiles", {params: {"id": $root-scope.user._id}}
                      .then(
                        (data) !->
                          $root-scope.user = data.data
                      )
                      
              @name = "cjg"
        url: "/upload"
      })