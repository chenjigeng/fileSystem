(function(){
  angular.module("app").config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state("user.edit", {
      url: '/edit',
      authenticate: true,
      views: {
        "main@": {
          templateUrl: "user/edit/edit.html",
          controller: function($scope, $resource, $rootScope, $state, $http, Upload){
            $scope.user = $rootScope.user;
            $scope.edit = function(){
              var username;
              username = "";
              if ($scope.file) {
                username = $scope.user.email + Date.now().toString();
                $scope.user.url = "public/img/" + username + ".jpg";
              }
              $http.post("/users/edit", $scope.user).then(function(data){
                console.log(data);
                console.log("edit successfully");
                if (!$scope.file) {
                  $state.go("user.profile");
                }
              }, function(err){
                console.log(err);
              });
              if ($scope.file) {
                Upload.upload({
                  url: '/users/uploadFile',
                  data: {
                    file: $scope.file,
                    username: username
                  }
                }).then(function(resp){
                  console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                  $state.go("user.profile");
                }, function(resp){
                  console.log('Error status: ' + resp.status);
                }, function(evt){
                  var progressPercentage;
                  progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                  console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                });
              }
            };
          }
        }
      }
    });
  });
}).call(this);
