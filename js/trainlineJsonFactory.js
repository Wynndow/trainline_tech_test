trainlineInfo.factory('JsonFetcher', function($http) {

  return {
    fetch: function() {
      return $http.get('ldb.json');
    }
  };

});
