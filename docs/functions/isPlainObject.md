[**@robot-inventor/ts-utils v0.3.0**](../README.md) • **Docs**

***

[@robot-inventor/ts-utils v0.3.0](../README.md) / isPlainObject

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

[index.ts:10](https://github.com/Robot-Inventor/ts-utils/blob/5b8e7899204a94a838634f0660e630bef4435d6a/src/index.ts#L10)
