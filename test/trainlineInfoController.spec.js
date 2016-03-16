describe('trainlineInfoController', function() {
  beforeEach(module('TrainlineApp'));

  describe('initialization', function() {

    var ctrl, fakeFetch, scope;

    beforeEach(function() {
      module(function($provide) {
        fakeFactory = jasmine.createSpyObj('fakeFactory', ['fetch']);
        $provide.factory('JsonFetcher', function() {
          return fakeFactory;
        });
      });
    });

    beforeEach(inject(function($q, $rootScope, $controller) {
      scope = $rootScope;
      fakeFactory.fetch.and.returnValue($q.when({
        data: "Fake data"
      }));
      ctrl = $controller('trainlineInfoController');
    }));

    it('fetches departure info from factory', function() {
      scope.$apply();
      expect(ctrl.departureBoardInfo).toEqual("Fake data");
    });

  });


});
