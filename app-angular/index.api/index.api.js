(function() {
  'use strict';

  angular
    .module('app')
    .factory('api', api)
    .factory('apiResolver', apiResolver);

  /** @ngInject */
  function api($resource) {
    var _api = {};
    _api.baseUrl = './data/';

    // 注册api
    _api.files = $resource(_api.baseUrl + "files.json");

    _api.folds = $resource(_api.baseUrl + "folders.json");

    _api.users = $resource(_api.baseUrl + "users.json");
    return _api;
  }

  /** @ngInject */
  function apiResolver($q, api) {
    return { resolve: resolve};

    function resolve(action, parameters) {
      var actionParts = action.split('@'),
          resource    = actionParts[0],
          method      = actionParts[1],
          params      = parameters || {};

      if (!resource || !method) {
        return false;
      }

      var deferred = $q.defer();
      // to be better: check resource
      api[resource][method](params,
        function(data) { deferred.resolve(data); },
        function(err)  { deferred.reject(err); }
      );

      return deferred.promise;
    }
  }
})();
