[**@robot-inventor/ts-utils v0.2.0**](../README.md) • **Docs**

***

[@robot-inventor/ts-utils v0.2.0](../README.md) / isPlainObject

# Function: isPlainObject()

> **isPlainObject**(`value`): `value is Record<string, unknown>`

Check if the value is a plain object.

## Parameters

• **value**: `unknown`

The value to check.

## Returns

`value is Record<string, unknown>`

Returns `true` if the value is a plain object, otherwise `false`.

## Example

```ts
isPlainObject({}) // true
isPlainObject([]) // false
isPlainObject(null) // false
```

## Defined in

[index.ts:10](https://github.com/Robot-Inventor/ts-utils/blob/591b417c3207633a953ab4cdf7f53e01ccdc78b3/src/index.ts#L10)
