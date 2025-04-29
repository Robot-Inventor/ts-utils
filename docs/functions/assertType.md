[**@robot-inventor/ts-utils v0.8.0**](../README.md)

***

[@robot-inventor/ts-utils](../README.md) / assertType

# Function: assertType()

> **assertType**\<`Expected`\>(`_target`): `true`

Defined in: [index.ts:56](https://github.com/Robot-Inventor/ts-utils/blob/072f5375cb5de8b5f5bbd644d5026c0dc307f8d7/src/index.ts#L56)

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
