/**
 * Check if the value is a plain object.
 * @param value The value to check.
 * @returns Returns `true` if the value is a plain object, otherwise `false`.
 * @example
 * isPlainObject({}) // true
 * isPlainObject([]) // false
 * isPlainObject(null) // false
 */
const isPlainObject = (value: unknown): value is Record<string, unknown> =>
    typeof value === "object" && value !== null && !Array.isArray(value);

/**
 * Represents an array with at least one element.
 * @param T - The type of the elements in the array.
 * @example
 * const array = [1, 2, 3];
 * const item = array[0]; // `item` is `number | undefined`.
 *
 * const nonEmptyArray: NonEmptyArray<number> = [1, 2, 3];
 * const firstItem = nonEmptyArray[0]; // `firstItem` is `number`.
 * const secondItem = nonEmptyArray[1]; // `secondItem` is `number | undefined`.
 */
type NonEmptyArray<T> = [T, ...T[]];

/**
 * Check if the value is a non-empty array.
 * @param value The value to check.
 * @returns Returns `true` if the value is a non-empty array, otherwise `false`.
 * @example
 * isNonEmptyArray([1, 2, 3]) // true
 * isNonEmptyArray([]) // false
 */
// eslint-disable-next-line no-magic-numbers
const isNonEmptyArray = <T>(value: T[]): value is NonEmptyArray<T> => Array.isArray(value) && value.length > 0;

/**
 * Asserts that the type `T` extends the `Expected` type and returns `T`.
 * @example
 * type Assertion1 = AssertType<1, number>; // No error
 * type Assertion2 = AssertType<1, string>; // Error: Type 'number' does not satisfy the constraint 'string'.
 */
// eslint-disable-next-line no-use-before-define
type AssertType<T extends Expected, Expected> = T;

/**
 * Ensures that the `_target` type is `Expected`.
 * Always returns `true` at runtime. This function solely affects type checking.
 * @param _target The target value to check.
 * @returns Always returns `true`.
 * @example
 * assertType<number>(1); // No error
 * assertType<string>(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-unnecessary-type-parameters
const assertType = <Expected>(_target: Expected): true => true;

export { isPlainObject, type NonEmptyArray, isNonEmptyArray, type AssertType, assertType };
