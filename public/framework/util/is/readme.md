# is

Type-checking helpers. All return booleans.

```js
import is from '/framework/core/util/is/is.js';
// or
import { is } from '/framework/core.js';
```

## Helpers

| helper | returns true when |
|--------|------------------|
| `is.arr(v)` | `Array.isArray(v)` |
| `is.obj(v)` | truthy, typeof "object", not an array |
| `is.str(v)` | typeof "string" (empty string → true) |
| `is.num(v)` | typeof "number" (NaN and Infinity → true) |
| `is.bool(v)` | exactly `true` or `false` |
| `is.fn(v)` | typeof "function" (classes → true) |
| `is.def(v)` | not undefined (null → true, it's a value) |
| `is.undef(v)` | exactly undefined |
| `is.class(v)` | constructable function (has prototype); false for arrows |
| `is.pojo(v)` | plain object literal — constructor === Object |
| `is.proto(v)` | is a constructor's `.prototype` object |
| `is.promise(v)` | duck-typed thenable |
| `is.dom(v)` | has nodeType > 0 (browser only) |
| `is.el(v)` | has nodeType === 1 (browser only) |
| `is.mobile()` | mobile user-agent check (browser only) |

## Edge cases worth knowing

- `is.num(NaN)` → **true** — NaN is typeof "number" in JS. Use `Number.isNaN()` if you need to exclude it.
- `is.obj(new Date())` → **true** — anything non-null, non-array, typeof "object" qualifies.
- `is.class(function() {})` → **true** — regular functions are constructable. Only arrow functions return false.
- `is.pojo(Object.create(null))` → **false** — no constructor means `constructor !== Object`.
- `is.def(null)` → **true** — null is a defined value (typeof "object", not undefined).
- `is.proto(Array.prototype)` → **false** — `Array.prototype` is itself an exotic Array, so `is.obj()` returns false for it. Known gap.
