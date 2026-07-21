[**@robot-inventor/ts-utils v0.8.8**](../README.md)

***

[@robot-inventor/ts-utils](../README.md) / AssertType

# Type Alias: AssertType\<T, Expected\>

> **AssertType**\<`T`, `Expected`\> = `T`

Defined in: [index.ts:43](https://github.com/Robot-Inventor/ts-utils/blob/52757444ac65dad4bfdb1b13526d903437c27918/src/index.ts#L43)

Asserts that the type `T` extends the `Expected` type and returns `T`.

## Type Parameters

### T

`T` *extends* `Expected`

### Expected

`Expected`

## Example

```ts
type Assertion1 = AssertType<1, number>; // No error
type Assertion2 = AssertType<1, string>; // Error: Type 'number' does not satisfy the constraint 'string'.
```
