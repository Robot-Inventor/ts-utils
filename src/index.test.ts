import { describe, expect, it } from "vitest";
import { isPlainObject, isValidUrl } from "./index";

describe("isPlainObject", () => {
    it("should return true for plain objects", () => {
        expect(isPlainObject({})).toBe(true);
        expect(isPlainObject({ a: 1 })).toBe(true);
    });

    it("should return false for arrays", () => {
        expect(isPlainObject([])).toBe(false);
        expect(isPlainObject([1, 2, 3])).toBe(false);
    });

    it("should return false for null", () => {
        expect(isPlainObject(null)).toBe(false);
    });

    it("should return false for other types", () => {
        expect(isPlainObject(42)).toBe(false);
        expect(isPlainObject("string")).toBe(false);
        expect(isPlainObject(true)).toBe(false);
        expect(isPlainObject(undefined)).toBe(false);
    });
});

describe("isValidUrl", () => {
    it("should return a URL object for valid URLs", () => {
        expect(isValidUrl("http://example.com")).toBeInstanceOf(URL);
        expect(isValidUrl("https://example.com")).toBeInstanceOf(URL);
    });

    it("should return null for invalid URLs", () => {
        expect(isValidUrl("invalid-url")).toBeNull();
        expect(isValidUrl("http/example.com")).toBeNull();
    });

    it("should return null for URLs not matching the protocol", () => {
        expect(isValidUrl("http://example.com", "https")).toBeNull();
        expect(isValidUrl("https://example.com", "http")).toBeNull();
    });

    it("should return a URL object for URLs matching the protocol", () => {
        expect(isValidUrl("http://example.com", "http")).toBeInstanceOf(URL);
        expect(isValidUrl("https://example.com", "https")).toBeInstanceOf(URL);
    });

    it("should handle multiple protocols", () => {
        expect(isValidUrl("http://example.com", ["http", "https"])).toBeInstanceOf(URL);
        expect(isValidUrl("https://example.com", ["http", "https"])).toBeInstanceOf(URL);
        expect(isValidUrl("ftp://example.com", ["http", "https"])).toBeNull();
    });
});
