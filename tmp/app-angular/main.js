(function(){
  'use strict';
  var test1;
  test1 = function($scope){
    $scope.name = "CJG";
  };
  angular.module("app", ["ui.router", "ngMaterial"]).controller("test", test1);
}).call(this);
