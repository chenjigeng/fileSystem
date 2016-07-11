(function(){
  var LoginCtrl, loginCtrl;
  LoginCtrl = function($scope, $mdDialog, $mdMedia){
    $scope.showLogin = function(ev){
      $mdDialog.show({
        controller: loginCtrl,
        templateUrl: "login/login.html",
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      });
    };
  };
  loginCtrl = function($rootScope, $scope, $mdDialog, $http){
    $scope.submit = function(){
      var user;
      user = {
        password: $scope.password,
        email: $scope.email
      };
      $http.post("./users/login", user).then(function(s){
        console.log(s);
        console.log("successfully");
        $rootScope.login = true;
        $rootScope.user = s.data[0];
        console.log($rootScope.user);
        return $mdDialog.hide();
      }, function(){
        console.log("fail");
      });
    };
  };
  angular.module("app").controller("LoginCtrl", LoginCtrl);
}).call(this);
