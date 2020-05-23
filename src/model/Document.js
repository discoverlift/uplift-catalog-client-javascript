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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/HighlightResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HighlightResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UpliftSearchClientJavascript) {
      root.UpliftSearchClientJavascript = {};
    }
    root.UpliftSearchClientJavascript.Document = factory(root.UpliftSearchClientJavascript.ApiClient, root.UpliftSearchClientJavascript.HighlightResponse);
  }
}(this, function(ApiClient, HighlightResponse) {
  'use strict';

  /**
   * The Document model module.
   * @module model/Document
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>Document</code>.
   * @alias module:model/Document
   * @class
   * @param id {String} 
   */
  var exports = function(id) {
    this.id = id;
  };

  /**
   * Constructs a <code>Document</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Document} obj Optional instance to populate.
   * @return {module:model/Document} The populated <code>Document</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('score'))
        obj.score = ApiClient.convertToType(data['score'], 'Number');
      if (data.hasOwnProperty('highlights'))
        obj.highlights = ApiClient.convertToType(data['highlights'], [HighlightResponse]);
      if (data.hasOwnProperty('attributes'))
        obj.attributes = ApiClient.convertToType(data['attributes'], Object);
      if (data.hasOwnProperty('rankingExplanation'))
        obj.rankingExplanation = ApiClient.convertToType(data['rankingExplanation'], Object);
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} score
   */
  exports.prototype.score = undefined;

  /**
   * @member {Array.<module:model/HighlightResponse>} highlights
   */
  exports.prototype.highlights = undefined;

  /**
   * @member {Object} attributes
   */
  exports.prototype.attributes = undefined;

  /**
   * @member {Object} rankingExplanation
   */
  exports.prototype.rankingExplanation = undefined;

  return exports;

}));