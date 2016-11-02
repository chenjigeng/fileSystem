angular.module("pc")
  .config ($state-provider, $url-router-provider) !->
    $state-provider
      .state("pc.home.catagory", {
        resolve:
          user: ($http, $root-scope) ->
            if $root-scope.user
              return $http.get "/api/users/getAllFiles", {params: {"id": $root-scope.user._id}}
                      .then(
                        (data) ->
                          return data.data
                      )
            else
              return null
        views:
          "content":
            templateUrl: 'pc/catagory/pc.catagory.html'
            controller-as: "vm"
            controller: ($http, Upload, $root-scope, user)!->
              $root-scope.user = user

              #更新用户信息
              updateUser = !->
                $http.get "/api/users/getAllFiles", {params: {"id": $root-scope.user._id}}
                      .then(
                        (data) !->
                          $root-scope.user = data.data
                      )

              @delete = (file) !->
                $root-scope.user.files.splice $root-scope.user.files.indexOf(file), 1
                $http.delete "api/users/files/" + file._id
                  .then(
                    (data) !->
                      console.log data
                  )
              @name = "cjg"
        url: "/catagory"
      })