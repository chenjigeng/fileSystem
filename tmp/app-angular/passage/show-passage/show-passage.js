(function(){
  angular.module("app").config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state("passage.show-passage", {
      url: '/show',
      views: {
        "main@": {
          templateUrl: "passage/show-passage/show-passage.html",
          controller: function($scope, $resource, $rootScope, $state, result){
            while ($resource === undefined) {
              console.log("enter");
            }
            $scope.passage = result.data[0];
            console.log(result);
            console.log($scope.passage);
          },
          resolve: {
            result: function($http, $rootScope, $resource){
              var Post;
              console.log("coming");
              Post = $resource("./post/show/:id", {});
              return Post.get({
                id: $rootScope.passageId
              }, function(data){
                console.log(data);
                return data.data;
              });
            }
          }
        }
      }
    });
  });
}).call(this);
