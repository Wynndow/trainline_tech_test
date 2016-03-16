describe('trainlineInfoController', function() {
  beforeEach(module('TrainlineApp'));

  describe('initialization', function() {

    var ctrl, fakeJsonFactory, fakeTimeFactory, scope;

    beforeEach(function() {
      module(function($provide) {
        fakeJsonFactory = jasmine.createSpyObj('fakeJsonFactory', ['fetch']);
        fakeTimeFactory = jasmine.createSpyObj('fakeTimeFactory', ['calculate']);
        $provide.factory('JsonFetcher', function() {
          return fakeJsonFactory;
        });
        $provide.factory('timeDifference', function() {
          return fakeTimeFactory;
        });
      });
    });

    beforeEach(inject(function($q, $rootScope, $controller) {
      scope = $rootScope;
      fakeJsonFactory.fetch.and.returnValue($q.when({
        data: "Fake Data"
      }));
      fakeTimeFactory.calculate.and.returnValue("Fake Data")
      ctrl = $controller('trainlineInfoController');
    }));

    it('fetches departure info from factorys', function() {
      scope.$apply();
      expect(ctrl.departureBoardInfo).toEqual("Fake Data");
    });

  });


});
