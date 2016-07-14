(function(){
  'use strict';
  var nav;
  nav = function($scope, $mdDialog, $state, $translate){
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
      $translate.use("cn");
    };
    $scope.switchEn = function(){
      $translate.use("en");
    };
  };
  angular.module("app", ["ui.router", "ngMaterial", 'ngMessages', 'ngResource', 'ngCookies', "pascalprecht.translate"]).controller("nav", nav).config([
    '$translateProvider', function($translateProvider){
      $translateProvider.useStaticFilesLoader({
        prefix: "./data/locale-",
        suffix: ".json"
      });
      $translateProvider.useCookieStorage();
      $translateProvider.preferredLanguage("cn");
    }
  ]);
}).call(this);
