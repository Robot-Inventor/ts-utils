[**@robot-inventor/ts-utils v0.8.9**](../README.md)

***

[@robot-inventor/ts-utils](../README.md) / isNonEmptyArray

# Function: isNonEmptyArray()

> **isNonEmptyArray**\<`T`\>(`value`): `value is NonEmptyArray<T>`

Defined in: [index.ts:35](https://github.com/Robot-Inventor/ts-utils/blob/ce69db433d1f795e326f245e265da7a4694a696b/src/index.ts#L35)

Check if the value is a non-empty array.

## Type Parameters

### T

`T`

## Parameters

### value

`T`[]

The value to check.

## Returns

`value is NonEmptyArray<T>`

Returns `true` if the value is a non-empty array, otherwise `false`.

## Example

```ts
isNonEmptyArray([1, 2, 3]) // true
isNonEmptyArray([]) // false
```
