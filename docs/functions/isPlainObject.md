[**@robot-inventor/ts-utils v0.7.0**](../README.md)

***

[@robot-inventor/ts-utils](../README.md) / isPlainObject

# Function: isPlainObject()

> **isPlainObject**(`value`): `value is Record<string, unknown>`

Defined in: [index.ts:10](https://github.com/Robot-Inventor/ts-utils/blob/9a747f55cf7fcfaad244dbba5c7c0d067c049e8b/src/index.ts#L10)

Check if the value is a plain object.

## Parameters

### value

`unknown`

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
