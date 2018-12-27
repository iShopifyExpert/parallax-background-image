# parallax-background-image
simple, responsive parallax scrolling effect.

## Features
* **fast**
* works on mobile devices
* automatically switch to [pure CSS parallax effect](https://keithclark.co.uk/articles/pure-css-parallax-websites/) if supported by the browser
* zero dependencies
* simple(?) api


## Demo
<https://ray851107.github.io/parallax-background-image/demo.html>


## CDN
```html
<script src="https://cdn.jsdelivr.net/gh/ray851107/parallax-background-image@v2.2.3/parallax-background-image.min.js"></script>
```


## Basic usage

### Setup
Wrap all your site content inside a wrapper element with fixed position and 100% width/height.

NOTE: Don't use `<body>` as the wrapper.

For example,
```html
<html>
  <head>
    <style>
      #wrapper {
        position: fixed;
        height: 100%;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <div id="#wrapper">
      <!-- site content here -->
    </div>
    <script>
      /* create a viewport */
      var viewport = parallax.createViewport('#wrapper')

      /* apply parallax effect to elements inside the viewport (see below) */
      viewport.add('.some-css-selector')
      viewport.add('.another-selector')

      /* ... */

    </script>
  </body>
<html>
```

```javascript
```

### Apply parallax effect
```javascript
/* apply parallax effect to selected elements */
viewport.add('.select-some-elements')

/* specify the velocity of the background image.
   more precisely, it's the ratio between velocity of the image and the element.
   values greater than 1 make the image move faster than the element.
   values less than 1 make the image move slower than the element.
   (Default: 0.8) */
viewport.add('.another-selector', { velocity: 1.2 })

/* align the background image to the left (Default: 'center') */
viewport.add('.hello-selector', { alignX: 'left' })

/* use custom background image (Default: read `background-image` from element style) */
viewport.add('.custom-background-image', { backgroundImage: 'http://domain/xxx.jpg' })
```
For complete example see `demo.html`


## API

### `parallax.createViewport(rootElement[, options])`

#### Parameters
* `rootElement` **HTMLElement** or **string** (CSS selector) - A scrollable container element.
  * NOTE: Don't use `<body>` as the viewport.
* `options` **Object** - All fields are optional
  * `use3d` **boolean** - If `true`, use perspective transform, otherwise use the js-based fallback. Default `false` on non-chromium browsers.
  * ...default options for `parallax.add`

### Instance Methods

### `viewport.add(elements[, options])`

Apply parallax effect to element(s).

#### Parameters
* `elements` - Can be:
  * A CSS selector
  * A HTMLElement
  * A NodeList
  * An array of HTMLElements
* `options` **Object** - All fields are optional
  * `velocity` **Number** - Ratio between velocity of the image and the element. Must be positive. - Default `0.8`
  * `alignX` **string** - Horizontal alignment for the image. Accepts a percentage string (e.g. `'87%'`). Default `'center'`
    * shorthands: `'left'` = `'0%'`, `'right'` = `'100%'`, `'center'` = `'50%'`
  * `image` **string** or **Function** - url to the image, or a function which accepts an `Element` and returns a url. - Default `parallax.cssBackgroundImage` (read `background-image` from element style)
  * `renderer` **RendererClass** - How to render the image - Default `parallax.ImageElementRenderer`
    * `parallax.ImageElementRenderer`  - prepend an `<img>` to the element.
    * `parallax.PseudoElementRenderer` - use CSS `::before`.
      * NOTE: It is not recommended to use this renderer, as it is much slower than `ImageElementRenderer`.

### `viewport.remove(elements)`

Remove parallax effect from element(s).

#### Parameters
* `elements` - Can be:
  * A CSS selector
  * A HTMLElement
  * A NodeList
  * An array of HTMLElements
