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


import ApiClient from "../ApiClient";
import FetchRequest from '../model/FetchRequest';
import FetchResponse from '../model/FetchResponse';

/**
* Fetch service.
* @module api/FetchApi
* @version 1.2.2
*/
export default class FetchApi {

    /**
    * Constructs a new FetchApi. 
    * @alias module:api/FetchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {String} domainId Domain Id
     * @param {String} catalogId Catalog Id
     * @param {Object} opts Optional parameters
     * @param {module:model/FetchRequest} opts.fetchRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FetchResponse} and HTTP response
     */
    fetchDocumentWithHttpInfo(domainId, catalogId, opts) {
      opts = opts || {};
      let postBody = opts['fetchRequest'];
      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling fetchDocument");
      }
      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling fetchDocument");
      }

      let pathParams = {
        'domainId': domainId,
        'catalogId': catalogId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = FetchResponse;
      return this.apiClient.callApi(
        '/v1/domain/{domainId}/catalog/{catalogId}/fetch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} domainId Domain Id
     * @param {String} catalogId Catalog Id
     * @param {Object} opts Optional parameters
     * @param {module:model/FetchRequest} opts.fetchRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FetchResponse}
     */
    fetchDocument(domainId, catalogId, opts) {
      return this.fetchDocumentWithHttpInfo(domainId, catalogId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Options Call
     * @param {String} domainId Domain Id
     * @param {String} catalogId Catalog Id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    v1DomainDomainIdCatalogCatalogIdFetchOptionsWithHttpInfo(domainId, catalogId) {
      let postBody = null;
      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling v1DomainDomainIdCatalogCatalogIdFetchOptions");
      }
      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling v1DomainDomainIdCatalogCatalogIdFetchOptions");
      }

      let pathParams = {
        'domainId': domainId,
        'catalogId': catalogId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/domain/{domainId}/catalog/{catalogId}/fetch', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Options Call
     * @param {String} domainId Domain Id
     * @param {String} catalogId Catalog Id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    v1DomainDomainIdCatalogCatalogIdFetchOptions(domainId, catalogId) {
      return this.v1DomainDomainIdCatalogCatalogIdFetchOptionsWithHttpInfo(domainId, catalogId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
