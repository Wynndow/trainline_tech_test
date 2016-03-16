trainlineInfo.factory('timeDifference', function() {
  return {
    calculate: function(trainData) {
      numberOfPoints = trainData.callingPoints.length;
      for (i=0; i<numberOfPoints; ++i) {
        trainData.callingPoints[i].delay = this.toMinutes(trainData.callingPoints[i].expected) - this.toMinutes(trainData.callingPoints[i].scheduled);
      }
    },
    toMinutes: function(timeString) {
      splitTime = timeString.split(':');
      return (parseInt(splitTime[0]) * 60) + parseInt(splitTime[1]);
    }
  };
});
