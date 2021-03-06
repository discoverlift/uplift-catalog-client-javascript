/**
 * Catalog API
 * This is the API for retrieving items from your catalog.
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: ajit.singh@discoverlift.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UpliftCatalogClientJavascript);
  }
}(this, function(expect, UpliftCatalogClientJavascript) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new UpliftCatalogClientJavascript.RecommendationContext();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RecommendationContext', function() {
    it('should create an instance of RecommendationContext', function() {
      // uncomment below and update the code to test RecommendationContext
      //var instance = new UpliftCatalogClientJavascript.RecommendationContext();
      //expect(instance).to.be.a(UpliftCatalogClientJavascript.RecommendationContext);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new UpliftCatalogClientJavascript.RecommendationContext();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new UpliftCatalogClientJavascript.RecommendationContext();
      //expect(instance).to.be();
    });

  });

}));
