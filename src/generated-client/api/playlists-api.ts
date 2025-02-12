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
import { BaseItemDtoQueryResult } from '../models';
// @ts-ignore
import { CreatePlaylistDto } from '../models';
// @ts-ignore
import { ImageType } from '../models';
// @ts-ignore
import { ItemFields } from '../models';
// @ts-ignore
import { PlaylistCreationResult } from '../models';
/**
 * PlaylistsApi - axios parameter creator
 * @export
 */
export const PlaylistsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Adds items to a playlist.
         * @param {string} playlistId The playlist id.
         * @param {Array<string>} [ids] Item id, comma delimited.
         * @param {string} [userId] The userId.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addToPlaylist: async (playlistId: string, ids?: Array<string>, userId?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'playlistId' is not null or undefined
            assertParamExists('addToPlaylist', 'playlistId', playlistId)
            const localVarPath = `/Playlists/{playlistId}/Items`
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)));
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

            if (ids) {
                localVarQueryParameter['ids'] = ids;
            }

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
         * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.  Query parameters are obsolete.
         * @summary Creates a new playlist.
         * @param {string} [name] The playlist name.
         * @param {Array<string>} [ids] The item ids.
         * @param {string} [userId] The user id.
         * @param {string} [mediaType] The media type.
         * @param {CreatePlaylistDto} [createPlaylistDto] The create playlist payload.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlaylist: async (name?: string, ids?: Array<string>, userId?: string, mediaType?: string, createPlaylistDto?: CreatePlaylistDto, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Playlists`;
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

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (ids) {
                localVarQueryParameter['ids'] = ids;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (mediaType !== undefined) {
                localVarQueryParameter['mediaType'] = mediaType;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createPlaylistDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets the original items of a playlist.
         * @param {string} playlistId The playlist id.
         * @param {string} userId User id.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {boolean} [enableImages] Optional. Include image information in output.
         * @param {boolean} [enableUserData] Optional. Include user data.
         * @param {number} [imageTypeLimit] Optional. The max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlaylistItems: async (playlistId: string, userId: string, startIndex?: number, limit?: number, fields?: Array<ItemFields>, enableImages?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'playlistId' is not null or undefined
            assertParamExists('getPlaylistItems', 'playlistId', playlistId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getPlaylistItems', 'userId', userId)
            const localVarPath = `/Playlists/{playlistId}/Items`
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)));
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

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (enableImages !== undefined) {
                localVarQueryParameter['enableImages'] = enableImages;
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
         * @summary Moves a playlist item.
         * @param {string} playlistId The playlist id.
         * @param {string} itemId The item id.
         * @param {number} newIndex The new index.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        moveItem: async (playlistId: string, itemId: string, newIndex: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'playlistId' is not null or undefined
            assertParamExists('moveItem', 'playlistId', playlistId)
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('moveItem', 'itemId', itemId)
            // verify required parameter 'newIndex' is not null or undefined
            assertParamExists('moveItem', 'newIndex', newIndex)
            const localVarPath = `/Playlists/{playlistId}/Items/{itemId}/Move/{newIndex}`
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)))
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)))
                .replace(`{${"newIndex"}}`, encodeURIComponent(String(newIndex)));
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
         * @summary Removes items from a playlist.
         * @param {string} playlistId The playlist id.
         * @param {Array<string>} [entryIds] The item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFromPlaylist: async (playlistId: string, entryIds?: Array<string>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'playlistId' is not null or undefined
            assertParamExists('removeFromPlaylist', 'playlistId', playlistId)
            const localVarPath = `/Playlists/{playlistId}/Items`
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)

            if (entryIds) {
                localVarQueryParameter['entryIds'] = entryIds;
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
 * PlaylistsApi - functional programming interface
 * @export
 */
export const PlaylistsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PlaylistsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Adds items to a playlist.
         * @param {string} playlistId The playlist id.
         * @param {Array<string>} [ids] Item id, comma delimited.
         * @param {string} [userId] The userId.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addToPlaylist(playlistId: string, ids?: Array<string>, userId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addToPlaylist(playlistId, ids, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.  Query parameters are obsolete.
         * @summary Creates a new playlist.
         * @param {string} [name] The playlist name.
         * @param {Array<string>} [ids] The item ids.
         * @param {string} [userId] The user id.
         * @param {string} [mediaType] The media type.
         * @param {CreatePlaylistDto} [createPlaylistDto] The create playlist payload.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPlaylist(name?: string, ids?: Array<string>, userId?: string, mediaType?: string, createPlaylistDto?: CreatePlaylistDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlaylistCreationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPlaylist(name, ids, userId, mediaType, createPlaylistDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets the original items of a playlist.
         * @param {string} playlistId The playlist id.
         * @param {string} userId User id.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {boolean} [enableImages] Optional. Include image information in output.
         * @param {boolean} [enableUserData] Optional. Include user data.
         * @param {number} [imageTypeLimit] Optional. The max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlaylistItems(playlistId: string, userId: string, startIndex?: number, limit?: number, fields?: Array<ItemFields>, enableImages?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPlaylistItems(playlistId, userId, startIndex, limit, fields, enableImages, enableUserData, imageTypeLimit, enableImageTypes, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Moves a playlist item.
         * @param {string} playlistId The playlist id.
         * @param {string} itemId The item id.
         * @param {number} newIndex The new index.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async moveItem(playlistId: string, itemId: string, newIndex: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.moveItem(playlistId, itemId, newIndex, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Removes items from a playlist.
         * @param {string} playlistId The playlist id.
         * @param {Array<string>} [entryIds] The item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeFromPlaylist(playlistId: string, entryIds?: Array<string>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeFromPlaylist(playlistId, entryIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PlaylistsApi - factory interface
 * @export
 */
export const PlaylistsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PlaylistsApiFp(configuration)
    return {
        /**
         * 
         * @summary Adds items to a playlist.
         * @param {string} playlistId The playlist id.
         * @param {Array<string>} [ids] Item id, comma delimited.
         * @param {string} [userId] The userId.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addToPlaylist(playlistId: string, ids?: Array<string>, userId?: string, options?: any): AxiosPromise<void> {
            return localVarFp.addToPlaylist(playlistId, ids, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.  Query parameters are obsolete.
         * @summary Creates a new playlist.
         * @param {string} [name] The playlist name.
         * @param {Array<string>} [ids] The item ids.
         * @param {string} [userId] The user id.
         * @param {string} [mediaType] The media type.
         * @param {CreatePlaylistDto} [createPlaylistDto] The create playlist payload.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlaylist(name?: string, ids?: Array<string>, userId?: string, mediaType?: string, createPlaylistDto?: CreatePlaylistDto, options?: any): AxiosPromise<PlaylistCreationResult> {
            return localVarFp.createPlaylist(name, ids, userId, mediaType, createPlaylistDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the original items of a playlist.
         * @param {string} playlistId The playlist id.
         * @param {string} userId User id.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {boolean} [enableImages] Optional. Include image information in output.
         * @param {boolean} [enableUserData] Optional. Include user data.
         * @param {number} [imageTypeLimit] Optional. The max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlaylistItems(playlistId: string, userId: string, startIndex?: number, limit?: number, fields?: Array<ItemFields>, enableImages?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, options?: any): AxiosPromise<BaseItemDtoQueryResult> {
            return localVarFp.getPlaylistItems(playlistId, userId, startIndex, limit, fields, enableImages, enableUserData, imageTypeLimit, enableImageTypes, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Moves a playlist item.
         * @param {string} playlistId The playlist id.
         * @param {string} itemId The item id.
         * @param {number} newIndex The new index.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        moveItem(playlistId: string, itemId: string, newIndex: number, options?: any): AxiosPromise<void> {
            return localVarFp.moveItem(playlistId, itemId, newIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Removes items from a playlist.
         * @param {string} playlistId The playlist id.
         * @param {Array<string>} [entryIds] The item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFromPlaylist(playlistId: string, entryIds?: Array<string>, options?: any): AxiosPromise<void> {
            return localVarFp.removeFromPlaylist(playlistId, entryIds, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addToPlaylist operation in PlaylistsApi.
 * @export
 * @interface PlaylistsApiAddToPlaylistRequest
 */
export interface PlaylistsApiAddToPlaylistRequest {
    /**
     * The playlist id.
     * @type {string}
     * @memberof PlaylistsApiAddToPlaylist
     */
    readonly playlistId: string

    /**
     * Item id, comma delimited.
     * @type {Array<string>}
     * @memberof PlaylistsApiAddToPlaylist
     */
    readonly ids?: Array<string>

    /**
     * The userId.
     * @type {string}
     * @memberof PlaylistsApiAddToPlaylist
     */
    readonly userId?: string
}

/**
 * Request parameters for createPlaylist operation in PlaylistsApi.
 * @export
 * @interface PlaylistsApiCreatePlaylistRequest
 */
export interface PlaylistsApiCreatePlaylistRequest {
    /**
     * The playlist name.
     * @type {string}
     * @memberof PlaylistsApiCreatePlaylist
     */
    readonly name?: string

    /**
     * The item ids.
     * @type {Array<string>}
     * @memberof PlaylistsApiCreatePlaylist
     */
    readonly ids?: Array<string>

    /**
     * The user id.
     * @type {string}
     * @memberof PlaylistsApiCreatePlaylist
     */
    readonly userId?: string

    /**
     * The media type.
     * @type {string}
     * @memberof PlaylistsApiCreatePlaylist
     */
    readonly mediaType?: string

    /**
     * The create playlist payload.
     * @type {CreatePlaylistDto}
     * @memberof PlaylistsApiCreatePlaylist
     */
    readonly createPlaylistDto?: CreatePlaylistDto
}

/**
 * Request parameters for getPlaylistItems operation in PlaylistsApi.
 * @export
 * @interface PlaylistsApiGetPlaylistItemsRequest
 */
export interface PlaylistsApiGetPlaylistItemsRequest {
    /**
     * The playlist id.
     * @type {string}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly playlistId: string

    /**
     * User id.
     * @type {string}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly userId: string

    /**
     * Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @type {number}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly startIndex?: number

    /**
     * Optional. The maximum number of records to return.
     * @type {number}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly limit?: number

    /**
     * Optional. Specify additional fields of information to return in the output.
     * @type {Array<ItemFields>}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly fields?: Array<ItemFields>

    /**
     * Optional. Include image information in output.
     * @type {boolean}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly enableImages?: boolean

    /**
     * Optional. Include user data.
     * @type {boolean}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly enableUserData?: boolean

    /**
     * Optional. The max number of images to return, per image type.
     * @type {number}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly imageTypeLimit?: number

    /**
     * Optional. The image types to include in the output.
     * @type {Array<ImageType>}
     * @memberof PlaylistsApiGetPlaylistItems
     */
    readonly enableImageTypes?: Array<ImageType>
}

/**
 * Request parameters for moveItem operation in PlaylistsApi.
 * @export
 * @interface PlaylistsApiMoveItemRequest
 */
export interface PlaylistsApiMoveItemRequest {
    /**
     * The playlist id.
     * @type {string}
     * @memberof PlaylistsApiMoveItem
     */
    readonly playlistId: string

    /**
     * The item id.
     * @type {string}
     * @memberof PlaylistsApiMoveItem
     */
    readonly itemId: string

    /**
     * The new index.
     * @type {number}
     * @memberof PlaylistsApiMoveItem
     */
    readonly newIndex: number
}

/**
 * Request parameters for removeFromPlaylist operation in PlaylistsApi.
 * @export
 * @interface PlaylistsApiRemoveFromPlaylistRequest
 */
export interface PlaylistsApiRemoveFromPlaylistRequest {
    /**
     * The playlist id.
     * @type {string}
     * @memberof PlaylistsApiRemoveFromPlaylist
     */
    readonly playlistId: string

    /**
     * The item ids, comma delimited.
     * @type {Array<string>}
     * @memberof PlaylistsApiRemoveFromPlaylist
     */
    readonly entryIds?: Array<string>
}

/**
 * PlaylistsApi - object-oriented interface
 * @export
 * @class PlaylistsApi
 * @extends {BaseAPI}
 */
export class PlaylistsApi extends BaseAPI {
    /**
     * 
     * @summary Adds items to a playlist.
     * @param {PlaylistsApiAddToPlaylistRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public addToPlaylist(requestParameters: PlaylistsApiAddToPlaylistRequest, options?: any) {
        return PlaylistsApiFp(this.configuration).addToPlaylist(requestParameters.playlistId, requestParameters.ids, requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.  Query parameters are obsolete.
     * @summary Creates a new playlist.
     * @param {PlaylistsApiCreatePlaylistRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public createPlaylist(requestParameters: PlaylistsApiCreatePlaylistRequest = {}, options?: any) {
        return PlaylistsApiFp(this.configuration).createPlaylist(requestParameters.name, requestParameters.ids, requestParameters.userId, requestParameters.mediaType, requestParameters.createPlaylistDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the original items of a playlist.
     * @param {PlaylistsApiGetPlaylistItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public getPlaylistItems(requestParameters: PlaylistsApiGetPlaylistItemsRequest, options?: any) {
        return PlaylistsApiFp(this.configuration).getPlaylistItems(requestParameters.playlistId, requestParameters.userId, requestParameters.startIndex, requestParameters.limit, requestParameters.fields, requestParameters.enableImages, requestParameters.enableUserData, requestParameters.imageTypeLimit, requestParameters.enableImageTypes, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Moves a playlist item.
     * @param {PlaylistsApiMoveItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public moveItem(requestParameters: PlaylistsApiMoveItemRequest, options?: any) {
        return PlaylistsApiFp(this.configuration).moveItem(requestParameters.playlistId, requestParameters.itemId, requestParameters.newIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Removes items from a playlist.
     * @param {PlaylistsApiRemoveFromPlaylistRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public removeFromPlaylist(requestParameters: PlaylistsApiRemoveFromPlaylistRequest, options?: any) {
        return PlaylistsApiFp(this.configuration).removeFromPlaylist(requestParameters.playlistId, requestParameters.entryIds, options).then((request) => request(this.axios, this.basePath));
    }
}
