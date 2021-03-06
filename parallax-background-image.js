var parallax = (function (exports) {
  'use strict';

  function appendStyleSheet(content) {
    if ( content === void 0 ) content = '';

    var style = createStyleElement(content);
    document.head.appendChild(style);
    return style.sheet
  }

  function prependStyleSheet(content) {
    if ( content === void 0 ) content = '';

    var style = createStyleElement(content);
    document.head.insertBefore(style, document.head.firstElementChild);
    return style.sheet
  }

  function createStyleElement(content) {
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(content));
    return style
  }

  var CLASS_PARALLAX_VIEWPORT = 'parallax-background-image-viewport';
  var CLASS_PARALLAX_VIEWPORT_3D =
    'parallax-background-image-viewport-3d';
  var CLASS_PARALLAX_ELEMENT = 'parallax-background-image-element';

  function injectStyle() {
    prependStyleSheet(STYLE);
  }

  var STYLE = "\n." + CLASS_PARALLAX_ELEMENT + " {\n  position: relative;\n  overflow: hidden !important;\n  background: none !important;\n  background-image: none !important;\n}\n\n." + CLASS_PARALLAX_ELEMENT + " > * {\n  position: relative;\n}\n\n." + CLASS_PARALLAX_VIEWPORT + " {\n  overflow-x: hidden !important;\n  overflow-y: scroll !important;\n  -webkit-overflow-scrolling: touch;\n}\n\n." + CLASS_PARALLAX_VIEWPORT_3D + " {\n  perspective: 1px !important;\n  perspective-origin: center center !important;\n}";

  function createTransform(options) {
    var parallax = options.use3d ? parallax3d : parallax2d;

    var coverElement_ = coverElement(options.velocity);
    var alignX_ = alignX(options.alignX);
    var parallax_ = parallax(options.velocity);

    return function transform_(bg, element, viewport) {
      coverElement_(bg, element, viewport);
      alignX_(bg, element, viewport);
      parallax_(bg, element, viewport);
    }
  }

  function scale_(bg, s) {
    bg.x *= s;
    bg.y *= s;
    bg.z *= s;
    bg.w *= s;
    bg.h *= s;
  }

  function coverElement(velocity) {
    return function coverElement_(bg, element, viewport) {
      var minWidth = element.w;
      var minHeight = viewport.h + velocity * (viewport.h - element.h);
      var widthScale = minWidth / bg.w;
      var heightScale = minHeight / bg.h;

      scale_(bg, Math.max(widthScale, heightScale));
    }
  }

  function alignX(percentage) {
    percentage = parsePercentage(percentage);
    return function alignX_(bg, element, viewport) {
      bg.x = (0.5 - percentage) * (bg.w - element.w);
    }
  }

  function parsePercentage(str) {
    if (str === 'left') { return 0 }
    if (str === 'center') { return 0.5 }
    if (str === 'right') { return 1 }
    var num = parseFloat(str);
    if (!isNaN(num)) { return num / 100 }
    return 0.5
  }

  function parallax3d(velocity) {
    return function parallax3d_(bg, element, viewport) {
      scale_(bg, 1 / velocity);
      bg.z += 1 - 1 / velocity;
      bg.x -= element.x * (1 - 1 / velocity);
    }
  }

  function parallax2d(velocity) {
    return function parallax2d_(bg, element, viewport) {
      bg.y += element.y * (velocity - 1);
    }
  }

  var ParallaxElement = function ParallaxElement(element, image, options) {
    this.element = element;
    this.imageWidth = image.naturalWidth;
    this.imageHeight = image.naturalHeight;

    this.transform_ = createTransform(options);
    this.renderer = new options.renderer(element, image, options);

    this.bgRect = { x: NaN, y: NaN, z: NaN, w: NaN, h: NaN };
    this.dirty = false;

    this.disposed = false;

    this.element.classList.add(CLASS_PARALLAX_ELEMENT);
  };

  ParallaxElement.prototype.updateRect = function updateRect (elementRect, viewportRect) {
    if (this.disposed) { return }
    var bgRect = { x: 0, y: 0, z: 0, w: this.imageWidth, h: this.imageHeight };
    this.transform_(bgRect, elementRect, viewportRect);
    if (notEqual(this.bgRect, bgRect)) {
      this.dirty = true;
      copy_(this.bgRect, bgRect);
    }
  };

  ParallaxElement.prototype.render = function render () {
    if (this.disposed) { return }
    if (!this.dirty) { return }
    this.dirty = false;
    this.renderer.render(this.bgRect);
  };

  ParallaxElement.prototype.dispose = function dispose () {
    if (this.disposed) { return }
    this.disposed = true;
    this.element.classList.remove(CLASS_PARALLAX_ELEMENT);
    this.renderer.dispose();
  };

  function notEqual(a, b) {
    return a.x !== b.x || a.y !== b.y || a.z !== b.z || a.w !== b.w || a.h !== b.h
  }

  function copy_(a, b) {
    a.x = b.x;
    a.y = b.y;
    a.z = b.z;
    a.w = b.w;
    a.h = b.h;
  }

  function setupStyle(style, width, height) {
    style.position = 'absolute';
    style.left = '50%';
    style.top = '50%';
    style.width = width + "px";
    style.height = height + "px";
    style.transformOrigin = 'center center 0';
    style.pointerEvents = 'none';
  }

  function renderToStyle(style, bg, imageWidth, imageHeight) {
    style.transform =
      "translateX(" + (bg.x - imageWidth / 2) + "px)" +
      "translateY(" + (bg.y - imageHeight / 2) + "px)" +
      "translateZ(" + (bg.z) + "px)" +
      "scale(" + (bg.w / imageWidth) + ", " + (bg.h / imageHeight) + ")";
  }

  var ImageElementRenderer = function ImageElementRenderer(element, image, options) {
    var this$1 = this;

    this.element = element;
    this.imageWidth = image.naturalWidth;
    this.imageHeight = image.naturalHeight;

    this.img = document.createElement('img');
    this.style = this.img.style;

    this.disposed = false;

    window.requestAnimationFrame(function () {
      if (this$1.disposed) { return }
      this$1.img.src = image.src;
      setupStyle(this$1.style, this$1.imageWidth, this$1.imageHeight);
      this$1.element.prepend(this$1.img);
    });
  };

  ImageElementRenderer.prototype.render = function render (bg) {
    if (this.disposed) { return }
    renderToStyle(this.style, bg, this.imageWidth, this.imageHeight);
  };

  ImageElementRenderer.prototype.dispose = function dispose () {
    if (this.disposed) { return }
    this.disposed = true;
    this.element.removeChild(this.img);
  };

  function createStyle(selector, styleSheet) {
    var rule = selector + " {}";
    var index = styleSheet.insertRule(rule, 0);
    return styleSheet.cssRules[index].style
  }

  var styleSheet = appendStyleSheet();
  var nextId = 0;
  var PseudoElementRenderer = function PseudoElementRenderer(element, image, options) {
    var this$1 = this;

    this.element = element;
    this.imageWidth = image.naturalWidth;
    this.imageHeight = image.naturalHeight;

    var id = nextId++;
    this.className = "parallax-background-image-pseudo-" + id;

    this.style = createStyle(("." + (this.className) + "::before"), styleSheet);

    this.disposed = false;

    window.requestAnimationFrame(function () {
      if (this$1.disposed) { return }
      this$1.style.content = '""';
      this$1.style.backgroundImage = "url(" + (image.src) + ")";
      this$1.style.backgroundSize = '100% 100%';
      setupStyle(this$1.style, this$1.imageWidth, this$1.imageHeight);
      this$1.element.classList.add(this$1.className);
    });
  };

  PseudoElementRenderer.prototype.render = function render (bg) {
    if (this.disposed) { return }
    renderToStyle(this.style, bg, this.imageWidth, this.imageHeight);
  };

  PseudoElementRenderer.prototype.dispose = function dispose () {
    if (this.disposed) { return }
    this.disposed = true;
    this.element.classList.remove(this.className);
  };

  var ParallaxViewport = function ParallaxViewport(rootElement, options) {
    if (typeof rootElement === 'string') {
      rootElement = document.querySelector(rootElement);
    }

    options = Object.assign({}, {use3d: isChrome()},
      options);

    this.rootElement = rootElement;
    this.options = options;
    this.parallaxElements = [];

    this._setupStyle();
    this._monitorRects();
    this._startRenderLoop();
  };

  ParallaxViewport.prototype._setupStyle = function _setupStyle () {
    this.rootElement.classList.add(CLASS_PARALLAX_VIEWPORT);
    if (this.options.use3d) {
      this.rootElement.classList.add(CLASS_PARALLAX_VIEWPORT_3D);
    }
  };

  ParallaxViewport.prototype._monitorRects = function _monitorRects () {
    var _updateRects = this._updateRects.bind(this);
    window.addEventListener('resize', _updateRects);
    if (!this.options.use3d) {
      this.rootElement.addEventListener('scroll', _updateRects);
    }
  };

  ParallaxViewport.prototype._updateRects = function _updateRects () {
    var parallaxElements = this.parallaxElements;
    var viewportRect = getRect(this.rootElement);
    for (var i = 0; i < parallaxElements.length; ++i) {
      var elementRect = getRect(parallaxElements[i].element);
      subtract_(elementRect, viewportRect);
      parallaxElements[i].updateRect(elementRect, viewportRect);
    }
  };

  ParallaxViewport.prototype._startRenderLoop = function _startRenderLoop () {
    var parallaxElements = this.parallaxElements;
    function renderLoop() {
      for (var i = 0; i < parallaxElements.length; ++i) {
        parallaxElements[i].render();
      }
      window.requestAnimationFrame(renderLoop);
    }
    window.requestAnimationFrame(renderLoop);
  };

  ParallaxViewport.prototype.add = function add (elements, options) {
      if ( options === void 0 ) options = {};

    if (elements instanceof Element) {
      this._addElement(elements, options);
      return
    }

    if (typeof elements === 'string') {
      elements = this.rootElement.querySelectorAll(elements);
    }

    for (var i = 0; i < elements.length; ++i) {
      this._addElement(elements[i], options);
    }
  };

  ParallaxViewport.prototype._addElement = function _addElement (element, options) {
      var this$1 = this;

    if (!this._isViewportFor(element)) { return }
    this._removeElement(element);

    options = this._parseElementOptions(element, options);
    if (options.image == null) { return }

    loadImage(options.image, function (err, image) {
      if (err) { return }
      this$1.parallaxElements.push(new ParallaxElement(element, image, options));
      this$1._updateRects();
    });
  };

  ParallaxViewport.prototype._isViewportFor = function _isViewportFor (element) {
    return (
      element !== this.rootElement &&
      element.closest(("." + CLASS_PARALLAX_VIEWPORT)) === this.rootElement
    )
  };

  ParallaxViewport.prototype._parseElementOptions = function _parseElementOptions (element, options) {
    if (typeof options === 'function') {
      options = options(element);
    }

    options = Object.assign({}, {velocity: 0.8,
      alignX: 'center',
      renderer: ImageElementRenderer},
      options);

    if (options.image == null) {
      options.image = cssBackgroundImage(element);
    }

    options.use3d = this.options.use3d;

    return options
  };

  ParallaxViewport.prototype.remove = function remove (elements) {
    if (elements instanceof Element) {
      this._removeElement(elements);
      return
    }

    if (typeof elements === 'string') {
      elements = this.rootElement.querySelectorAll(elements);
    }

    for (var i = 0; i < elements.length; ++i) {
      this._removeElement(elements[i]);
    }
  };

  ParallaxViewport.prototype._removeElement = function _removeElement (element) {
    var parallaxElements = this.parallaxElements;
    for (var i = 0; i < parallaxElements.length; ++i) {
      if (this.parallaxElements[i].element === element) {
        parallaxElements[i].dispose();
        parallaxElements.splice(i, 1);
        return
      }
    }
  };

  function isChrome() {
    var userAgent = navigator.userAgent;
    return (
      userAgent.indexOf('Chrome/') !== -1 && userAgent.indexOf('Edge/') === -1
    )
  }

  function getRect(element) {
    var rect = element.getBoundingClientRect();
    return {
      x: (rect.left + rect.right) / 2,
      y: (rect.top + rect.bottom) / 2,
      w: rect.right - rect.left,
      h: rect.bottom - rect.top
    }
  }

  function subtract_(a, b) {
    a.x -= b.x;
    a.y -= b.y;
  }

  function cssBackgroundImage(element) {
    var style = window.getComputedStyle(element);
    var match = /^url\((['"]?)(.*)\1\)$/.exec(style.backgroundImage);
    return match == null ? null : match[2]
  }

  function loadImage(src, cb) {
    var image = document.createElement('img');
    image.onload = function(event) {
      cb(null, event.target);
    };
    image.onerror = function(event) {
      cb(event.error);
    };
    image.src = src;
  }

  injectStyle();

  function createViewport(rootElement, options) {
    if ( options === void 0 ) options = {};

    return new ParallaxViewport(rootElement, options)
  }

  exports.createViewport = createViewport;
  exports.ImageElementRenderer = ImageElementRenderer;
  exports.PseudoElementRenderer = PseudoElementRenderer;

  return exports;

}({}));
