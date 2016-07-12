(function(){
  angular.module("app").config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state("passage.list-passage", {
      url: '/list',
      resolve: {
        result: function($http, $rootScope, $resource){
          var Post;
          console.log("coming");
          Post = $resource("./post/get/:id", {
            id: "@id"
          });
          return Post.get({
            id: $rootScope.user.email
          }, function(data){
            console.log(data);
            return data.data;
          });
        }
      },
      views: {
        "main@": {
          templateUrl: "passage/passage-list/passage-list.html",
          controller: function($scope, $resource, $rootScope, $state, result){
            $scope.passages = result.data;
            console.log(result);
            console.log($scope.passages);
            $scope.show = function(id){
              $rootScope.passageId = id;
              return $state.go("passage.show-passage");
            };
          }
        }
      }
    });
  });
}).call(this);
