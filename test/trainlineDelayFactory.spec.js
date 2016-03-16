describe('Delay Factory', function() {
  beforeEach(module('TrainlineApp'));

  describe('#calculate', function() {

    var sample_data = {
      "callingPoints": [{
        "scheduled": "15:25",
        "expected": "15:35"
      }]
    };

    var timeDiff;

    beforeEach(inject(function(timeDifference) {
      timeDiff = timeDifference;
    }));

    it('can give the time difference in minutes', function() {
      var output = timeDiff.calculate(sample_data);
      expect(output.callingPoints[0].delay).toEqual(10);
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
