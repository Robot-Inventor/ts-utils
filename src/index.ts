/**
 * Check if the value is a plain object.
 * @example
 * isPlainObject({}) // true
 * isPlainObject([]) // false
 * isPlainObject(null) // false
 * @param value The value to check.
 * @returns Returns `true` if the value is a plain object, otherwise `false`.
 */
const isPlainObject = (value: unknown): value is Record<string, unknown> =>
    typeof value === "object" && value !== null && !Array.isArray(value);

export { isPlainObject };
