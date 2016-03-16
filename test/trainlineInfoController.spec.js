describe('trainlineInfoController', function() {
  beforeEach(module('TrainlineApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('trainlineInfoController');
  }));

  it('initializes with no journey info', function() {
    expect(ctrl.journeyInfo).toBeUndefined();
  });

});
