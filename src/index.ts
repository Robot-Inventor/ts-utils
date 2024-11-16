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
 * @param protocol Optional protocol(s) to check if the URL starts with.
 * @returns Returns a URL object if the value is a valid URL and matches the protocol(s), otherwise `null`.
 */
const isValidUrl = (value: string, protocol?: string | string[]): null | URL => {
    try {
        const url = new URL(value);

        if (protocol) {
            const protocols = Array.isArray(protocol) ? protocol : [protocol];
            // eslint-disable-next-line no-magic-numbers
            if (!protocols.includes(url.protocol.slice(0, -1))) {
                return null;
            }
        }

        return url;
    } catch {
        return null;
    }
};

export { isPlainObject, isValidUrl };
