/**
 * Catalog API
 * This is the API for retrieving items from your catalog.
 *
 * The version of the OpenAPI document: 1.2.2
 * Contact: ajit.singh@discoverlift.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
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
    instance = new UpliftCatalogClientJavascript.FetchApi();
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

  describe('FetchApi', function() {
    describe('fetchDocument', function() {
      it('should call fetchDocument successfully', function(done) {
        //uncomment below and update the code to test fetchDocument
        //instance.fetchDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1DomainDomainIdCatalogCatalogIdFetchOptions', function() {
      it('should call v1DomainDomainIdCatalogCatalogIdFetchOptions successfully', function(done) {
        //uncomment below and update the code to test v1DomainDomainIdCatalogCatalogIdFetchOptions
        //instance.v1DomainDomainIdCatalogCatalogIdFetchOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
