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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PaginationParams', 'model/PersonalizationParams', 'model/RankingParams', 'model/RecommendationContext'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaginationParams'), require('./PersonalizationParams'), require('./RankingParams'), require('./RecommendationContext'));
  } else {
    // Browser globals (root is window)
    if (!root.UpliftCatalogClientJavascript) {
      root.UpliftCatalogClientJavascript = {};
    }
    root.UpliftCatalogClientJavascript.RecommendationParams = factory(root.UpliftCatalogClientJavascript.ApiClient, root.UpliftCatalogClientJavascript.PaginationParams, root.UpliftCatalogClientJavascript.PersonalizationParams, root.UpliftCatalogClientJavascript.RankingParams, root.UpliftCatalogClientJavascript.RecommendationContext);
  }
}(this, function(ApiClient, PaginationParams, PersonalizationParams, RankingParams, RecommendationContext) {
  'use strict';



  /**
   * The RecommendationParams model module.
   * @module model/RecommendationParams
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>RecommendationParams</code>.
   * @alias module:model/RecommendationParams
   * @class
   * @param recommendationType {module:model/RecommendationParams.RecommendationTypeEnum} 
   * @param attributesToRetrieve {Array.<String>} List of attributes to return for each document. By default, returns all attributes. Returning all attributes can increase response size and latency.
   * @param language {String} Language iso code
   * @param paginationParams {module:model/PaginationParams} 
   * @param rankingParams {module:model/RankingParams} 
   * @param personalizationParams {module:model/PersonalizationParams} 
   */
  var exports = function(recommendationType, attributesToRetrieve, language, paginationParams, rankingParams, personalizationParams) {
    var _this = this;

    _this['recommendationType'] = recommendationType;
    _this['attributesToRetrieve'] = attributesToRetrieve;
    _this['language'] = language;
    _this['paginationParams'] = paginationParams;
    _this['rankingParams'] = rankingParams;
    _this['personalizationParams'] = personalizationParams;
  };

  /**
   * Constructs a <code>RecommendationParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecommendationParams} obj Optional instance to populate.
   * @return {module:model/RecommendationParams} The populated <code>RecommendationParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('recommendationType')) {
        obj['recommendationType'] = ApiClient.convertToType(data['recommendationType'], 'String');
      }
      if (data.hasOwnProperty('context')) {
        obj['context'] = ApiClient.convertToType(data['context'], [RecommendationContext]);
      }
      if (data.hasOwnProperty('attributesToRetrieve')) {
        obj['attributesToRetrieve'] = ApiClient.convertToType(data['attributesToRetrieve'], ['String']);
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('filters')) {
        obj['filters'] = ApiClient.convertToType(data['filters'], 'String');
      }
      if (data.hasOwnProperty('paginationParams')) {
        obj['paginationParams'] = PaginationParams.constructFromObject(data['paginationParams']);
      }
      if (data.hasOwnProperty('rankingParams')) {
        obj['rankingParams'] = RankingParams.constructFromObject(data['rankingParams']);
      }
      if (data.hasOwnProperty('personalizationParams')) {
        obj['personalizationParams'] = PersonalizationParams.constructFromObject(data['personalizationParams']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RecommendationParams.RecommendationTypeEnum} recommendationType
   */
  exports.prototype['recommendationType'] = undefined;
  /**
   * Each recommendation request can have any number of context properties which help guide the recommendation algorithm.
   * @member {Array.<module:model/RecommendationContext>} context
   */
  exports.prototype['context'] = undefined;
  /**
   * List of attributes to return for each document. By default, returns all attributes. Returning all attributes can increase response size and latency.
   * @member {Array.<String>} attributesToRetrieve
   */
  exports.prototype['attributesToRetrieve'] = undefined;
  /**
   * Language iso code
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * Filters for search. Follow same language as Algolia (https://www.algolia.com/doc/api-reference/api-parameters/filters/). Implemented using pyparse (https://stackoverflow.com/questions/11133339/parsing-a-complex-logical-expression-in-pyparsing-in-a-binary-tree-fashion)
   * @member {String} filters
   */
  exports.prototype['filters'] = undefined;
  /**
   * @member {module:model/PaginationParams} paginationParams
   */
  exports.prototype['paginationParams'] = undefined;
  /**
   * @member {module:model/RankingParams} rankingParams
   */
  exports.prototype['rankingParams'] = undefined;
  /**
   * @member {module:model/PersonalizationParams} personalizationParams
   */
  exports.prototype['personalizationParams'] = undefined;


  /**
   * Allowed values for the <code>recommendationType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RecommendationTypeEnum = {
    /**
     * value: "related"
     * @const
     */
    "related": "related",
    /**
     * value: "popular"
     * @const
     */
    "popular": "popular"  };


  return exports;
}));


