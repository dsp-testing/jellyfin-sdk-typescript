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
 * Class PlayRequestDto.
 * @export
 * @interface PlayRequestDto
 */
export interface PlayRequestDto {
    /**
     * Gets or sets the playing queue.
     * @type {Array<string>}
     * @memberof PlayRequestDto
     */
    PlayingQueue?: Array<string> | null;
    /**
     * Gets or sets the position of the playing item in the queue.
     * @type {number}
     * @memberof PlayRequestDto
     */
    PlayingItemPosition?: number;
    /**
     * Gets or sets the start position ticks.
     * @type {number}
     * @memberof PlayRequestDto
     */
    StartPositionTicks?: number;
}


