LoginCtrl = ($scope, $mdDialog, $mdMedia, $rootScope, $cookies) !->
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
    $cookies.remove("email")
    $state.go("home")
    console.log("logout")


loginCtrl = ($rootScope, $scope, $mdDialog,$http, $cookies) !->
  $scope.submit = !->
    user = {password: $scope.password, email: $scope.email};
    $http.post "./users/login", user
      .then(
        (s)!->
          console.log s
          console.log "successfully"
          $rootScope.login = true
          $rootScope.user = s.data[0];
          console.log $rootScope.user
          $mdDialog.hide()
          date = new Date();
          date.setDate(date.getDate() + 1);
          $cookies.put("email", s.data[0].email, {"expires": date});
        !->
          console.log "fail"
      )
angular.module "app"
  .controller "LoginCtrl", LoginCtrl