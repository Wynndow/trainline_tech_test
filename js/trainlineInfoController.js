trainlineInfo.controller('trainlineInfoController', ['JsonFetcher', function(JsonFetcher) {

 var self = this;

 JsonFetcher.fetch().then(function(response) {
   self.departureBoardInfo = response.data;
 });

}]);
