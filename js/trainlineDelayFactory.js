trainlineInfo.factory('timeDifference', function() {
  return {
    calculate: function(trainData) {
      numberOfPoints = trainData.callingPoints.length;
      for (i = 0; i < numberOfPoints; ++i) {
        var point = trainData.callingPoints[i];
        point.delay = (this.toMinutes(point.expected) - this.toMinutes(point.scheduled)).toString() + " min late";
        point.delay === "0 min late" ? point.delay = "On time" : null;
      }
      return trainData
    },
    toMinutes: function(timeString) {
      splitTime = timeString.split(':');
      return (parseInt(splitTime[0]) * 60) + parseInt(splitTime[1]);
    }
  };
});
