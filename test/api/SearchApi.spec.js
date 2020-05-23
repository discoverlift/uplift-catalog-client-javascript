/*
 * Search API
 * This is the API for getting search results.
 *
 * OpenAPI spec version: 1.1.0
 * Contact: ajit.singh@discoverlift.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UpliftSearchClientJavascript);
  }
}(this, function(expect, UpliftSearchClientJavascript) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new UpliftSearchClientJavascript.SearchApi();
  });

  describe('(package)', function() {
    describe('SearchApi', function() {
      describe('searchCatalog', function() {
        it('should call searchCatalog successfully', function(done) {
          // TODO: uncomment, update parameter values for searchCatalog call and complete the assertions
          /*
          var catalogId = "catalogId_example";
          var domainId = "domainId_example";
          var searchRequest = new UpliftSearchClientJavascript.SearchRequest();
          searchRequest.searchParams = new UpliftSearchClientJavascript.SearchParams();
          searchRequest.searchParams.keyphrase = "";
          searchRequest.searchParams.attributesToRetrieve = [""];
          searchRequest.searchParams.language = new UpliftSearchClientJavascript.Language();
          searchRequest.searchParams.facets = new UpliftSearchClientJavascript.FacetParams();
          searchRequest.searchParams.facets.maxFacets = ;
          searchRequest.searchParams.facets.maxValuePerFacet = ;
          searchRequest.searchParams.facets.attributes = [""];
          searchRequest.searchParams.facets.sortFacetValuesBy = "alpha";
          searchRequest.searchParams.filters = new UpliftSearchClientJavascript.FilterParams();
          searchRequest.searchParams.highlightParams = new UpliftSearchClientJavascript.SearchHighlightParams();
          searchRequest.searchParams.highlightParams.attributeNames = [""];
          searchRequest.searchParams.highlightParams.preTag = "";
          searchRequest.searchParams.highlightParams.postTag = "";
          searchRequest.searchParams.paginationParams = new UpliftSearchClientJavascript.PaginationParams();
          searchRequest.searchParams.paginationParams.hitsPerPage = 0;
          searchRequest.searchParams.paginationParams.page = 0;
          searchRequest.searchParams.rankingParams = new UpliftSearchClientJavascript.RankingParams();
          searchRequest.searchParams.rankingParams.relevanceType = "relevance";
          searchRequest.searchParams.rankingParams.attributeName = "";
          searchRequest.searchParams.rankingParams.rankModifier = "asc";
          searchRequest.searchParams.personalizationParams = new UpliftSearchClientJavascript.PersonalizationParams();
          searchRequest.searchParams.personalizationParams.userToken = "";
          searchRequest.searchParams.personalizationParams.enablePersonalization = false;
          searchRequest.requestParams = new UpliftSearchClientJavascript.RequestParams();
          searchRequest.requestParams.returnParams = false;
          searchRequest.requestParams.returnRankingExplanation = false;

          instance.searchCatalog(catalogId, domainId, searchRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UpliftSearchClientJavascript.SearchResponse);
            expect(data.numResults).to.be.a('number');
            expect(data.numResults).to.be(0);
            expect(data.numPages).to.be.a('number');
            expect(data.numPages).to.be(0);
            {
              let dataCtr = data.results;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(UpliftSearchClientJavascript.Document);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("");
                expect(data.score).to.be.a('number');
                expect(data.score).to.be(0.0);
                {
                  let dataCtr = data.highlights;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(UpliftSearchClientJavascript.HighlightResponse);
                    expect(data.fieldName).to.be.a('string');
                    expect(data.fieldName).to.be("");
                    {
                      let dataCtr = data.highlightText;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('string');
                        expect(data).to.be("");
                      }
                    }
    
                          }
                }
                expect(data.attributes).to.be.a(Object);
                expect(data.attributes).to.be();
                expect(data.rankingExplanation).to.be.a(Object);
                expect(data.rankingExplanation).to.be();

                      }
            }
            expect(data.performance).to.be.a(UpliftSearchClientJavascript.QueryPerformance);
                  expect(data.performance.processingTime).to.be.a('number');
              expect(data.performance.processingTime).to.be(0);
              expect(data.performance.timeOut).to.be.a('boolean');
              expect(data.performance.timeOut).to.be(false);
            expect(data.facets).to.be.a(UpliftSearchClientJavascript.FacetResponse);
                  expect(data.facets.attributeName).to.be.a('string');
              expect(data.facets.attributeName).to.be("");
              expect(data.facets.numDistinctValues).to.be.a('number');
              expect(data.facets.numDistinctValues).to.be(0);
              {
                let dataCtr = data.facets.values;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(UpliftSearchClientJavascript.FacetResponseValues);
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.numResults).to.be.a('number');
                  expect(data.numResults).to.be(0);
  
                        }
              }
            expect(data.searchParams).to.be.a(UpliftSearchClientJavascript.SearchParams);
                  expect(data.searchParams.keyphrase).to.be.a('string');
              expect(data.searchParams.keyphrase).to.be("");
              {
                let dataCtr = data.searchParams.attributesToRetrieve;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
              expect(data.searchParams.language).to.be.a(UpliftSearchClientJavascript.Language);
                  expect(data.searchParams.facets).to.be.a(UpliftSearchClientJavascript.FacetParams);
                    expect(data.searchParams.facets.maxFacets).to.be.a('number');
                expect(data.searchParams.facets.maxFacets).to.be();
                expect(data.searchParams.facets.maxValuePerFacet).to.be.a('number');
                expect(data.searchParams.facets.maxValuePerFacet).to.be();
                {
                  let dataCtr = data.searchParams.facets.attributes;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.searchParams.facets.sortFacetValuesBy).to.be.a('string');
                expect(data.searchParams.facets.sortFacetValuesBy).to.be("alpha");
              expect(data.searchParams.filters).to.be.a(UpliftSearchClientJavascript.FilterParams);
                  expect(data.searchParams.highlightParams).to.be.a(UpliftSearchClientJavascript.SearchHighlightParams);
                    {
                  let dataCtr = data.searchParams.highlightParams.attributeNames;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.searchParams.highlightParams.preTag).to.be.a('string');
                expect(data.searchParams.highlightParams.preTag).to.be("");
                expect(data.searchParams.highlightParams.postTag).to.be.a('string');
                expect(data.searchParams.highlightParams.postTag).to.be("");
              expect(data.searchParams.paginationParams).to.be.a(UpliftSearchClientJavascript.PaginationParams);
                    expect(data.searchParams.paginationParams.hitsPerPage).to.be.a('number');
                expect(data.searchParams.paginationParams.hitsPerPage).to.be(0);
                expect(data.searchParams.paginationParams.page).to.be.a('number');
                expect(data.searchParams.paginationParams.page).to.be(0);
              expect(data.searchParams.rankingParams).to.be.a(UpliftSearchClientJavascript.RankingParams);
                    expect(data.searchParams.rankingParams.relevanceType).to.be.a('string');
                expect(data.searchParams.rankingParams.relevanceType).to.be("relevance");
                expect(data.searchParams.rankingParams.attributeName).to.be.a('string');
                expect(data.searchParams.rankingParams.attributeName).to.be("");
                expect(data.searchParams.rankingParams.rankModifier).to.be.a('string');
                expect(data.searchParams.rankingParams.rankModifier).to.be("asc");
              expect(data.searchParams.personalizationParams).to.be.a(UpliftSearchClientJavascript.PersonalizationParams);
                    expect(data.searchParams.personalizationParams.userToken).to.be.a('string');
                expect(data.searchParams.personalizationParams.userToken).to.be("");
                expect(data.searchParams.personalizationParams.enablePersonalization).to.be.a('boolean');
                expect(data.searchParams.personalizationParams.enablePersonalization).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
