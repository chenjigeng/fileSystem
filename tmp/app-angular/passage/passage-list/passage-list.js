(function(){
  angular.module("app").config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state("passage.list-passage", {
      url: '/list',
      authenticate: true,
      resolve: {
        result: function($http, $rootScope, $resource, $state, $timeout){
          var url;
          console.log("coming");
          if (!$rootScope.user || !$rootScope.user.email) {
            return $timeout(function(){
              var url;
              url = "./post/get/" + $rootScope.user.email;
              return $http.get(url, function(data){
                return data.data;
              });
            }, 250);
          } else {
            url = "./post/get/" + $rootScope.user.email;
            return $http.get(url, function(data){
              return data.data;
            });
          }
        }
      },
      views: {
        "main@": {
          templateUrl: "passage/passage-list/passage-list.html",
          controller: function($scope, $http, $rootScope, $state, result){
            $scope.passages = result.data.data;
            $scope.limit = 3;
            $scope.addMoreItems = function(){
              $scope.limit += 3;
            };
            console.log(result);
            console.log($scope.passages);
            $scope.show = function(id){
              $rootScope.passageId = id;
              console.log(id);
              $state.go("passage.show-passage");
            };
            $scope.remove = function(id){
              var url, i$, to$, i;
              url = "./post/remove/" + id;
              $http.get(url, function(data){
                console.log(data);
              });
              for (i$ = 0, to$ = $scope.passages.length; i$ <= to$; ++i$) {
                i = i$;
                if ($scope.passages[i]._id === id) {
                  $scope.passages.splice(i, 1);
                  return;
                }
              }
            };
            $scope.edit = function(id){
              $rootScope.editId = id;
              $state.go("passage.edit-passage");
            };
          }
        }
      }
    });
  });
}).call(this);
