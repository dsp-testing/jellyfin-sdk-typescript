/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ItemFields } from '../models';
// @ts-ignore
import { RecommendationDto } from '../models';
/**
 * MoviesApi - axios parameter creator
 * @export
 */
export const MoviesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets movie recommendations.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. The fields to return.
         * @param {number} [categoryLimit] The max number of categories to return.
         * @param {number} [itemLimit] The max number of items to return per category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMovieRecommendations: async (userId?: string, parentId?: string, fields?: Array<ItemFields>, categoryLimit?: number, itemLimit?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Movies/Recommendations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (parentId !== undefined) {
                localVarQueryParameter['parentId'] = parentId;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (categoryLimit !== undefined) {
                localVarQueryParameter['categoryLimit'] = categoryLimit;
            }

            if (itemLimit !== undefined) {
                localVarQueryParameter['itemLimit'] = itemLimit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MoviesApi - functional programming interface
 * @export
 */
export const MoviesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MoviesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets movie recommendations.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. The fields to return.
         * @param {number} [categoryLimit] The max number of categories to return.
         * @param {number} [itemLimit] The max number of items to return per category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMovieRecommendations(userId?: string, parentId?: string, fields?: Array<ItemFields>, categoryLimit?: number, itemLimit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RecommendationDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMovieRecommendations(userId, parentId, fields, categoryLimit, itemLimit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MoviesApi - factory interface
 * @export
 */
export const MoviesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MoviesApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets movie recommendations.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. The fields to return.
         * @param {number} [categoryLimit] The max number of categories to return.
         * @param {number} [itemLimit] The max number of items to return per category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMovieRecommendations(userId?: string, parentId?: string, fields?: Array<ItemFields>, categoryLimit?: number, itemLimit?: number, options?: any): AxiosPromise<Array<RecommendationDto>> {
            return localVarFp.getMovieRecommendations(userId, parentId, fields, categoryLimit, itemLimit, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getMovieRecommendations operation in MoviesApi.
 * @export
 * @interface MoviesApiGetMovieRecommendationsRequest
 */
export interface MoviesApiGetMovieRecommendationsRequest {
    /**
     * Optional. Filter by user id, and attach user data.
     * @type {string}
     * @memberof MoviesApiGetMovieRecommendations
     */
    readonly userId?: string

    /**
     * Specify this to localize the search to a specific item or folder. Omit to use the root.
     * @type {string}
     * @memberof MoviesApiGetMovieRecommendations
     */
    readonly parentId?: string

    /**
     * Optional. The fields to return.
     * @type {Array<ItemFields>}
     * @memberof MoviesApiGetMovieRecommendations
     */
    readonly fields?: Array<ItemFields>

    /**
     * The max number of categories to return.
     * @type {number}
     * @memberof MoviesApiGetMovieRecommendations
     */
    readonly categoryLimit?: number

    /**
     * The max number of items to return per category.
     * @type {number}
     * @memberof MoviesApiGetMovieRecommendations
     */
    readonly itemLimit?: number
}

/**
 * MoviesApi - object-oriented interface
 * @export
 * @class MoviesApi
 * @extends {BaseAPI}
 */
export class MoviesApi extends BaseAPI {
    /**
     * 
     * @summary Gets movie recommendations.
     * @param {MoviesApiGetMovieRecommendationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MoviesApi
     */
    public getMovieRecommendations(requestParameters: MoviesApiGetMovieRecommendationsRequest = {}, options?: any) {
        return MoviesApiFp(this.configuration).getMovieRecommendations(requestParameters.userId, requestParameters.parentId, requestParameters.fields, requestParameters.categoryLimit, requestParameters.itemLimit, options).then((request) => request(this.axios, this.basePath));
    }
}
