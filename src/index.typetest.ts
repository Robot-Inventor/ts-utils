/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/ban-ts-comment */
import { type AssertType, type NonEmptyArray, assertType } from "./index.js";

type TestNonEmptyArray = AssertType<NonEmptyArray<string>, string[]>;
type TestNonEmptyArray2 = AssertType<NonEmptyArray<number>, number[]>;
// @ts-expect-error
type TestNonEmptyArray3 = AssertType<NonEmptyArray<string>, boolean[]>;
// @ts-expect-error
type TestNonEmptyArray4 = AssertType<NonEmptyArray<string>, []>;

type TextAssertType = AssertType<string, string>;
type TextAssertType2 = AssertType<true, boolean>;
// @ts-expect-error
type TextAssertType3 = AssertType<string, number>;
// @ts-expect-error
type TextAssertType4 = AssertType<true, false>;

assertType<string>("string");
assertType<boolean>(true);
assertType<true>(true);
assertType<number>(42);
assertType<null>(null);
// @ts-expect-error
assertType<string>(true);
// @ts-expect-error
assertType<boolean>("string");
// @ts-expect-error
assertType<true>(false);
// @ts-expect-error
assertType<number>("string");
