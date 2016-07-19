(function(){
  angular.module("app").config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state("passage.show-passage", {
      url: '/show',
      views: {
        "main@": {
          templateUrl: "passage/show-passage/show-passage.html",
          controller: function($scope, $resource, $rootScope, $state, result, $http){
            $scope.passage = result.data.data[0];
            $scope.limit = 5;
            $scope.addMoreItems = function(){
              console.log($scope.limit);
              $scope.limit += 5;
            };
            $scope.submit = function(){
              var comment;
              if (!$rootScope.login) {
                alert("登录了才能评论");
                return;
              }
              comment = {
                body: $scope.content,
                author: $rootScope.user.name
              };
              console.log("comment", comment);
              $scope.passage.comments.push(comment);
              console.log($scope.passage);
              $scope.content = "";
              $http.post("./post/saveComment", $scope.passage).then(function(data){
                console.log(data);
                $state.reload();
              }, function(err){
                console.log(err);
              });
            };
            console.log(result.data);
            console.log($scope.passage);
          },
          resolve: {
            result: function($http, $rootScope, $resource){
              var url;
              console.log("coming");
              url = "./post/show/" + $rootScope.passageId;
              console.log(url);
              return $http.get(url, function(data){
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
