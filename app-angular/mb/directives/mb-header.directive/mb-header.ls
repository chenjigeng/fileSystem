angular.module "mb"
  .directive 'mbheader', ->
    return {
      restrict: "E"
      templateUrl: "mb/directives/mb-header.directive/mb-header.html"
      replace: true,
      controller: ($scope, $element, $attrs, $transclude, $log, $state) !->

        # 实现点击返回功能
        $scope.routeback = !->
          $state.go "mb.home"

    }
