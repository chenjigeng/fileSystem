(function(){
  angular.module("app").config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state("passage", {
      url: '/passage',
      abstract: true
    }).state("passage.create-passage", {
      url: '/create',
      views: {
        "main@": {
          templateUrl: "passage/create-passage/create-passage.html",
          controller: function($scope, $http, $rootScope, $state){
            $scope.submit = function(){
              var post;
              post = {
                title: $scope.title,
                content: $scope.content,
                author: $rootScope.user.email
              };
              console.log(post);
              $http.post('./post/create', post).then(function(data){
                console.log(data);
                console.log("successfully");
                $state.go("home");
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
