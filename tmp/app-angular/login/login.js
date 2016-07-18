(function(){
  var LoginCtrl, loginCtrl;
  LoginCtrl = function($scope, $mdDialog, $mdMedia, $rootScope, $cookies){
    $scope.showLogin = function(ev){
      $mdDialog.show({
        controller: loginCtrl,
        templateUrl: "login/login.html",
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      });
    };
    $scope.Logout = function(){
      $rootScope.user = {};
      $rootScope.login = false;
      $cookies.remove("email");
      $state.go("home");
      console.log("logout");
    };
  };
  loginCtrl = function($rootScope, $scope, $mdDialog, $http, $cookies){
    $scope.submit = function(){
      var user;
      user = {
        password: $scope.password,
        email: $scope.email
      };
      $http.post("./users/login", user).then(function(s){
        var date;
        console.log(s);
        console.log("successfully");
        $rootScope.login = true;
        $rootScope.user = s.data[0];
        console.log($rootScope.user);
        $mdDialog.hide();
        date = new Date();
        date.setDate(date.getDate() + 1);
        $cookies.put("email", s.data[0].email, {
          "expires": date
        });
      }, function(){
        console.log("fail");
      });
    };
  };
  angular.module("app").controller("LoginCtrl", LoginCtrl);
}).call(this);
