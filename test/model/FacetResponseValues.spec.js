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
    describe('FacetResponseValues', function() {
      beforeEach(function() {
        instance = new UpliftSearchClientJavascript.FacetResponseValues();
      });

      it('should create an instance of FacetResponseValues', function() {
        // TODO: update the code to test FacetResponseValues
        expect(instance).to.be.a(UpliftSearchClientJavascript.FacetResponseValues);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property numResults (base name: "numResults")', function() {
        // TODO: update the code to test the property numResults
        expect(instance).to.have.property('numResults');
        // expect(instance.numResults).to.be(expectedValueLiteral);
      });

    });
  });

}));
