'use strict'

nav = ($scope, $mdDialog, $state, $translate, $rootScope, $cookie-store) !->
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
    $translate.use("zh-cmn-Hans")
  $scope.switchEn = !->
    $translate.use("en")
  $scope.switchCn1 = !->
    $translate.use("zh-cmn-Hant")
  $scope.Logout = !->
    $rootScope.user = {};
    $rootScope.login = false
    $cookie-store.remove("email")
    $state.go("home")
    console.log("logout")
angular.module "app", ["ui.router", "ngMaterial","textAngular", 'infinite-scroll','ngMessages', 'ngFileUpload','ngResource','ngCookies',"pascalprecht.translate", 'angularMoment']
  .controller "nav", nav
  .config(
    * '$translateProvider'
      '$cookiesProvider'
      ($translate-provider, $cookies-provider) !->
        $translate-provider.use-static-files-loader(
          prefix:"./data/"
          suffix: ".json"
        )
        $translate-provider.use-cookie-storage()
        $translate-provider
          .preferredLanguage("zh-cmn-Hans"))
  .run(
    * "$rootScope"
      "$state"
      "$cookies"
      "$http"
      ($root-scope, $state, $cookies, $http)!->
        if $cookies.get("email") && $cookies.get("email") != null
          console.log("enter email")
          $root-scope.login = true;
          url = "/users/" + $cookies.get("email")
          $http.get url
            .then(
              (data) !->
                console.log data
                $root-scope.user = data.data.user[0]
                console.log $root-scope.user
              (err) !->
                console.log err
            )
        $root-scope.$on("$stateChangeStart", (evt, next) !->
            if next.authenticate && !$root-scope.login
              evt.preventDefault()
              $state.go("home"))
      )


