[**@robot-inventor/ts-utils v0.8.5**](../README.md)

***

[@robot-inventor/ts-utils](../README.md) / NonEmptyArray

# Type Alias: NonEmptyArray\<T\>

> **NonEmptyArray**\<`T`\> = \[`T`, `...T[]`\]

Defined in: [index.ts:24](https://github.com/Robot-Inventor/ts-utils/blob/dbfc7630f5b7107371d1ef54313b89b9f2b3f4ce/src/index.ts#L24)

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
