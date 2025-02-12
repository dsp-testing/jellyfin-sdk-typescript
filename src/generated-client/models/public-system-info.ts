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



/**
 * 
 * @export
 * @interface PublicSystemInfo
 */
export interface PublicSystemInfo {
    /**
     * Gets or sets the local address.
     * @type {string}
     * @memberof PublicSystemInfo
     */
    LocalAddress?: string | null;
    /**
     * Gets or sets the name of the server.
     * @type {string}
     * @memberof PublicSystemInfo
     */
    ServerName?: string | null;
    /**
     * Gets or sets the server version.
     * @type {string}
     * @memberof PublicSystemInfo
     */
    Version?: string | null;
    /**
     * Gets or sets the product name. This is the AssemblyProduct name.
     * @type {string}
     * @memberof PublicSystemInfo
     */
    ProductName?: string | null;
    /**
     * Gets or sets the operating system.
     * @type {string}
     * @memberof PublicSystemInfo
     */
    OperatingSystem?: string | null;
    /**
     * Gets or sets the id.
     * @type {string}
     * @memberof PublicSystemInfo
     */
    Id?: string | null;
    /**
     * Gets or sets a value indicating whether the startup wizard is completed.
     * @type {boolean}
     * @memberof PublicSystemInfo
     */
    StartupWizardCompleted?: boolean | null;
}


