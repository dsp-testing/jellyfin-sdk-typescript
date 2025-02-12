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


import { DlnaProfileType } from './dlna-profile-type';

/**
 * 
 * @export
 * @interface DirectPlayProfile
 */
export interface DirectPlayProfile {
    /**
     * 
     * @type {string}
     * @memberof DirectPlayProfile
     */
    Container?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DirectPlayProfile
     */
    AudioCodec?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DirectPlayProfile
     */
    VideoCodec?: string | null;
    /**
     * 
     * @type {DlnaProfileType}
     * @memberof DirectPlayProfile
     */
    Type?: DlnaProfileType;
}


