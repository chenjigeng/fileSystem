(function(){
  angular.module("app").config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state("home", {
      url: "/home",
      templateUrl: "home/home.html",
      resolve: {
        result: function($http){
          return $http.get("/post", function(data){
            console.log(data);
            return data;
          });
        }
      },
      controller: function($scope, result){
        $scope.posts = result.data;
        console.log(result);
      }
    });
  });
}).call(this);
