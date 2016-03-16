describe('trainlineJsonFactory', function() {

  beforeEach(module('TrainlineApp'));

  var httpBackend;
  var jsonFetcher;

  beforeEach(inject(function($httpBackend, JsonFetcher) {
    jsonFetcher = JsonFetcher;
    httpBackend = $httpBackend;
    httpBackend
      .expectGET('ldb.json')
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
      .then(function(responce) {
        expect(responce.data.callingpoints).toEqual("Calling Points");
      });
    httpBackend.flush();
  });

});
