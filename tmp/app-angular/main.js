(function(){
  'use strict';
  var nav;
  nav = function($scope, $mdDialog, $state, $translate, $rootScope, $cookieStore){
    $scope.openMenu = function($mdOpenMenu, ev){
      $mdOpenMenu(ev);
    };
    $scope.createPass = function(){
      $state.go("passage.create-passage");
    };
    $scope.Passages = function(){
      console.log("enter");
      $state.go("passage.list-passage");
    };
    $scope.openLanMenu = function($mdOpenMenu, ev){
      $mdOpenMenu(ev);
    };
    $scope.switchCn = function(){
      $translate.use("zh-cmn-Hans");
    };
    $scope.switchEn = function(){
      $translate.use("en");
    };
    $scope.switchCn1 = function(){
      $translate.use("zh-cmn-Hant");
    };
    $scope.Logout = function(){
      $rootScope.user = {};
      $rootScope.login = false;
      $cookieStore.remove("email");
      $state.go("home");
      console.log("logout");
    };
  };
  angular.module("app", ["ui.router", "ngMaterial", "textAngular", 'ngMessages', 'ngFileUpload', 'ngResource', 'ngCookies', "pascalprecht.translate", 'angularMoment']).controller("nav", nav).config([
    '$translateProvider', '$cookiesProvider', function($translateProvider, $cookiesProvider){
      $translateProvider.useStaticFilesLoader({
        prefix: "./data/",
        suffix: ".json"
      });
      $translateProvider.useCookieStorage();
      $translateProvider.preferredLanguage("zh-cmn-Hans");
    }
  ]).run([
    "$rootScope", "$state", "$cookies", "$http", function($rootScope, $state, $cookies, $http){
      var url;
      if ($cookies.get("email") && $cookies.get("email") !== null) {
        console.log("enter email");
        $rootScope.login = true;
        url = "/users/" + $cookies.get("email");
        $http.get(url).then(function(data){
          console.log(data);
          $rootScope.user = data.data.user[0];
          console.log($rootScope.user);
        }, function(err){
          console.log(err);
        });
      }
      $rootScope.$on("$stateChangeStart", function(evt, next){
        if (next.authenticate && !$rootScope.login) {
          evt.preventDefault();
          $state.go("home");
        }
      });
    }
  ]);
}).call(this);
