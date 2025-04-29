[**@robot-inventor/ts-utils v0.8.0**](../README.md)

***

[@robot-inventor/ts-utils](../README.md) / AssertType

# Type Alias: AssertType\<T, Expected\>

> **AssertType**\<`T`, `Expected`\> = `T`

Defined in: [index.ts:44](https://github.com/Robot-Inventor/ts-utils/blob/072f5375cb5de8b5f5bbd644d5026c0dc307f8d7/src/index.ts#L44)

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
