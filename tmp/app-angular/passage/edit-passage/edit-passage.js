(function(){
  angular.module("app").config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state("passage.edit-passage", {
      url: '/edit',
      resolve: {
        result: function($http, $rootScope, $resource){
          var url;
          console.log("coming");
          url = "./post/show/" + $rootScope.editId;
          console.log(url);
          return $http.get(url, function(data){
            console.log(data);
            return data.data;
          });
        }
      },
      views: {
        "main@": {
          templateUrl: "passage/edit-passage/edit-passage.html",
          controller: function($scope, $http, $rootScope, $state, result){
            $scope.passage = result.data.data[0];
            console.log(result);
            console.log($scope.passage);
            $scope.submit = function(){
              $http.post("/post/save", $scope.passage).then(function(data){
                console.log(data);
                console.log("successfully");
                $state.go('home');
              }, function(data){
                console.log("fail");
              });
            };
          }
        }
      }
    });
  });
}).call(this);
