[**@robot-inventor/ts-utils v0.8.0**](../README.md)

***

[@robot-inventor/ts-utils](../README.md) / NonEmptyArray

# Type Alias: NonEmptyArray\<T\>

> **NonEmptyArray**\<`T`\> = \[`T`, `...T[]`\]

Defined in: [index.ts:24](https://github.com/Robot-Inventor/ts-utils/blob/072f5375cb5de8b5f5bbd644d5026c0dc307f8d7/src/index.ts#L24)

Represents an array with at least one element.

## Type Parameters

### T

`T`

The type of the elements in the array.

## Example

```ts
const array = [1, 2, 3];
const item = array[0]; // `item` is `number | undefined`.

const nonEmptyArray: NonEmptyArray<number> = [1, 2, 3];
const firstItem = nonEmptyArray[0]; // `firstItem` is `number`.
const secondItem = nonEmptyArray[1]; // `secondItem` is `number | undefined`.
```
