(function(){
  angular.module("app").config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state("passage.show-passage", {
      url: '/show',
      views: {
        "main@": {
          templateUrl: "passage/show-passage/show-passage.html",
          controller: function($scope, $resource, $rootScope, $state, result){
            $scope.passage = result.data.data[0];
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
