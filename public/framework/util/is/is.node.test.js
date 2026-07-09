import is from './is.js';
import { test, assert } from '../../Test/3/Test3.js';

export default is.test = test("is", () => {

test("arr", () => {
    assert(is.arr([]),            "[] → true");
    assert(is.arr([1,2,3]),       "[1,2,3] → true");
    assert(is.arr(new Array(3)),  "new Array(3) → true");
    assert(!is.arr({}),           "{} → false");
    assert(!is.arr("hello"),      "string → false");
    assert(!is.arr(null),         "null → false");
    assert(!is.arr(undefined),    "undefined → false");
    assert(!is.arr(0),            "0 → false");
});

test("obj", () => {
    assert(is.obj({}),            "{} → true");
    assert(is.obj({ a: 1 }),      "{a:1} → true");
    assert(is.obj(new Date()),    "Date → true (it's an object)");
    assert(is.obj(new Map()),     "Map → true");
    assert(!is.obj([]),           "[] → false (arrays excluded)");
    assert(!is.obj(null),         "null → false (falsy guard)");
    assert(!is.obj("hi"),         "string → false");
    assert(!is.obj(42),           "number → false");
    assert(!is.obj(false),        "false → false");
    assert(!is.obj(undefined),    "undefined → false");
});

test("str", () => {
    assert(is.str(""),            "empty string → true");
    assert(is.str("hello"),       "string → true");
    assert(!is.str(0),            "0 → false");
    assert(!is.str(null),         "null → false");
    assert(!is.str(undefined),    "undefined → false");
    assert(!is.str([]),           "[] → false");
    assert(!is.str(String),       "String (constructor) → false");
});

test("num", () => {
    assert(is.num(0),             "0 → true");
    assert(is.num(42),            "42 → true");
    assert(is.num(-1),            "-1 → true");
    assert(is.num(Infinity),      "Infinity → true");
    // NaN is typeof 'number' — surprising but consistent with JS typeof
    assert(is.num(NaN),           "NaN → true (typeof 'number')");
    assert(!is.num("5"),          "'5' → false");
    assert(!is.num(null),         "null → false");
    assert(!is.num(undefined),    "undefined → false");
    assert(!is.num(true),         "true → false");
});

test("bool", () => {
    assert(is.bool(true),         "true → true");
    assert(is.bool(false),        "false → true");
    assert(!is.bool(0),           "0 → false (not a boolean)");
    assert(!is.bool(1),           "1 → false");
    assert(!is.bool("true"),      "'true' → false");
    assert(!is.bool(null),        "null → false");
});

test("fn", () => {
    assert(is.fn(() => {}),           "arrow → true");
    assert(is.fn(function() {}),      "function → true");
    assert(is.fn(class Foo {}),       "class → true (classes are functions)");
    assert(is.fn(Math.round),         "built-in → true");
    assert(!is.fn(null),              "null → false");
    assert(!is.fn({}),                "{} → false");
    assert(!is.fn("fn"),              "string → false");
    assert(!is.fn(undefined),         "undefined → false");
});

test("def / undef", () => {
    assert(is.def(0),             "0 → defined");
    assert(is.def(null),          "null → defined (null is a value)");
    assert(is.def(false),         "false → defined");
    assert(is.def(""),            "'' → defined");
    assert(!is.def(undefined),    "undefined → not defined");

    assert(is.undef(undefined),   "undefined → undef");
    assert(!is.undef(null),       "null → not undef");
    assert(!is.undef(0),          "0 → not undef");
});

test("class", () => {
    assert(is.class(class Foo {}),        "class Foo → true");
    assert(is.class(class {}),            "anonymous class → true");
    assert(is.class(function Foo() {}),   "named function → true (constructable)");
    assert(is.class(function() {}),       "anon function → true (constructable)");
    // arrow functions have no prototype — NOT constructable
    assert(!is.class(() => {}),           "arrow → false");
    assert(!is.class(async () => {}),     "async arrow → false");
    assert(!is.class(null),               "null → false");
    assert(!is.class(undefined),          "undefined → false");
    assert(!is.class("Foo"),              "string → false");
    assert(!is.class({}),                 "{} → false");
});

test("pojo", () => {
    assert(is.pojo({}),                   "{} → true");
    assert(is.pojo({ a: 1 }),             "{a:1} → true");
    assert(!is.pojo([]),                  "[] → false");
    assert(!is.pojo(null),                "null → false");
    assert(!is.pojo(new Date()),          "Date instance → false");
    assert(!is.pojo(new Map()),           "Map → false");
    // Object.create(null) has no constructor — not strictly POJO by this test
    assert(!is.pojo(Object.create(null)), "Object.create(null) → false (no constructor)");
    assert(!is.pojo(class {}),            "class → false");
});

test("proto", () => {
    assert(is.proto(Object.prototype),       "Object.prototype → true");
    class Foo {}
    assert(is.proto(Foo.prototype),          "Foo.prototype → true");
    assert(!is.proto({}),                    "plain {} → false");
    assert(!is.proto(null),                  "null → false");
    assert(!is.proto(new Foo()),             "instance → false");
    // Array.prototype is an exotic Array object — is.arr() returns true for it,
    // so is.obj() returns false, so is.proto() returns false. Known gap.
    assert(!is.proto(Array.prototype),       "Array.prototype → false (Array.prototype is an array)");
});

test("promise", () => {
    assert(is.promise(Promise.resolve()),    "Promise.resolve() → true");
    assert(is.promise({ then: () => {} }),   "thenable duck-type → true");
    assert(!is.promise({}),                  "{} → false");
    assert(!is.promise(null),                "null → false");
    assert(!is.promise(undefined),           "undefined → false");
    assert(!is.promise({ then: "nope" }),    "then is not a fn → false");
});

// is.dom, is.el, is.mobile — browser only, skipped in Node

}); // end is.test scope
