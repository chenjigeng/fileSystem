angular.module "app"
  .config ($state-provider, $url-router-provider) !->
    $state-provider
      .state("user.edit", {
        url: '/edit'
        authenticate: true
        views:
          "main@":
            templateUrl: "user/edit/edit.html"
            controller: ($scope, $resource, $rootScope, $state, $http, Upload) !->
              $scope.user = $rootScope.user
              $scope.edit = !->
                $http.post "/users/edit", $scope.user
                  .then(
                    (data)!->
                      console.log data
                      console.log "edit successfully"
                      if !$scope.file
                        $state.go("user.profile")
                    (err)!->
                      console.log err;
                  )
                if $scope.file
                  Upload.upload({
                    url: '/users/uploadFile',
                    data: {file: $scope.file, username: $scope.user.email}
                  }).then( 
                    (resp)!-> 
                      console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                      $state.go("user.profile")
                    (resp)!-> 
                      console.log('Error status: ' + resp.status);
                    (evt) !->
                      progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                      console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                    );                    
      })