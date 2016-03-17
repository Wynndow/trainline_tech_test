trainlineInfo.factory('JsonFetcher', function($http, $resource) {

  return {
    fetch: function() {
      return $http.get('ldb.json');
    }
  };

});
