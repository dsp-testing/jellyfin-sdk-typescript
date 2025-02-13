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


import { PluginStatus } from './plugin-status';
import { Version } from './version';

/**
 * This is a serializable stub class that is used by the api to provide information about installed plugins.
 * @export
 * @interface PluginInfo
 */
export interface PluginInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof PluginInfo
     */
    Name?: string | null;
    /**
     * 
     * @type {Version}
     * @memberof PluginInfo
     */
    Version?: Version;
    /**
     * Gets or sets the name of the configuration file.
     * @type {string}
     * @memberof PluginInfo
     */
    ConfigurationFileName?: string | null;
    /**
     * Gets or sets the description.
     * @type {string}
     * @memberof PluginInfo
     */
    Description?: string | null;
    /**
     * Gets or sets the unique id.
     * @type {string}
     * @memberof PluginInfo
     */
    Id?: string;
    /**
     * Gets or sets a value indicating whether the plugin can be uninstalled.
     * @type {boolean}
     * @memberof PluginInfo
     */
    CanUninstall?: boolean;
    /**
     * Gets or sets a value indicating whether this plugin has a valid image.
     * @type {boolean}
     * @memberof PluginInfo
     */
    HasImage?: boolean;
    /**
     * 
     * @type {PluginStatus}
     * @memberof PluginInfo
     */
    Status?: PluginStatus;
}


