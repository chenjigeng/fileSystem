(function(){
  angular.module("app").config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state("user", {
      url: '/user',
      abstract: true
    }).state("user.profile", {
      url: '/profile',
      authenticate: true,
      views: {
        "main@": {
          templateUrl: "user/profile/profile.html",
          controller: function($scope, $resource, $rootScope, $state){
            $scope.user = $rootScope.user;
            $scope.imgSrc = "public/img/" + $scope.user.email + ".jpg";
            $scope.editProfile = function(){
              $state.go("user.edit");
            };
          }
        }
      }
    });
  });
}).call(this);
