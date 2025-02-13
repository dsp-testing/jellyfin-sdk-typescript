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


import { DayOfWeek } from './day-of-week';
import { DayPattern } from './day-pattern';
import { KeepUntil } from './keep-until';

/**
 * Class SeriesTimerInfoDto.
 * @export
 * @interface SeriesTimerInfoDto
 */
export interface SeriesTimerInfoDto {
    /**
     * Id of the recording.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    Id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    Type?: string | null;
    /**
     * Gets or sets the server identifier.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    ServerId?: string | null;
    /**
     * Gets or sets the external identifier.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    ExternalId?: string | null;
    /**
     * ChannelId of the recording.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    ChannelId?: string;
    /**
     * Gets or sets the external channel identifier.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    ExternalChannelId?: string | null;
    /**
     * ChannelName of the recording.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    ChannelName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    ChannelPrimaryImageTag?: string | null;
    /**
     * Gets or sets the program identifier.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    ProgramId?: string | null;
    /**
     * Gets or sets the external program identifier.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    ExternalProgramId?: string | null;
    /**
     * Name of the recording.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    Name?: string | null;
    /**
     * Description of the recording.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    Overview?: string | null;
    /**
     * The start date of the recording, in UTC.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    StartDate?: string;
    /**
     * The end date of the recording, in UTC.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    EndDate?: string;
    /**
     * Gets or sets the name of the service.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    ServiceName?: string | null;
    /**
     * Gets or sets the priority.
     * @type {number}
     * @memberof SeriesTimerInfoDto
     */
    Priority?: number;
    /**
     * Gets or sets the pre padding seconds.
     * @type {number}
     * @memberof SeriesTimerInfoDto
     */
    PrePaddingSeconds?: number;
    /**
     * Gets or sets the post padding seconds.
     * @type {number}
     * @memberof SeriesTimerInfoDto
     */
    PostPaddingSeconds?: number;
    /**
     * Gets or sets a value indicating whether this instance is pre padding required.
     * @type {boolean}
     * @memberof SeriesTimerInfoDto
     */
    IsPrePaddingRequired?: boolean;
    /**
     * If the item does not have any backdrops, this will hold the Id of the Parent that has one.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    ParentBackdropItemId?: string | null;
    /**
     * Gets or sets the parent backdrop image tags.
     * @type {Array<string>}
     * @memberof SeriesTimerInfoDto
     */
    ParentBackdropImageTags?: Array<string> | null;
    /**
     * Gets or sets a value indicating whether this instance is post padding required.
     * @type {boolean}
     * @memberof SeriesTimerInfoDto
     */
    IsPostPaddingRequired?: boolean;
    /**
     * 
     * @type {KeepUntil}
     * @memberof SeriesTimerInfoDto
     */
    KeepUntil?: KeepUntil;
    /**
     * Gets or sets a value indicating whether [record any time].
     * @type {boolean}
     * @memberof SeriesTimerInfoDto
     */
    RecordAnyTime?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesTimerInfoDto
     */
    SkipEpisodesInLibrary?: boolean;
    /**
     * Gets or sets a value indicating whether [record any channel].
     * @type {boolean}
     * @memberof SeriesTimerInfoDto
     */
    RecordAnyChannel?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SeriesTimerInfoDto
     */
    KeepUpTo?: number;
    /**
     * Gets or sets a value indicating whether [record new only].
     * @type {boolean}
     * @memberof SeriesTimerInfoDto
     */
    RecordNewOnly?: boolean;
    /**
     * Gets or sets the days.
     * @type {Array<DayOfWeek>}
     * @memberof SeriesTimerInfoDto
     */
    Days?: Array<DayOfWeek> | null;
    /**
     * 
     * @type {DayPattern}
     * @memberof SeriesTimerInfoDto
     */
    DayPattern?: DayPattern;
    /**
     * Gets or sets the image tags.
     * @type {{ [key: string]: string; }}
     * @memberof SeriesTimerInfoDto
     */
    ImageTags?: { [key: string]: string; } | null;
    /**
     * Gets or sets the parent thumb item id.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    ParentThumbItemId?: string | null;
    /**
     * Gets or sets the parent thumb image tag.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    ParentThumbImageTag?: string | null;
    /**
     * Gets or sets the parent primary image item identifier.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    ParentPrimaryImageItemId?: string | null;
    /**
     * Gets or sets the parent primary image tag.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    ParentPrimaryImageTag?: string | null;
}


