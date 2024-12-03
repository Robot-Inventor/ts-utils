[**@robot-inventor/ts-utils v0.6.1**](../README.md) • **Docs**

***

[@robot-inventor/ts-utils v0.6.1](../README.md) / isPlainObject

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

[index.ts:10](https://github.com/Robot-Inventor/ts-utils/blob/ad578980a74251c5f6891ef567f8014ddb560d8a/src/index.ts#L10)
