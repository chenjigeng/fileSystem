'use strict'

nav = ($scope, $mdDialog, $state, $translate) !->
  $scope.openMenu = ($mdOpenMenu, ev) !->
    $mdOpenMenu(ev);
  $scope.createPass = !->
    $state.go("passage.create-passage");
  $scope.Passages = !->
    console.log("enter");
    $state.go("passage.list-passage")
  $scope.openLanMenu = ($mdOpenMenu, ev) !->
    $mdOpenMenu(ev);
  $scope.switchCn = !->
    $translate.use("cn")
  $scope.switchEn = !->
    $translate.use("en")
angular.module "app", ["ui.router", "ngMaterial", 'ngMessages', 'ngResource','ngCookies',"pascalprecht.translate", 'angularMoment']
  .controller "nav", nav
  .config(
    * '$translateProvider'
      ($translate-provider) !->
        $translate-provider.use-static-files-loader(
          prefix:"./data/locale-"
          suffix: ".json"
        )
        $translate-provider.use-cookie-storage()
        $translate-provider
          .preferredLanguage("cn"))
  .run(
    * "$rootScope"
      "$state"
      ($root-scope, $state)!->
        $root-scope.$on("$stateChangeStart", (evt, next) !->
            if next.authenticate && !$root-scope.login
              evt.preventDefault()
              $state.go("home"))
      )


