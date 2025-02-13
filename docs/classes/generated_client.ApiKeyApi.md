[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ApiKeyApi

# Class: ApiKeyApi

[generated-client](../modules/generated_client.md).ApiKeyApi

ApiKeyApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ApiKeyApi`**

## Table of contents

### Constructors

- [constructor](generated_client.ApiKeyApi.md#constructor)

### Properties

- [axios](generated_client.ApiKeyApi.md#axios)
- [basePath](generated_client.ApiKeyApi.md#basepath)
- [configuration](generated_client.ApiKeyApi.md#configuration)

### Methods

- [createKey](generated_client.ApiKeyApi.md#createkey)
- [getKeys](generated_client.ApiKeyApi.md#getkeys)
- [revokeKey](generated_client.ApiKeyApi.md#revokekey)

## Constructors

### constructor

• **new ApiKeyApi**(`configuration?`, `basePath?`, `axios?`)

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

### createKey

▸ **createKey**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Create a new api key.

**`throws`** {RequiredError}

**`memberof`** ApiKeyApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ApiKeyApiCreateKeyRequest`](../interfaces/generated_client.ApiKeyApiCreateKeyRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/api-key-api.ts:268](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/api-key-api.ts#L268)

___

### getKeys

▸ **getKeys**(`options?`): `Promise`<`AxiosResponse`<[`AuthenticationInfoQueryResult`](../interfaces/generated_client.AuthenticationInfoQueryResult.md)\>\>

**`summary`** Get all keys.

**`throws`** {RequiredError}

**`memberof`** ApiKeyApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`AuthenticationInfoQueryResult`](../interfaces/generated_client.AuthenticationInfoQueryResult.md)\>\>

#### Defined in

[generated-client/api/api-key-api.ts:279](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/api-key-api.ts#L279)

___

### revokeKey

▸ **revokeKey**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove an api key.

**`throws`** {RequiredError}

**`memberof`** ApiKeyApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ApiKeyApiRevokeKeyRequest`](../interfaces/generated_client.ApiKeyApiRevokeKeyRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/api-key-api.ts:291](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/api-key-api.ts#L291)
