describe('trainlineJsonFactory', function() {

  beforeEach(module('TrainlineApp'));

  var httpBackend;
  var jsonFetcher;

  beforeEach(inject(function($httpBackend, JsonFetcher) {
    jsonFetcher = JsonFetcher;
    httpBackend = $httpBackend;
    httpBackend
      .whenGET('ldb.json')
      .respond({
        callingpoints: "Calling Points"
      });
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('fetches the JSON data', function() {
    jsonFetcher.fetch()
      .then(function(response) {
        expect(response.data.callingpoints).toEqual("Calling Points");
      });
    httpBackend.flush();
  });

});
