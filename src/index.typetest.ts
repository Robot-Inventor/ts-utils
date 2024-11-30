/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/ban-ts-comment */
import type { AssertType, NonEmptyArray } from "./index.js";

type TestNonEmptyArray = AssertType<NonEmptyArray<string>, string[]>;
type TestNonEmptyArray2 = AssertType<NonEmptyArray<number>, number[]>;
// @ts-expect-error
type TestNonEmptyArray3 = AssertType<NonEmptyArray<string>, boolean[]>;

type TextAssertType = AssertType<string, string>;
type TextAssertType2 = AssertType<true, boolean>;
// @ts-expect-error
type TextAssertType3 = AssertType<string, number>;
// @ts-expect-error
type TextAssertType4 = AssertType<true, false>;
