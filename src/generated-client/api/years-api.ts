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
import { BaseItemDto } from '../models';
// @ts-ignore
import { BaseItemDtoQueryResult } from '../models';
// @ts-ignore
import { ImageType } from '../models';
// @ts-ignore
import { ItemFields } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
// @ts-ignore
import { SortOrder } from '../models';
/**
 * YearsApi - axios parameter creator
 * @export
 */
export const YearsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets a year.
         * @param {number} year The year.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getYear: async (year: number, userId?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'year' is not null or undefined
            assertParamExists('getYear', 'year', year)
            const localVarPath = `/Years/{year}`
                .replace(`{${"year"}}`, encodeURIComponent(String(year)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get years.
         * @param {number} [startIndex] Skips over a given number of items within the results. Use for paging.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {Array<SortOrder>} [sortOrder] Sort Order - Ascending,Descending.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<string>} [excludeItemTypes] Optional. If specified, results will be excluded based on item type. This allows multiple, comma delimited.
         * @param {Array<string>} [includeItemTypes] Optional. If specified, results will be included based on item type. This allows multiple, comma delimited.
         * @param {Array<string>} [mediaTypes] Optional. Filter by MediaType. Allows multiple, comma delimited.
         * @param {Array<string>} [sortBy] Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
         * @param {boolean} [enableUserData] Optional. Include user data.
         * @param {number} [imageTypeLimit] Optional. The max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User Id.
         * @param {boolean} [recursive] Search recursively.
         * @param {boolean} [enableImages] Optional. Include image information in output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getYears: async (startIndex?: number, limit?: number, sortOrder?: Array<SortOrder>, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<string>, includeItemTypes?: Array<string>, mediaTypes?: Array<string>, sortBy?: Array<string>, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, recursive?: boolean, enableImages?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Years`;
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

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (sortOrder) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (parentId !== undefined) {
                localVarQueryParameter['parentId'] = parentId;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (excludeItemTypes) {
                localVarQueryParameter['excludeItemTypes'] = excludeItemTypes;
            }

            if (includeItemTypes) {
                localVarQueryParameter['includeItemTypes'] = includeItemTypes;
            }

            if (mediaTypes) {
                localVarQueryParameter['mediaTypes'] = mediaTypes;
            }

            if (sortBy) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (enableUserData !== undefined) {
                localVarQueryParameter['enableUserData'] = enableUserData;
            }

            if (imageTypeLimit !== undefined) {
                localVarQueryParameter['imageTypeLimit'] = imageTypeLimit;
            }

            if (enableImageTypes) {
                localVarQueryParameter['enableImageTypes'] = enableImageTypes;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (recursive !== undefined) {
                localVarQueryParameter['recursive'] = recursive;
            }

            if (enableImages !== undefined) {
                localVarQueryParameter['enableImages'] = enableImages;
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
 * YearsApi - functional programming interface
 * @export
 */
export const YearsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = YearsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets a year.
         * @param {number} year The year.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getYear(year: number, userId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getYear(year, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get years.
         * @param {number} [startIndex] Skips over a given number of items within the results. Use for paging.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {Array<SortOrder>} [sortOrder] Sort Order - Ascending,Descending.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<string>} [excludeItemTypes] Optional. If specified, results will be excluded based on item type. This allows multiple, comma delimited.
         * @param {Array<string>} [includeItemTypes] Optional. If specified, results will be included based on item type. This allows multiple, comma delimited.
         * @param {Array<string>} [mediaTypes] Optional. Filter by MediaType. Allows multiple, comma delimited.
         * @param {Array<string>} [sortBy] Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
         * @param {boolean} [enableUserData] Optional. Include user data.
         * @param {number} [imageTypeLimit] Optional. The max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User Id.
         * @param {boolean} [recursive] Search recursively.
         * @param {boolean} [enableImages] Optional. Include image information in output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getYears(startIndex?: number, limit?: number, sortOrder?: Array<SortOrder>, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<string>, includeItemTypes?: Array<string>, mediaTypes?: Array<string>, sortBy?: Array<string>, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, recursive?: boolean, enableImages?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getYears(startIndex, limit, sortOrder, parentId, fields, excludeItemTypes, includeItemTypes, mediaTypes, sortBy, enableUserData, imageTypeLimit, enableImageTypes, userId, recursive, enableImages, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * YearsApi - factory interface
 * @export
 */
export const YearsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = YearsApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets a year.
         * @param {number} year The year.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getYear(year: number, userId?: string, options?: any): AxiosPromise<BaseItemDto> {
            return localVarFp.getYear(year, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get years.
         * @param {number} [startIndex] Skips over a given number of items within the results. Use for paging.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {Array<SortOrder>} [sortOrder] Sort Order - Ascending,Descending.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<string>} [excludeItemTypes] Optional. If specified, results will be excluded based on item type. This allows multiple, comma delimited.
         * @param {Array<string>} [includeItemTypes] Optional. If specified, results will be included based on item type. This allows multiple, comma delimited.
         * @param {Array<string>} [mediaTypes] Optional. Filter by MediaType. Allows multiple, comma delimited.
         * @param {Array<string>} [sortBy] Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
         * @param {boolean} [enableUserData] Optional. Include user data.
         * @param {number} [imageTypeLimit] Optional. The max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User Id.
         * @param {boolean} [recursive] Search recursively.
         * @param {boolean} [enableImages] Optional. Include image information in output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getYears(startIndex?: number, limit?: number, sortOrder?: Array<SortOrder>, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<string>, includeItemTypes?: Array<string>, mediaTypes?: Array<string>, sortBy?: Array<string>, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, recursive?: boolean, enableImages?: boolean, options?: any): AxiosPromise<BaseItemDtoQueryResult> {
            return localVarFp.getYears(startIndex, limit, sortOrder, parentId, fields, excludeItemTypes, includeItemTypes, mediaTypes, sortBy, enableUserData, imageTypeLimit, enableImageTypes, userId, recursive, enableImages, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getYear operation in YearsApi.
 * @export
 * @interface YearsApiGetYearRequest
 */
export interface YearsApiGetYearRequest {
    /**
     * The year.
     * @type {number}
     * @memberof YearsApiGetYear
     */
    readonly year: number

    /**
     * Optional. Filter by user id, and attach user data.
     * @type {string}
     * @memberof YearsApiGetYear
     */
    readonly userId?: string
}

/**
 * Request parameters for getYears operation in YearsApi.
 * @export
 * @interface YearsApiGetYearsRequest
 */
export interface YearsApiGetYearsRequest {
    /**
     * Skips over a given number of items within the results. Use for paging.
     * @type {number}
     * @memberof YearsApiGetYears
     */
    readonly startIndex?: number

    /**
     * Optional. The maximum number of records to return.
     * @type {number}
     * @memberof YearsApiGetYears
     */
    readonly limit?: number

    /**
     * Sort Order - Ascending,Descending.
     * @type {Array<SortOrder>}
     * @memberof YearsApiGetYears
     */
    readonly sortOrder?: Array<SortOrder>

    /**
     * Specify this to localize the search to a specific item or folder. Omit to use the root.
     * @type {string}
     * @memberof YearsApiGetYears
     */
    readonly parentId?: string

    /**
     * Optional. Specify additional fields of information to return in the output.
     * @type {Array<ItemFields>}
     * @memberof YearsApiGetYears
     */
    readonly fields?: Array<ItemFields>

    /**
     * Optional. If specified, results will be excluded based on item type. This allows multiple, comma delimited.
     * @type {Array<string>}
     * @memberof YearsApiGetYears
     */
    readonly excludeItemTypes?: Array<string>

    /**
     * Optional. If specified, results will be included based on item type. This allows multiple, comma delimited.
     * @type {Array<string>}
     * @memberof YearsApiGetYears
     */
    readonly includeItemTypes?: Array<string>

    /**
     * Optional. Filter by MediaType. Allows multiple, comma delimited.
     * @type {Array<string>}
     * @memberof YearsApiGetYears
     */
    readonly mediaTypes?: Array<string>

    /**
     * Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
     * @type {Array<string>}
     * @memberof YearsApiGetYears
     */
    readonly sortBy?: Array<string>

    /**
     * Optional. Include user data.
     * @type {boolean}
     * @memberof YearsApiGetYears
     */
    readonly enableUserData?: boolean

    /**
     * Optional. The max number of images to return, per image type.
     * @type {number}
     * @memberof YearsApiGetYears
     */
    readonly imageTypeLimit?: number

    /**
     * Optional. The image types to include in the output.
     * @type {Array<ImageType>}
     * @memberof YearsApiGetYears
     */
    readonly enableImageTypes?: Array<ImageType>

    /**
     * User Id.
     * @type {string}
     * @memberof YearsApiGetYears
     */
    readonly userId?: string

    /**
     * Search recursively.
     * @type {boolean}
     * @memberof YearsApiGetYears
     */
    readonly recursive?: boolean

    /**
     * Optional. Include image information in output.
     * @type {boolean}
     * @memberof YearsApiGetYears
     */
    readonly enableImages?: boolean
}

/**
 * YearsApi - object-oriented interface
 * @export
 * @class YearsApi
 * @extends {BaseAPI}
 */
export class YearsApi extends BaseAPI {
    /**
     * 
     * @summary Gets a year.
     * @param {YearsApiGetYearRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof YearsApi
     */
    public getYear(requestParameters: YearsApiGetYearRequest, options?: any) {
        return YearsApiFp(this.configuration).getYear(requestParameters.year, requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get years.
     * @param {YearsApiGetYearsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof YearsApi
     */
    public getYears(requestParameters: YearsApiGetYearsRequest = {}, options?: any) {
        return YearsApiFp(this.configuration).getYears(requestParameters.startIndex, requestParameters.limit, requestParameters.sortOrder, requestParameters.parentId, requestParameters.fields, requestParameters.excludeItemTypes, requestParameters.includeItemTypes, requestParameters.mediaTypes, requestParameters.sortBy, requestParameters.enableUserData, requestParameters.imageTypeLimit, requestParameters.enableImageTypes, requestParameters.userId, requestParameters.recursive, requestParameters.enableImages, options).then((request) => request(this.axios, this.basePath));
    }
}
