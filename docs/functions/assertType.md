[**@robot-inventor/ts-utils v0.8.1**](../README.md)

***

[@robot-inventor/ts-utils](../README.md) / assertType

# Function: assertType()

> **assertType**\<`Expected`\>(`_target`): `true`

Defined in: [index.ts:55](https://github.com/Robot-Inventor/ts-utils/blob/1e779ceeea0ad4abc129cfdd29588771e375c3e9/src/index.ts#L55)

Ensures that the `_target` type is `Expected`.
Always returns `true` at runtime. This function solely affects type checking.

## Type Parameters

### Expected

`Expected`

## Parameters

### \_target

`Expected`

The target value to check.

## Returns

`true`

Always returns `true`.

## Example

```ts
assertType<number>(1); // No error
assertType<string>(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```
