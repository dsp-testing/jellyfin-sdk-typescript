[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LocalizationApi

# Class: LocalizationApi

[generated-client](../modules/generated_client.md).LocalizationApi

LocalizationApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`LocalizationApi`**

## Table of contents

### Constructors

- [constructor](generated_client.LocalizationApi.md#constructor)

### Properties

- [axios](generated_client.LocalizationApi.md#axios)
- [basePath](generated_client.LocalizationApi.md#basepath)
- [configuration](generated_client.LocalizationApi.md#configuration)

### Methods

- [getCountries](generated_client.LocalizationApi.md#getcountries)
- [getCultures](generated_client.LocalizationApi.md#getcultures)
- [getLocalizationOptions](generated_client.LocalizationApi.md#getlocalizationoptions)
- [getParentalRatings](generated_client.LocalizationApi.md#getparentalratings)

## Constructors

### constructor

• **new LocalizationApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance`

#### Inherited from

BaseAPI.axios

___

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

BaseAPI.basePath

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](generated_client.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/base.ts#L50)

## Methods

### getCountries

▸ **getCountries**(`options?`): `Promise`<`AxiosResponse`<[`CountryInfo`](../interfaces/generated_client.CountryInfo.md)[]\>\>

**`summary`** Gets known countries.

**`throws`** {RequiredError}

**`memberof`** LocalizationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`CountryInfo`](../interfaces/generated_client.CountryInfo.md)[]\>\>

#### Defined in

[generated-client/api/localization-api.ts:282](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/localization-api.ts#L282)

___

### getCultures

▸ **getCultures**(`options?`): `Promise`<`AxiosResponse`<[`CultureDto`](../interfaces/generated_client.CultureDto.md)[]\>\>

**`summary`** Gets known cultures.

**`throws`** {RequiredError}

**`memberof`** LocalizationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`CultureDto`](../interfaces/generated_client.CultureDto.md)[]\>\>

#### Defined in

[generated-client/api/localization-api.ts:293](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/localization-api.ts#L293)

___

### getLocalizationOptions

▸ **getLocalizationOptions**(`options?`): `Promise`<`AxiosResponse`<[`LocalizationOption`](../interfaces/generated_client.LocalizationOption.md)[]\>\>

**`summary`** Gets localization options.

**`throws`** {RequiredError}

**`memberof`** LocalizationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`LocalizationOption`](../interfaces/generated_client.LocalizationOption.md)[]\>\>

#### Defined in

[generated-client/api/localization-api.ts:304](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/localization-api.ts#L304)

___

### getParentalRatings

▸ **getParentalRatings**(`options?`): `Promise`<`AxiosResponse`<[`ParentalRating`](../interfaces/generated_client.ParentalRating.md)[]\>\>

**`summary`** Gets known parental ratings.

**`throws`** {RequiredError}

**`memberof`** LocalizationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`ParentalRating`](../interfaces/generated_client.ParentalRating.md)[]\>\>

#### Defined in

[generated-client/api/localization-api.ts:315](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/localization-api.ts#L315)
