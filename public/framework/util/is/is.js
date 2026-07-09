const is = {
    arr(value) {
        return Array.isArray(value);
    },
    // plain object: truthy, typeof "object", not an array
    obj(value) {
        return !!value && typeof value === 'object' && !is.arr(value);
    },
    str(value) {
        return typeof value === 'string';
    },
    num(value) {
        return typeof value === 'number';
    },
    bool(value) {
        return typeof value === 'boolean';
    },
    fn(value) {
        return typeof value === 'function';
    },
    def(value) {
        return typeof value !== 'undefined';
    },
    undef(value) {
        return typeof value === 'undefined';
    },
    // any constructable function — true for `class Foo {}` and `function Foo(){}`,
    // false for arrow functions (no prototype) and primitives
    class(value) {
        return typeof value === 'function' && value.prototype !== undefined;
    },
    // plain object literal: no custom constructor
    // note: Object.create(null) returns false (no constructor at all)
    pojo(value) {
        return is.obj(value) && value.constructor === Object;
    },
    // prototype object of a constructor: value === value.constructor.prototype
    proto(value) {
        return is.obj(value) && !!value.constructor && value.constructor.prototype === value;
    },
    // DOM node (any nodeType > 0)
    dom(value) {
        return !!value && value.nodeType > 0;
    },
    // DOM element (nodeType === 1)
    el(value) {
        return !!value && value.nodeType === 1;
    },
    // thenable duck-type — covers native Promises and polyfills
    promise(value) {
        return !!value && typeof value.then === 'function';
    },
    // mobile browser check — browser only
    mobile() {
        return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Mobile/i.test(navigator.userAgent);
    }
};

export default is;
export { is };
