/**
 * Catalog API
 * This is the API for retrieving items from your catalog.
 *
 * The version of the OpenAPI document: 1.2.2
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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UpliftCatalogClientJavascript) {
      root.UpliftCatalogClientJavascript = {};
    }
    root.UpliftCatalogClientJavascript.QueryPerformance = factory(root.UpliftCatalogClientJavascript.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The QueryPerformance model module.
   * @module model/QueryPerformance
   * @version 1.2.2
   */

  /**
   * Constructs a new <code>QueryPerformance</code>.
   * Data about the performance of the query
   * @alias module:model/QueryPerformance
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>QueryPerformance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QueryPerformance} obj Optional instance to populate.
   * @return {module:model/QueryPerformance} The populated <code>QueryPerformance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('processingTime')) {
        obj['processingTime'] = ApiClient.convertToType(data['processingTime'], 'Number');
      }
      if (data.hasOwnProperty('timeOut')) {
        obj['timeOut'] = ApiClient.convertToType(data['timeOut'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} processingTime
   */
  exports.prototype['processingTime'] = undefined;
  /**
   * @member {Boolean} timeOut
   */
  exports.prototype['timeOut'] = undefined;



  return exports;
}));


