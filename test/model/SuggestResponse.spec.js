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

  describe('(package)', function() {
    describe('SuggestResponse', function() {
      beforeEach(function() {
        instance = new UpliftSearchClientJavascript.SuggestResponse();
      });

      it('should create an instance of SuggestResponse', function() {
        // TODO: update the code to test SuggestResponse
        expect(instance).to.be.a(UpliftSearchClientJavascript.SuggestResponse);
      });

      it('should have the property numResults (base name: "numResults")', function() {
        // TODO: update the code to test the property numResults
        expect(instance).to.have.property('numResults');
        // expect(instance.numResults).to.be(expectedValueLiteral);
      });

      it('should have the property numPages (base name: "numPages")', function() {
        // TODO: update the code to test the property numPages
        expect(instance).to.have.property('numPages');
        // expect(instance.numPages).to.be(expectedValueLiteral);
      });

      it('should have the property results (base name: "results")', function() {
        // TODO: update the code to test the property results
        expect(instance).to.have.property('results');
        // expect(instance.results).to.be(expectedValueLiteral);
      });

      it('should have the property performance (base name: "performance")', function() {
        // TODO: update the code to test the property performance
        expect(instance).to.have.property('performance');
        // expect(instance.performance).to.be(expectedValueLiteral);
      });

      it('should have the property suggestParams (base name: "suggestParams")', function() {
        // TODO: update the code to test the property suggestParams
        expect(instance).to.have.property('suggestParams');
        // expect(instance.suggestParams).to.be(expectedValueLiteral);
      });

    });
  });

}));
