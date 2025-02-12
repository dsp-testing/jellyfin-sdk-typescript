[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / FilterApi

# Class: FilterApi

[generated-client](../modules/generated_client.md).FilterApi

FilterApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`FilterApi`**

## Table of contents

### Constructors

- [constructor](generated_client.FilterApi.md#constructor)

### Properties

- [axios](generated_client.FilterApi.md#axios)
- [basePath](generated_client.FilterApi.md#basepath)
- [configuration](generated_client.FilterApi.md#configuration)

### Methods

- [getQueryFilters](generated_client.FilterApi.md#getqueryfilters)
- [getQueryFiltersLegacy](generated_client.FilterApi.md#getqueryfilterslegacy)

## Constructors

### constructor

• **new FilterApi**(`configuration?`, `basePath?`, `axios?`)

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

### getQueryFilters

▸ **getQueryFilters**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`QueryFilters`](../interfaces/generated_client.QueryFilters.md)\>\>

**`summary`** Gets query filters.

**`throws`** {RequiredError}

**`memberof`** FilterApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`FilterApiGetQueryFiltersRequest`](../interfaces/generated_client.FilterApiGetQueryFiltersRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`QueryFilters`](../interfaces/generated_client.QueryFilters.md)\>\>

#### Defined in

[generated-client/api/filter-api.ts:385](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/filter-api.ts#L385)

___

### getQueryFiltersLegacy

▸ **getQueryFiltersLegacy**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`QueryFiltersLegacy`](../interfaces/generated_client.QueryFiltersLegacy.md)\>\>

**`summary`** Gets legacy query filters.

**`throws`** {RequiredError}

**`memberof`** FilterApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`FilterApiGetQueryFiltersLegacyRequest`](../interfaces/generated_client.FilterApiGetQueryFiltersLegacyRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`QueryFiltersLegacy`](../interfaces/generated_client.QueryFiltersLegacy.md)\>\>

#### Defined in

[generated-client/api/filter-api.ts:397](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/filter-api.ts#L397)
