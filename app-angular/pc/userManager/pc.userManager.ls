angular.module("pc")
  .config ($state-provider, $url-router-provider) !->
    editController = ($scope, $mdDialog)->
      $scope.save = !->
        console.log "保存成功"
        $mdDialog.hide!
    $state-provider
      .state("pc.home.userManager", {
        views:
          "content":
            templateUrl: 'pc/userManager/pc.userManager.html'
            controller-as: "vm"
            controller: (data, $mdDialog)->
              @users = data.users
              @editUser = (ev)->
                console.log "编辑"
                $mdDialog.show {
                  controller: editController,
                  templateUrl: 'pc/userManager/pc.editUser.html',
                  parent: angular.element document.body,
                  targetEvent: ev,
                  clickOutsideToClose: true
                }

              @deleteUser = (ev)->
                console.log "删除"

              console.log @.ss

        resolve:
          data: (api-resolver) ->
            api-resolver
              .resolve "users@get"
              .then( (data) ->
               return data)
        url: "/userManager"
      })