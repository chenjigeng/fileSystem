(function(){
  angular.module("app").config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state("home", {
      views: {
        "main": {
          templateUrl: 'home/home.html',
          controller: function($scope, result){
            $scope.posts = result.data;
            console.log(result);
          }
        }
      },
      url: "/home",
      resolve: {
        result: function($http){
          return $http.get("/post", function(data){
            console.log(data);
            return data;
          });
        }
      }
    });
  });
}).call(this);
