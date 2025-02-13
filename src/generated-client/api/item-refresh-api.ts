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
import { MetadataRefreshMode } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
/**
 * ItemRefreshApi - axios parameter creator
 * @export
 */
export const ItemRefreshApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Refreshes metadata for an item.
         * @param {string} itemId Item id.
         * @param {MetadataRefreshMode} [metadataRefreshMode] (Optional) Specifies the metadata refresh mode.
         * @param {MetadataRefreshMode} [imageRefreshMode] (Optional) Specifies the image refresh mode.
         * @param {boolean} [replaceAllMetadata] (Optional) Determines if metadata should be replaced. Only applicable if mode is FullRefresh.
         * @param {boolean} [replaceAllImages] (Optional) Determines if images should be replaced. Only applicable if mode is FullRefresh.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        post: async (itemId: string, metadataRefreshMode?: MetadataRefreshMode, imageRefreshMode?: MetadataRefreshMode, replaceAllMetadata?: boolean, replaceAllImages?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('post', 'itemId', itemId)
            const localVarPath = `/Items/{itemId}/Refresh`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)

            if (metadataRefreshMode !== undefined) {
                localVarQueryParameter['metadataRefreshMode'] = metadataRefreshMode;
            }

            if (imageRefreshMode !== undefined) {
                localVarQueryParameter['imageRefreshMode'] = imageRefreshMode;
            }

            if (replaceAllMetadata !== undefined) {
                localVarQueryParameter['replaceAllMetadata'] = replaceAllMetadata;
            }

            if (replaceAllImages !== undefined) {
                localVarQueryParameter['replaceAllImages'] = replaceAllImages;
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
 * ItemRefreshApi - functional programming interface
 * @export
 */
export const ItemRefreshApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ItemRefreshApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Refreshes metadata for an item.
         * @param {string} itemId Item id.
         * @param {MetadataRefreshMode} [metadataRefreshMode] (Optional) Specifies the metadata refresh mode.
         * @param {MetadataRefreshMode} [imageRefreshMode] (Optional) Specifies the image refresh mode.
         * @param {boolean} [replaceAllMetadata] (Optional) Determines if metadata should be replaced. Only applicable if mode is FullRefresh.
         * @param {boolean} [replaceAllImages] (Optional) Determines if images should be replaced. Only applicable if mode is FullRefresh.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async post(itemId: string, metadataRefreshMode?: MetadataRefreshMode, imageRefreshMode?: MetadataRefreshMode, replaceAllMetadata?: boolean, replaceAllImages?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.post(itemId, metadataRefreshMode, imageRefreshMode, replaceAllMetadata, replaceAllImages, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ItemRefreshApi - factory interface
 * @export
 */
export const ItemRefreshApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ItemRefreshApiFp(configuration)
    return {
        /**
         * 
         * @summary Refreshes metadata for an item.
         * @param {string} itemId Item id.
         * @param {MetadataRefreshMode} [metadataRefreshMode] (Optional) Specifies the metadata refresh mode.
         * @param {MetadataRefreshMode} [imageRefreshMode] (Optional) Specifies the image refresh mode.
         * @param {boolean} [replaceAllMetadata] (Optional) Determines if metadata should be replaced. Only applicable if mode is FullRefresh.
         * @param {boolean} [replaceAllImages] (Optional) Determines if images should be replaced. Only applicable if mode is FullRefresh.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        post(itemId: string, metadataRefreshMode?: MetadataRefreshMode, imageRefreshMode?: MetadataRefreshMode, replaceAllMetadata?: boolean, replaceAllImages?: boolean, options?: any): AxiosPromise<void> {
            return localVarFp.post(itemId, metadataRefreshMode, imageRefreshMode, replaceAllMetadata, replaceAllImages, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for post operation in ItemRefreshApi.
 * @export
 * @interface ItemRefreshApiPostRequest
 */
export interface ItemRefreshApiPostRequest {
    /**
     * Item id.
     * @type {string}
     * @memberof ItemRefreshApiPost
     */
    readonly itemId: string

    /**
     * (Optional) Specifies the metadata refresh mode.
     * @type {MetadataRefreshMode}
     * @memberof ItemRefreshApiPost
     */
    readonly metadataRefreshMode?: MetadataRefreshMode

    /**
     * (Optional) Specifies the image refresh mode.
     * @type {MetadataRefreshMode}
     * @memberof ItemRefreshApiPost
     */
    readonly imageRefreshMode?: MetadataRefreshMode

    /**
     * (Optional) Determines if metadata should be replaced. Only applicable if mode is FullRefresh.
     * @type {boolean}
     * @memberof ItemRefreshApiPost
     */
    readonly replaceAllMetadata?: boolean

    /**
     * (Optional) Determines if images should be replaced. Only applicable if mode is FullRefresh.
     * @type {boolean}
     * @memberof ItemRefreshApiPost
     */
    readonly replaceAllImages?: boolean
}

/**
 * ItemRefreshApi - object-oriented interface
 * @export
 * @class ItemRefreshApi
 * @extends {BaseAPI}
 */
export class ItemRefreshApi extends BaseAPI {
    /**
     * 
     * @summary Refreshes metadata for an item.
     * @param {ItemRefreshApiPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemRefreshApi
     */
    public post(requestParameters: ItemRefreshApiPostRequest, options?: any) {
        return ItemRefreshApiFp(this.configuration).post(requestParameters.itemId, requestParameters.metadataRefreshMode, requestParameters.imageRefreshMode, requestParameters.replaceAllMetadata, requestParameters.replaceAllImages, options).then((request) => request(this.axios, this.basePath));
    }
}
