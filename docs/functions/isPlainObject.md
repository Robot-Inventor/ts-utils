[**@robot-inventor/ts-utils v0.3.1**](../README.md) • **Docs**

***

[@robot-inventor/ts-utils v0.3.1](../README.md) / isPlainObject

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

[index.ts:10](https://github.com/Robot-Inventor/ts-utils/blob/4a0b8f91e8d31bf63bb9febbe4d8990e45ec1542/src/index.ts#L10)
