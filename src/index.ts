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

/**
 * Check if the value is a valid URL.
 * @param value The value to check.
 * @returns Returns a URL object if the value is a valid URL, otherwise `null`.
 */
const isValidUrl = (value: string): null | URL => {
    try {
        return new URL(value);
    } catch {
        return null;
    }
};

export { isPlainObject, isValidUrl };
