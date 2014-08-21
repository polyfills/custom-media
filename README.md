
# custom-media

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

A pure regexp-replace polyfill for W3C CSS Custom Media queries.
This is basically CSS variables, but for media queries.

This:

```css
@custom-media --full-page (max-width: 980px);

@media (--full-page) {

}
```

Becomes:

```css
@custom-media --full-page (max-width: 980px);

@media (max-width: 980px) {

}
```

## Usage

```bash
var customMedia = require('custom-media')
css = customMedia(css)
```

[npm-image]: https://img.shields.io/npm/v/custom-media.svg?style=flat-square
[npm-url]: https://npmjs.org/package/custom-media
[github-tag]: http://img.shields.io/github/tag/polyfills/custom-media.svg?style=flat-square
[github-url]: https://github.com/polyfills/custom-media/tags
[travis-image]: https://img.shields.io/travis/polyfills/custom-media.svg?style=flat-square
[travis-url]: https://travis-ci.org/polyfills/custom-media
[coveralls-image]: https://img.shields.io/coveralls/polyfills/custom-media.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/polyfills/custom-media?branch=master
[david-image]: http://img.shields.io/david/polyfills/custom-media.svg?style=flat-square
[david-url]: https://david-dm.org/polyfills/custom-media
[license-image]: http://img.shields.io/npm/l/custom-media.svg?style=flat-square
[license-url]: LICENSE.md
[downloads-image]: http://img.shields.io/npm/dm/custom-media.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/custom-media
[gittip-image]: https://img.shields.io/gittip/jonathanong.svg?style=flat-square
[gittip-url]: https://www.gittip.com/jonathanong/
