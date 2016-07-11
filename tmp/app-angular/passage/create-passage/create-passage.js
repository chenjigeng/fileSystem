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
          controller: function($scope){}
        }
      }
    });
  });
}).call(this);
