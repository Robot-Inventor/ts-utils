[**@robot-inventor/ts-utils v0.7.0**](../README.md)

***

[@robot-inventor/ts-utils](../README.md) / isValidUrl

# Function: ~~isValidUrl()~~

> **isValidUrl**(`value`, `protocol`?): `null` \| `URL`

Defined in: [index.ts:20](https://github.com/Robot-Inventor/ts-utils/blob/9a747f55cf7fcfaad244dbba5c7c0d067c049e8b/src/index.ts#L20)

Check if the value is a valid URL.

## Parameters

### value

`string`

The value to check.

### protocol?

Optional protocol(s) to check if the URL starts with.

`string` | `string`[]

## Returns

`null` \| `URL`

Returns a URL object if the value is a valid URL and matches the protocol(s), otherwise `null`.

## Deprecated

Use [`URL.parse()`](https://developer.mozilla.org/docs/Web/API/URL/parse_static) instead.
