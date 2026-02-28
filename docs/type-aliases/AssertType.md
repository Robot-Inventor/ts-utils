[**@robot-inventor/ts-utils v0.8.4**](../README.md)

***

[@robot-inventor/ts-utils](../README.md) / AssertType

# Type Alias: AssertType\<T, Expected\>

> **AssertType**\<`T`, `Expected`\> = `T`

Defined in: [index.ts:43](https://github.com/Robot-Inventor/ts-utils/blob/a84ede6e7c505c51f6134d7f59c2c6c013dd0c3e/src/index.ts#L43)

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
