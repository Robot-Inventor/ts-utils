[**@robot-inventor/ts-utils v0.7.1**](../README.md)

***

[@robot-inventor/ts-utils](../README.md) / isPlainObject

# Function: isPlainObject()

> **isPlainObject**(`value`): `value is Record<string, unknown>`

Defined in: [index.ts:10](https://github.com/Robot-Inventor/ts-utils/blob/ad2e1d60c0ccfd090c9dc7d5610dfc4951fff7dc/src/index.ts#L10)

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
