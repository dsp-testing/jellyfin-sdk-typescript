[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / UserViewsApi

# Class: UserViewsApi

[generated-client](../modules/generated_client.md).UserViewsApi

UserViewsApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`UserViewsApi`**

## Table of contents

### Constructors

- [constructor](generated_client.UserViewsApi.md#constructor)

### Properties

- [axios](generated_client.UserViewsApi.md#axios)
- [basePath](generated_client.UserViewsApi.md#basepath)
- [configuration](generated_client.UserViewsApi.md#configuration)

### Methods

- [getGroupingOptions](generated_client.UserViewsApi.md#getgroupingoptions)
- [getUserViews](generated_client.UserViewsApi.md#getuserviews)

## Constructors

### constructor

• **new UserViewsApi**(`configuration?`, `basePath?`, `axios?`)

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

### getGroupingOptions

▸ **getGroupingOptions**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`SpecialViewOptionDto`](../interfaces/generated_client.SpecialViewOptionDto.md)[]\>\>

**`summary`** Get user view grouping options.

**`throws`** {RequiredError}

**`memberof`** UserViewsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserViewsApiGetGroupingOptionsRequest`](../interfaces/generated_client.UserViewsApiGetGroupingOptionsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`SpecialViewOptionDto`](../interfaces/generated_client.SpecialViewOptionDto.md)[]\>\>

#### Defined in

[generated-client/api/user-views-api.ts:253](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/user-views-api.ts#L253)

___

### getUserViews

▸ **getUserViews**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Get user views.

**`throws`** {RequiredError}

**`memberof`** UserViewsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserViewsApiGetUserViewsRequest`](../interfaces/generated_client.UserViewsApiGetUserViewsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/user-views-api.ts:265](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/user-views-api.ts#L265)
