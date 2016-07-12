(function(){
  'use strict';
  var nav;
  nav = function($scope, $mdDialog, $state){
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
  };
  angular.module("app", ["ui.router", "ngMaterial", 'ngMessages', 'ngResource']).controller("nav", nav);
}).call(this);
