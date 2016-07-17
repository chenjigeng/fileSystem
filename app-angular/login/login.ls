LoginCtrl = ($scope, $mdDialog, $mdMedia, $rootScope) !->
  $scope.showLogin = (ev) !->
    $mdDialog.show({
      controller: loginCtrl,
      templateUrl: "login/login.html",
      parent: angular.element(document.body)
      targetEvent: ev
      clickOutsideToClose: true
    })
  $scope.Logout = !->
    $rootScope.user = {};
    $rootScope.login = false

loginCtrl = ($rootScope, $scope, $mdDialog,$http) !->
  $scope.submit = !->
    user = {password: $scope.password, email: $scope.email};
    $http.post "./users/login", user
      .then(
        (s)->
          console.log s
          console.log "successfully"
          $rootScope.login = true
          $rootScope.user = s.data[0];
          console.log $rootScope.user
          $mdDialog.hide()
        !->
          console.log "fail"
      )
angular.module "app"
  .controller "LoginCtrl", LoginCtrl