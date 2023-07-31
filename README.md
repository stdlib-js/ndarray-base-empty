<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# empty

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an uninitialized [ndarray][@stdlib/ndarray/base/ctor] having a specified shape and [data type][@stdlib/ndarray/dtypes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import empty from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-empty@v0.0.1-esm/index.mjs';
```

#### empty( dtype, shape, order )

Creates an uninitialized [ndarray][@stdlib/ndarray/base/ctor] having a specified shape and [data type][@stdlib/ndarray/dtypes].

```javascript
var arr = empty( 'float64', [ 2, 2 ], 'row-major' );
// returns <ndarray>

var sh = arr.shape;
// returns [ 2, 2 ]

var dt = arr.dtype;
// returns 'float64'
```

The function accepts the following arguments:

-   **dtype**: underlying [data type][@stdlib/ndarray/dtypes].
-   **shape**: array shape.
-   **order**: specifies whether an [ndarray][@stdlib/ndarray/base/ctor] is `'row-major'` (C-style) or `'column-major'` (Fortran-style).

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If `dtype` is `'generic'`, the function always returns a zero-filled array.
-   For returned [ndarrays][@stdlib/ndarray/base/ctor] whose underlying memory is **not** initialized, memory contents are unknown and may contain **sensitive** data.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@esm/index.mjs';
import empty from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-empty@v0.0.1-esm/index.mjs';

// Get a list of data types:
var dt = dtypes();

// Generate uninitialized arrays...
var arr;
var i;
for ( i = 0; i < dt.length; i++ ) {
    arr = empty( dt[ i ], [ 2, 2 ], 'row-major' );
    console.log( arr.data );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-empty.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-empty

[test-image]: https://github.com/stdlib-js/ndarray-base-empty/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/ndarray-base-empty/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-empty/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-empty?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-empty.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-empty/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-empty/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-empty/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-empty/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base-empty/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-empty/main/LICENSE

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/stdlib/tree/esm

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/stdlib/tree/esm

</section>

<!-- /.links -->
