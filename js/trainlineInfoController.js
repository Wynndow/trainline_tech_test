trainlineInfo.controller('trainlineInfoController', ['JsonFetcher', 'timeDifference', function(JsonFetcher, timeDifference) {

 var self = this;

 JsonFetcher.fetch().then(function(response) {
   trainData = response.data;
   self.departureBoardInfo = timeDifference.calculate(trainData);
 });

}]);
