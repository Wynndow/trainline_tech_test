describe('Delay Factory', function() {
  beforeEach(module('TrainlineApp'));

  describe('#calculate', function() {

    var lateData = {
      "callingPoints": [{
          "scheduled": "15:25",
          "expected": "15:35"
        },
        {
          "scheduled": "15:30",
          "expected": "15:35"
        }
      ]
    };

    var onTimeData = {
      "callingPoints": [{
        "scheduled": "15:25",
        "expected": "15:25"
      }]
    };


    var timeDiff;

    beforeEach(inject(function(timeDifference) {
      timeDiff = timeDifference;
    }));

    it('can give the time difference in minutes', function() {
      var output = timeDiff.calculate(lateData);
      expect(output.callingPoints[0].delay).toEqual('10 min late');
    });

    it('can give the time difference in minutes for multiple calling points', function() {
      var output = timeDiff.calculate(lateData);
      expect(output.callingPoints[1].delay).toEqual('5 min late');
    });

    it('returns an on time message if no delay', function() {
      var output = timeDiff.calculate(onTimeData);
      expect(output.callingPoints[0].delay).toEqual('On time');
    });

  });

  describe('#toMinutes', function() {

    var time = "15:25";

    beforeEach(inject(function(timeDifference) {
      timeDiff = timeDifference;
    }));

    it('can turn a time in string format into seconds', function() {
      outputTime = timeDiff.toMinutes(time);
      expect(outputTime).toEqual(925);
    });

  });

});
