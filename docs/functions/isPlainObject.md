[**@robot-inventor/ts-utils v0.8.6**](../README.md)

***

[@robot-inventor/ts-utils](../README.md) / isPlainObject

# Function: isPlainObject()

> **isPlainObject**(`value`): `value is Record<string, unknown>`

Defined in: [index.ts:10](https://github.com/Robot-Inventor/ts-utils/blob/bbc5ce83b489e7f00c49d96cb8e3e981b3177d62/src/index.ts#L10)

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
