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
import { StartupConfigurationDto } from '../models';
// @ts-ignore
import { StartupRemoteAccessDto } from '../models';
// @ts-ignore
import { StartupUserDto } from '../models';
/**
 * StartupApi - axios parameter creator
 * @export
 */
export const StartupApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Completes the startup wizard.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completeWizard: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Startup/Complete`;
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
         * @summary Gets the first user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFirstUser: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Startup/User`;
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
         * @summary Gets the first user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFirstUser2: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Startup/FirstUser`;
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
         * @summary Gets the initial startup wizard configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStartupConfiguration: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Startup/Configuration`;
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
         * @summary Sets remote access and UPnP.
         * @param {StartupRemoteAccessDto} startupRemoteAccessDto The startup remote access dto.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setRemoteAccess: async (startupRemoteAccessDto: StartupRemoteAccessDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'startupRemoteAccessDto' is not null or undefined
            assertParamExists('setRemoteAccess', 'startupRemoteAccessDto', startupRemoteAccessDto)
            const localVarPath = `/Startup/RemoteAccess`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(startupRemoteAccessDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Sets the initial startup wizard configuration.
         * @param {StartupConfigurationDto} startupConfigurationDto The updated startup configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInitialConfiguration: async (startupConfigurationDto: StartupConfigurationDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'startupConfigurationDto' is not null or undefined
            assertParamExists('updateInitialConfiguration', 'startupConfigurationDto', startupConfigurationDto)
            const localVarPath = `/Startup/Configuration`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(startupConfigurationDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Sets the user name and password.
         * @param {StartupUserDto} [startupUserDto] The DTO containing username and password.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateStartupUser: async (startupUserDto?: StartupUserDto, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Startup/User`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(startupUserDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StartupApi - functional programming interface
 * @export
 */
export const StartupApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StartupApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Completes the startup wizard.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async completeWizard(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.completeWizard(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets the first user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFirstUser(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StartupUserDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFirstUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets the first user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFirstUser2(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StartupUserDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFirstUser2(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets the initial startup wizard configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStartupConfiguration(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StartupConfigurationDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStartupConfiguration(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sets remote access and UPnP.
         * @param {StartupRemoteAccessDto} startupRemoteAccessDto The startup remote access dto.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setRemoteAccess(startupRemoteAccessDto: StartupRemoteAccessDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setRemoteAccess(startupRemoteAccessDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sets the initial startup wizard configuration.
         * @param {StartupConfigurationDto} startupConfigurationDto The updated startup configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateInitialConfiguration(startupConfigurationDto: StartupConfigurationDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateInitialConfiguration(startupConfigurationDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sets the user name and password.
         * @param {StartupUserDto} [startupUserDto] The DTO containing username and password.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateStartupUser(startupUserDto?: StartupUserDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateStartupUser(startupUserDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * StartupApi - factory interface
 * @export
 */
export const StartupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StartupApiFp(configuration)
    return {
        /**
         * 
         * @summary Completes the startup wizard.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completeWizard(options?: any): AxiosPromise<void> {
            return localVarFp.completeWizard(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the first user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFirstUser(options?: any): AxiosPromise<StartupUserDto> {
            return localVarFp.getFirstUser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the first user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFirstUser2(options?: any): AxiosPromise<StartupUserDto> {
            return localVarFp.getFirstUser2(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the initial startup wizard configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStartupConfiguration(options?: any): AxiosPromise<StartupConfigurationDto> {
            return localVarFp.getStartupConfiguration(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sets remote access and UPnP.
         * @param {StartupRemoteAccessDto} startupRemoteAccessDto The startup remote access dto.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setRemoteAccess(startupRemoteAccessDto: StartupRemoteAccessDto, options?: any): AxiosPromise<void> {
            return localVarFp.setRemoteAccess(startupRemoteAccessDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sets the initial startup wizard configuration.
         * @param {StartupConfigurationDto} startupConfigurationDto The updated startup configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInitialConfiguration(startupConfigurationDto: StartupConfigurationDto, options?: any): AxiosPromise<void> {
            return localVarFp.updateInitialConfiguration(startupConfigurationDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sets the user name and password.
         * @param {StartupUserDto} [startupUserDto] The DTO containing username and password.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateStartupUser(startupUserDto?: StartupUserDto, options?: any): AxiosPromise<void> {
            return localVarFp.updateStartupUser(startupUserDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for setRemoteAccess operation in StartupApi.
 * @export
 * @interface StartupApiSetRemoteAccessRequest
 */
export interface StartupApiSetRemoteAccessRequest {
    /**
     * The startup remote access dto.
     * @type {StartupRemoteAccessDto}
     * @memberof StartupApiSetRemoteAccess
     */
    readonly startupRemoteAccessDto: StartupRemoteAccessDto
}

/**
 * Request parameters for updateInitialConfiguration operation in StartupApi.
 * @export
 * @interface StartupApiUpdateInitialConfigurationRequest
 */
export interface StartupApiUpdateInitialConfigurationRequest {
    /**
     * The updated startup configuration.
     * @type {StartupConfigurationDto}
     * @memberof StartupApiUpdateInitialConfiguration
     */
    readonly startupConfigurationDto: StartupConfigurationDto
}

/**
 * Request parameters for updateStartupUser operation in StartupApi.
 * @export
 * @interface StartupApiUpdateStartupUserRequest
 */
export interface StartupApiUpdateStartupUserRequest {
    /**
     * The DTO containing username and password.
     * @type {StartupUserDto}
     * @memberof StartupApiUpdateStartupUser
     */
    readonly startupUserDto?: StartupUserDto
}

/**
 * StartupApi - object-oriented interface
 * @export
 * @class StartupApi
 * @extends {BaseAPI}
 */
export class StartupApi extends BaseAPI {
    /**
     * 
     * @summary Completes the startup wizard.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApi
     */
    public completeWizard(options?: any) {
        return StartupApiFp(this.configuration).completeWizard(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the first user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApi
     */
    public getFirstUser(options?: any) {
        return StartupApiFp(this.configuration).getFirstUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the first user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApi
     */
    public getFirstUser2(options?: any) {
        return StartupApiFp(this.configuration).getFirstUser2(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the initial startup wizard configuration.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApi
     */
    public getStartupConfiguration(options?: any) {
        return StartupApiFp(this.configuration).getStartupConfiguration(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sets remote access and UPnP.
     * @param {StartupApiSetRemoteAccessRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApi
     */
    public setRemoteAccess(requestParameters: StartupApiSetRemoteAccessRequest, options?: any) {
        return StartupApiFp(this.configuration).setRemoteAccess(requestParameters.startupRemoteAccessDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sets the initial startup wizard configuration.
     * @param {StartupApiUpdateInitialConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApi
     */
    public updateInitialConfiguration(requestParameters: StartupApiUpdateInitialConfigurationRequest, options?: any) {
        return StartupApiFp(this.configuration).updateInitialConfiguration(requestParameters.startupConfigurationDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sets the user name and password.
     * @param {StartupApiUpdateStartupUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApi
     */
    public updateStartupUser(requestParameters: StartupApiUpdateStartupUserRequest = {}, options?: any) {
        return StartupApiFp(this.configuration).updateStartupUser(requestParameters.startupUserDto, options).then((request) => request(this.axios, this.basePath));
    }
}
