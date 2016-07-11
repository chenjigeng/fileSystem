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
  };
  angular.module("app", ["ui.router", "ngMaterial", 'ngMessages']).controller("nav", nav);
}).call(this);
