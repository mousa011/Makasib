parcelRequire = (function (init) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;
  var modules = {};

  function localRequire(name, jumped) {
    if (name in modules) {
      return modules[name];
    }

    // if we cannot find the module within our internal map or
    // cache jump to the current global require ie. the last bundle
    // that was added to the page.
    var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
    if (!jumped && currentRequire) {
      return currentRequire(name, true);
    }

    // If there are other bundles on this page the require from the
    // previous one is saved to 'previousRequire'. Repeat this as
    // many times as there are bundles until the module is found or
    // we exhaust the require chain.
    if (previousRequire) {
      return previousRequire(name, true);
    }

    // Try the node require function if it exists.
    if (nodeRequire && typeof name === 'string') {
      return nodeRequire(name);
    }

    var err = new Error('Cannot find module \'' + name + '\'');
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  }

  localRequire.register = function register(id, exports) {
    modules[id] = exports;
  };

  modules = init(localRequire);
  localRequire.modules = modules;
  return localRequire;
})(function (require) {
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function (key) {
    if (key === "default" || key === "__esModule") {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });
  return dest;
}

// ASSET: ../node_modules/@popperjs/core/lib/index.js
var $vePw$exports = {};
// ASSET: ../node_modules/@popperjs/core/lib/enums.js
var $XHUo$exports = {};
var $XHUo$export$top = 'top';
$XHUo$exports.top = $XHUo$export$top;
var $XHUo$export$bottom = 'bottom';
$XHUo$exports.bottom = $XHUo$export$bottom;
var $XHUo$export$right = 'right';
$XHUo$exports.right = $XHUo$export$right;
var $XHUo$export$left = 'left';
$XHUo$exports.left = $XHUo$export$left;
var $XHUo$export$auto = 'auto';
$XHUo$exports.auto = $XHUo$export$auto;
var $XHUo$export$basePlacements = [$XHUo$export$top, $XHUo$export$bottom, $XHUo$export$right, $XHUo$export$left];
$XHUo$exports.basePlacements = $XHUo$export$basePlacements;
var $XHUo$export$start = 'start';
$XHUo$exports.start = $XHUo$export$start;
var $XHUo$export$end = 'end';
$XHUo$exports.end = $XHUo$export$end;
var $XHUo$export$clippingParents = 'clippingParents';
$XHUo$exports.clippingParents = $XHUo$export$clippingParents;
var $XHUo$export$viewport = 'viewport';
$XHUo$exports.viewport = $XHUo$export$viewport;
var $XHUo$export$popper = 'popper';
$XHUo$exports.popper = $XHUo$export$popper;
var $XHUo$export$reference = 'reference';
$XHUo$exports.reference = $XHUo$export$reference;
var $XHUo$export$variationPlacements = /*#__PURE__*/$XHUo$export$basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + $XHUo$export$start, placement + "-" + $XHUo$export$end]);
}, []);
$XHUo$exports.variationPlacements = $XHUo$export$variationPlacements;
var $XHUo$export$placements = /*#__PURE__*/[].concat($XHUo$export$basePlacements, [$XHUo$export$auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + $XHUo$export$start, placement + "-" + $XHUo$export$end]);
}, []); // modifiers that need to read the DOM

$XHUo$exports.placements = $XHUo$export$placements;
var $XHUo$export$beforeRead = 'beforeRead';
$XHUo$exports.beforeRead = $XHUo$export$beforeRead;
var $XHUo$export$read = 'read';
$XHUo$exports.read = $XHUo$export$read;
var $XHUo$export$afterRead = 'afterRead'; // pure-logic modifiers

$XHUo$exports.afterRead = $XHUo$export$afterRead;
var $XHUo$export$beforeMain = 'beforeMain';
$XHUo$exports.beforeMain = $XHUo$export$beforeMain;
var $XHUo$export$main = 'main';
$XHUo$exports.main = $XHUo$export$main;
var $XHUo$export$afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

$XHUo$exports.afterMain = $XHUo$export$afterMain;
var $XHUo$export$beforeWrite = 'beforeWrite';
$XHUo$exports.beforeWrite = $XHUo$export$beforeWrite;
var $XHUo$export$write = 'write';
$XHUo$exports.write = $XHUo$export$write;
var $XHUo$export$afterWrite = 'afterWrite';
$XHUo$exports.afterWrite = $XHUo$export$afterWrite;
var $XHUo$export$modifierPhases = [$XHUo$export$beforeRead, $XHUo$export$read, $XHUo$export$afterRead, $XHUo$export$beforeMain, $XHUo$export$main, $XHUo$export$afterMain, $XHUo$export$beforeWrite, $XHUo$export$write, $XHUo$export$afterWrite];
$XHUo$exports.modifierPhases = $XHUo$export$modifierPhases;

function $B1zX$export$default(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function $QiNa$export$default(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function $wsKO$export$isElement(node) {
  var OwnElement = $QiNa$export$default(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function $wsKO$export$isHTMLElement(node) {
  var OwnElement = $QiNa$export$default(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function $wsKO$export$isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = $QiNa$export$default(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function $D2nT$var$applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!$wsKO$export$isHTMLElement(element) || !$B1zX$export$default(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function $D2nT$var$effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!$wsKO$export$isHTMLElement(element) || !$B1zX$export$default(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var $D2nT$export$default = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: $D2nT$var$applyStyles,
  effect: $D2nT$var$effect,
  requires: ['computeStyles']
};

function $QS9h$export$default(placement) {
  return placement.split('-')[0];
}

// import { isHTMLElement } from './instanceOf';
function $W8bA$export$default(element, // eslint-disable-next-line unused-imports/no-unused-vars
includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1; // FIXME:
  // `offsetWidth` returns an integer while `getBoundingClientRect`
  // returns a float. This results in `scaleX` or `scaleY` being
  // non-1 when it should be for elements that aren't a full pixel in
  // width or height.
  // if (isHTMLElement(element) && includeScale) {
  //   const offsetHeight = element.offsetHeight;
  //   const offsetWidth = element.offsetWidth;
  //   // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
  //   // Fallback to 1 in case both values are `0`
  //   if (offsetWidth > 0) {
  //     scaleX = rect.width / offsetWidth || 1;
  //   }
  //   if (offsetHeight > 0) {
  //     scaleY = rect.height / offsetHeight || 1;
  //   }
  // }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function $wDsK$export$default(element) {
  var clientRect = $W8bA$export$default(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function $x3Ja$export$default(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && $wsKO$export$isShadowRoot(rootNode)) {
    var next = child;

    do {
      if (next && parent.isSameNode(next)) {
        return true;
      } // $FlowFixMe[prop-missing]: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  } // Give up, the result is false


  return false;
}

function $S6rb$export$default(element) {
  return $QiNa$export$default(element).getComputedStyle(element);
}

function $rK11$export$default(element) {
  return ['table', 'td', 'th'].indexOf($B1zX$export$default(element)) >= 0;
}

function $sJcE$export$default(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (($wsKO$export$isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function $IVKl$export$default(element) {
  if ($B1zX$export$default(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    $wsKO$export$isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $sJcE$export$default(element) // fallback

  );
}

function $CUhI$var$getTrueOffsetParent(element) {
  if (!$wsKO$export$isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  $S6rb$export$default(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function $CUhI$var$getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && $wsKO$export$isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = $S6rb$export$default(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = $IVKl$export$default(element);

  while ($wsKO$export$isHTMLElement(currentNode) && ['html', 'body'].indexOf($B1zX$export$default(currentNode)) < 0) {
    var css = $S6rb$export$default(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function $CUhI$export$default(element) {
  var window = $QiNa$export$default(element);
  var offsetParent = $CUhI$var$getTrueOffsetParent(element);

  while (offsetParent && $rK11$export$default(offsetParent) && $S6rb$export$default(offsetParent).position === 'static') {
    offsetParent = $CUhI$var$getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ($B1zX$export$default(offsetParent) === 'html' || $B1zX$export$default(offsetParent) === 'body' && $S6rb$export$default(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || $CUhI$var$getContainingBlock(element) || window;
}

function $PMyK$export$default(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

var $FuL6$export$max = Math.max;
var $FuL6$export$min = Math.min;
var $FuL6$export$round = Math.round;

function $FbIu$export$default(min, value, max) {
  return $FuL6$export$max(min, $FuL6$export$min(value, max));
}

function $a0QL$export$default() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function $SCz0$export$default(paddingObject) {
  return Object.assign({}, $a0QL$export$default(), paddingObject);
}

function $sYkG$export$default(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// eslint-disable-next-line import/no-unused-modules
var $zJlD$var$toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return $SCz0$export$default(typeof padding !== 'number' ? padding : $sYkG$export$default(padding, $XHUo$export$basePlacements));
};

function $zJlD$var$arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = $QS9h$export$default(state.placement);
  var axis = $PMyK$export$default(basePlacement);
  var isVertical = [$XHUo$export$left, $XHUo$export$right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = $zJlD$var$toPaddingObject(options.padding, state);
  var arrowRect = $wDsK$export$default(arrowElement);
  var minProp = axis === 'y' ? $XHUo$export$top : $XHUo$export$left;
  var maxProp = axis === 'y' ? $XHUo$export$bottom : $XHUo$export$right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = $CUhI$export$default(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = $FbIu$export$default(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function $zJlD$var$effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if ("production" !== "production") {
    if (!$wsKO$export$isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!$x3Ja$export$default(state.elements.popper, arrowElement)) {
    if ("production" !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var $zJlD$export$default = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: $zJlD$var$arrow,
  effect: $zJlD$var$effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function $auH8$export$default(placement) {
  return placement.split('-')[1];
}

// eslint-disable-next-line import/no-unused-modules
var $ebtt$var$unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function $ebtt$var$roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: $FuL6$export$round($FuL6$export$round(x * dpr) / dpr) || 0,
    y: $FuL6$export$round($FuL6$export$round(y * dpr) / dpr) || 0
  };
}

function $ebtt$export$mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? $ebtt$var$roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = $XHUo$export$left;
  var sideY = $XHUo$export$top;
  var win = window;

  if (adaptive) {
    var offsetParent = $CUhI$export$default(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === $QiNa$export$default(popper)) {
      offsetParent = $sJcE$export$default(popper);

      if ($S6rb$export$default(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === $XHUo$export$top || (placement === $XHUo$export$left || placement === $XHUo$export$right) && variation === $XHUo$export$end) {
      sideY = $XHUo$export$bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === $XHUo$export$left || (placement === $XHUo$export$top || placement === $XHUo$export$bottom) && variation === $XHUo$export$end) {
      sideX = $XHUo$export$right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && $ebtt$var$unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function $ebtt$var$computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if ("production" !== "production") {
    var transitionProperty = $S6rb$export$default(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: $QS9h$export$default(state.placement),
    variation: $auH8$export$default(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, $ebtt$export$mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, $ebtt$export$mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var $ebtt$export$default = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: $ebtt$var$computeStyles,
  data: {}
};
// eslint-disable-next-line import/no-unused-modules
var $psGJ$var$passive = {
  passive: true
};

function $psGJ$var$effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = $QiNa$export$default(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, $psGJ$var$passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, $psGJ$var$passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, $psGJ$var$passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, $psGJ$var$passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var $psGJ$export$default = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: $psGJ$var$effect,
  data: {}
};
var $M6e4$var$hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};

function $M6e4$export$default(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return $M6e4$var$hash[matched];
  });
}

var $lLmA$var$hash = {
  start: 'end',
  end: 'start'
};

function $lLmA$export$default(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return $lLmA$var$hash[matched];
  });
}

function $oJ75$export$default(node) {
  var win = $QiNa$export$default(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function $zwcJ$export$default(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return $W8bA$export$default($sJcE$export$default(element)).left + $oJ75$export$default(element).scrollLeft;
}

function $E2lw$export$default(element) {
  var win = $QiNa$export$default(element);
  var html = $sJcE$export$default(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + $zwcJ$export$default(element),
    y: y
  };
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function $yEje$export$default(element) {
  var _element$ownerDocumen;

  var html = $sJcE$export$default(element);
  var winScroll = $oJ75$export$default(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = $FuL6$export$max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = $FuL6$export$max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + $zwcJ$export$default(element);
  var y = -winScroll.scrollTop;

  if ($S6rb$export$default(body || html).direction === 'rtl') {
    x += $FuL6$export$max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function $j3Hf$export$default(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = $S6rb$export$default(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function $Qnrt$export$default(node) {
  if (['html', 'body', '#document'].indexOf($B1zX$export$default(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ($wsKO$export$isHTMLElement(node) && $j3Hf$export$default(node)) {
    return node;
  }

  return $Qnrt$export$default($IVKl$export$default(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
function $m3DJ$export$default(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = $Qnrt$export$default(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = $QiNa$export$default(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], $j3Hf$export$default(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat($m3DJ$export$default($IVKl$export$default(target)));
}

function $rB0G$export$default(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function $M7BJ$var$getInnerBoundingClientRect(element) {
  var rect = $W8bA$export$default(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function $M7BJ$var$getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === $XHUo$export$viewport ? $rB0G$export$default($E2lw$export$default(element)) : $wsKO$export$isHTMLElement(clippingParent) ? $M7BJ$var$getInnerBoundingClientRect(clippingParent) : $rB0G$export$default($yEje$export$default($sJcE$export$default(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function $M7BJ$var$getClippingParents(element) {
  var clippingParents = $m3DJ$export$default($IVKl$export$default(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf($S6rb$export$default(element).position) >= 0;
  var clipperElement = canEscapeClipping && $wsKO$export$isHTMLElement(element) ? $CUhI$export$default(element) : element;

  if (!$wsKO$export$isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return $wsKO$export$isElement(clippingParent) && $x3Ja$export$default(clippingParent, clipperElement) && $B1zX$export$default(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function $M7BJ$export$default(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? $M7BJ$var$getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = $M7BJ$var$getClientRectFromMixedType(element, clippingParent);
    accRect.top = $FuL6$export$max(rect.top, accRect.top);
    accRect.right = $FuL6$export$min(rect.right, accRect.right);
    accRect.bottom = $FuL6$export$min(rect.bottom, accRect.bottom);
    accRect.left = $FuL6$export$max(rect.left, accRect.left);
    return accRect;
  }, $M7BJ$var$getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function $dvfD$export$default(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? $QS9h$export$default(placement) : null;
  var variation = placement ? $auH8$export$default(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case $XHUo$export$top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case $XHUo$export$bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case $XHUo$export$right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case $XHUo$export$left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? $PMyK$export$default(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case $XHUo$export$start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case $XHUo$export$end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

// eslint-disable-next-line import/no-unused-modules
function $Moke$export$default(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? $XHUo$export$clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? $XHUo$export$viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? $XHUo$export$popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = $SCz0$export$default(typeof padding !== 'number' ? padding : $sYkG$export$default(padding, $XHUo$export$basePlacements));
  var altContext = elementContext === $XHUo$export$popper ? $XHUo$export$reference : $XHUo$export$popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = $M7BJ$export$default($wsKO$export$isElement(element) ? element : element.contextElement || $sJcE$export$default(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = $W8bA$export$default(state.elements.reference);
  var popperOffsets = $dvfD$export$default({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = $rB0G$export$default(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === $XHUo$export$popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === $XHUo$export$popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [$XHUo$export$right, $XHUo$export$bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [$XHUo$export$top, $XHUo$export$bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function $HhJi$export$default(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? $XHUo$export$placements : _options$allowedAutoP;
  var variation = $auH8$export$default(placement);
  var placements = variation ? flipVariations ? $XHUo$export$variationPlacements : $XHUo$export$variationPlacements.filter(function (placement) {
    return $auH8$export$default(placement) === variation;
  }) : $XHUo$export$basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if ("production" !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = $Moke$export$default(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[$QS9h$export$default(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

// eslint-disable-next-line import/no-unused-modules
function $rNoN$var$getExpandedFallbackPlacements(placement) {
  if ($QS9h$export$default(placement) === $XHUo$export$auto) {
    return [];
  }

  var oppositePlacement = $M6e4$export$default(placement);
  return [$lLmA$export$default(placement), oppositePlacement, $lLmA$export$default(oppositePlacement)];
}

function $rNoN$var$flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = $QS9h$export$default(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [$M6e4$export$default(preferredPlacement)] : $rNoN$var$getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat($QS9h$export$default(placement) === $XHUo$export$auto ? $HhJi$export$default(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = $QS9h$export$default(placement);

    var isStartVariation = $auH8$export$default(placement) === $XHUo$export$start;
    var isVertical = [$XHUo$export$top, $XHUo$export$bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = $Moke$export$default(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? $XHUo$export$right : $XHUo$export$left : isStartVariation ? $XHUo$export$bottom : $XHUo$export$top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = $M6e4$export$default(mainVariationSide);
    }

    var altVariationSide = $M6e4$export$default(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var $rNoN$export$default = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: $rNoN$var$flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function $jhaw$var$getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function $jhaw$var$isAnySideFullyClipped(overflow) {
  return [$XHUo$export$top, $XHUo$export$right, $XHUo$export$bottom, $XHUo$export$left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function $jhaw$var$hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = $Moke$export$default(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = $Moke$export$default(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = $jhaw$var$getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = $jhaw$var$getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = $jhaw$var$isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = $jhaw$var$isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var $jhaw$export$default = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: $jhaw$var$hide
};

function $aUNc$export$distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = $QS9h$export$default(placement);
  var invertDistance = [$XHUo$export$left, $XHUo$export$top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [$XHUo$export$left, $XHUo$export$right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function $aUNc$var$offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = $XHUo$export$placements.reduce(function (acc, placement) {
    acc[placement] = $aUNc$export$distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var $aUNc$export$default = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: $aUNc$var$offset
};

function $Pf8x$var$popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = $dvfD$export$default({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var $Pf8x$export$default = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: $Pf8x$var$popperOffsets,
  data: {}
};

function $YGKJ$export$default(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function $RwXk$var$preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = $Moke$export$default(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = $QS9h$export$default(state.placement);
  var variation = $auH8$export$default(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = $PMyK$export$default(basePlacement);
  var altAxis = $YGKJ$export$default(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? $XHUo$export$top : $XHUo$export$left;
    var altSide = mainAxis === 'y' ? $XHUo$export$bottom : $XHUo$export$right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === $XHUo$export$start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === $XHUo$export$start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? $wDsK$export$default(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : $a0QL$export$default();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = $FbIu$export$default(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && $CUhI$export$default(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = $FbIu$export$default(tether ? $FuL6$export$min(min, tetherMin) : min, offset, tether ? $FuL6$export$max(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? $XHUo$export$top : $XHUo$export$left;

      var _altSide = mainAxis === 'x' ? $XHUo$export$bottom : $XHUo$export$right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = $FbIu$export$default(tether ? $FuL6$export$min(_min, tetherMin) : _min, _offset, tether ? $FuL6$export$max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var $RwXk$export$default = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: $RwXk$var$preventOverflow,
  requiresIfExists: ['offset']
};

function $uy7N$export$default(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function $Cbix$export$default(node) {
  if (node === $QiNa$export$default(node) || !$wsKO$export$isHTMLElement(node)) {
    return $oJ75$export$default(node);
  } else {
    return $uy7N$export$default(node);
  }
}

function $FCaM$var$isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function $FCaM$export$default(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = $wsKO$export$isHTMLElement(offsetParent);
  var offsetParentIsScaled = $wsKO$export$isHTMLElement(offsetParent) && $FCaM$var$isElementScaled(offsetParent);
  var documentElement = $sJcE$export$default(offsetParent);
  var rect = $W8bA$export$default(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ($B1zX$export$default(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    $j3Hf$export$default(documentElement)) {
      scroll = $Cbix$export$default(offsetParent);
    }

    if ($wsKO$export$isHTMLElement(offsetParent)) {
      offsets = $W8bA$export$default(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = $zwcJ$export$default(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// source: https://stackoverflow.com/questions/49875255
function $mxvt$var$order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function $mxvt$export$default(modifiers) {
  // order based on dependencies
  var orderedModifiers = $mxvt$var$order(modifiers); // order based on phase

  return $XHUo$export$modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function $mGsv$export$default(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function $JD7L$export$default(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var $nr2q$var$INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var $nr2q$var$MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var $nr2q$var$VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];

function $nr2q$export$default(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), $nr2q$var$VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if ($XHUo$export$modifierPhases.indexOf(modifier.phase) < 0) {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + $XHUo$export$modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + $nr2q$var$VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error($JD7L$export$default($nr2q$var$MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function $AjzX$export$default(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function $pDli$export$default(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var $rg1d$var$INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var $rg1d$var$INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var $rg1d$var$DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function $rg1d$var$areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function $rg1d$export$popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? $rg1d$var$DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, $rg1d$var$DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: $wsKO$export$isElement(reference) ? $m3DJ$export$default(reference) : reference.contextElement ? $m3DJ$export$default(reference.contextElement) : [],
          popper: $m3DJ$export$default(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = $mxvt$export$default($pDli$export$default([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if ("production" !== "production") {
          var modifiers = $AjzX$export$default([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          $nr2q$export$default(modifiers);

          if ($QS9h$export$default(state.options.placement) === $XHUo$export$auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = $S6rb$export$default(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!$rg1d$var$areValidElements(reference, popper)) {
          if ("production" !== "production") {
            console.error($rg1d$var$INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: $FCaM$export$default(reference, $CUhI$export$default(popper), state.options.strategy === 'fixed'),
          popper: $wDsK$export$default(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if ("production" !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error($rg1d$var$INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: $mGsv$export$default(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!$rg1d$var$areValidElements(reference, popper)) {
      if ("production" !== "production") {
        console.error($rg1d$var$INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var $rg1d$export$createPopper = /*#__PURE__*/$rg1d$export$popperGenerator(); // eslint-disable-next-line import/no-unused-modules

var $hwU4$export$defaultModifiers = [$psGJ$export$default, $Pf8x$export$default, $ebtt$export$default, $D2nT$export$default];
var $hwU4$export$createPopper = /*#__PURE__*/$rg1d$export$popperGenerator({
  defaultModifiers: $hwU4$export$defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

var $cujj$export$defaultModifiers = [$psGJ$export$default, $Pf8x$export$default, $ebtt$export$default, $D2nT$export$default, $aUNc$export$default, $rNoN$export$default, $RwXk$export$default, $zJlD$export$default, $jhaw$export$default];
var $cujj$export$createPopper = /*#__PURE__*/$rg1d$export$popperGenerator({
  defaultModifiers: $cujj$export$defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

$parcel$exportWildcard($vePw$exports, $XHUo$exports);
$parcel$exportWildcard($vePw$exports, {}); // eslint-disable-next-line import/no-unused-modules

$vePw$exports.createPopperBase = $rg1d$export$createPopper;
$vePw$exports.detectOverflow = $Moke$export$default;
$vePw$exports.popperGenerator = $rg1d$export$popperGenerator;
$vePw$exports.createPopper = $cujj$export$createPopper;
$vePw$exports.createPopperLite = $hwU4$export$createPopper;

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const $xqrD$var$MAX_UID = 1000000;
const $xqrD$var$MILLISECONDS_MULTIPLIER = 1000;
const $xqrD$var$TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

const $xqrD$var$toType = obj => {
  if (obj === null || obj === undefined) {
    return `${obj}`;
  }

  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


const $xqrD$var$getUID = prefix => {
  do {
    prefix += Math.floor(Math.random() * $xqrD$var$MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

const $xqrD$var$getSelector = element => {
  let selector = element.getAttribute('data-bs-target');

  if (!selector || selector === '#') {
    let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273

    if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
      return null;
    } // Just in case some CMS puts out a full URL with the anchor appended


    if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
      hrefAttr = `#${hrefAttr.split('#')[1]}`;
    }

    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  }

  return selector;
};

const $xqrD$var$getSelectorFromElement = element => {
  const selector = $xqrD$var$getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

const $xqrD$var$getElementFromSelector = element => {
  const selector = $xqrD$var$getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

const $xqrD$var$getTransitionDurationFromElement = element => {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * $xqrD$var$MILLISECONDS_MULTIPLIER;
};

const $xqrD$var$triggerTransitionEnd = element => {
  element.dispatchEvent(new Event($xqrD$var$TRANSITION_END));
};

const $xqrD$var$isElement = obj => {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (typeof obj.jquery !== 'undefined') {
    obj = obj[0];
  }

  return typeof obj.nodeType !== 'undefined';
};

const $xqrD$var$getElement = obj => {
  if ($xqrD$var$isElement(obj)) {
    // it's a jQuery object or a node element
    return obj.jquery ? obj[0] : obj;
  }

  if (typeof obj === 'string' && obj.length > 0) {
    return document.querySelector(obj);
  }

  return null;
};

const $xqrD$var$typeCheckConfig = (componentName, config, configTypes) => {
  Object.keys(configTypes).forEach(property => {
    const expectedTypes = configTypes[property];
    const value = config[property];
    const valueType = value && $xqrD$var$isElement(value) ? 'element' : $xqrD$var$toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) {
      throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
    }
  });
};

const $xqrD$var$isVisible = element => {
  if (!$xqrD$var$isElement(element) || element.getClientRects().length === 0) {
    return false;
  }

  return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
};

const $xqrD$var$isDisabled = element => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }

  if (element.classList.contains('disabled')) {
    return true;
  }

  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }

  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};

const $xqrD$var$findShadowRoot = element => {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return $xqrD$var$findShadowRoot(element.parentNode);
};

const $xqrD$var$noop = () => {};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */


const $xqrD$var$reflow = element => {
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight;
};

const $xqrD$var$getjQuery = () => {
  const {
    jQuery
  } = window;

  if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return jQuery;
  }

  return null;
};

const $xqrD$var$DOMContentLoadedCallbacks = [];

const $xqrD$var$onDOMContentLoaded = callback => {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!$xqrD$var$DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', () => {
        $xqrD$var$DOMContentLoadedCallbacks.forEach(callback => callback());
      });
    }

    $xqrD$var$DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};

const $xqrD$var$isRTL = () => document.documentElement.dir === 'rtl';

const $xqrD$var$defineJQueryPlugin = plugin => {
  $xqrD$var$onDOMContentLoaded(() => {
    const $ = $xqrD$var$getjQuery();
    /* istanbul ignore if */

    if ($) {
      const name = plugin.NAME;
      const JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;

      $.fn[name].noConflict = () => {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};

const $xqrD$var$execute = callback => {
  if (typeof callback === 'function') {
    callback();
  }
};

const $xqrD$var$executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    $xqrD$var$execute(callback);
    return;
  }

  const durationPadding = 5;
  const emulatedDuration = $xqrD$var$getTransitionDurationFromElement(transitionElement) + durationPadding;
  let called = false;

  const handler = ({
    target
  }) => {
    if (target !== transitionElement) {
      return;
    }

    called = true;
    transitionElement.removeEventListener($xqrD$var$TRANSITION_END, handler);
    $xqrD$var$execute(callback);
  };

  transitionElement.addEventListener($xqrD$var$TRANSITION_END, handler);
  setTimeout(() => {
    if (!called) {
      $xqrD$var$triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */


const $xqrD$var$getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
  let index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

  if (index === -1) {
    return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
  }

  const listLength = list.length;
  index += shouldGetNext ? 1 : -1;

  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }

  return list[Math.max(0, Math.min(index, listLength - 1))];
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const $xqrD$var$namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const $xqrD$var$stripNameRegex = /\..*/;
const $xqrD$var$stripUidRegex = /::\d+$/;
const $xqrD$var$eventRegistry = {}; // Events storage

let $xqrD$var$uidEvent = 1;
const $xqrD$var$customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
const $xqrD$var$customEventsRegex = /^(mouseenter|mouseleave)/i;
const $xqrD$var$nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function $xqrD$var$getUidEvent(element, uid) {
  return uid && `${uid}::${$xqrD$var$uidEvent++}` || element.uidEvent || $xqrD$var$uidEvent++;
}

function $xqrD$var$getEvent(element) {
  const uid = $xqrD$var$getUidEvent(element);
  element.uidEvent = uid;
  $xqrD$var$eventRegistry[uid] = $xqrD$var$eventRegistry[uid] || {};
  return $xqrD$var$eventRegistry[uid];
}

function $xqrD$var$bootstrapHandler(element, fn) {
  return function handler(event) {
    event.delegateTarget = element;

    if (handler.oneOff) {
      $xqrD$var$EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function $xqrD$var$bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);

    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (let i = domElements.length; i--;) {
        if (domElements[i] === target) {
          event.delegateTarget = target;

          if (handler.oneOff) {
            $xqrD$var$EventHandler.off(element, event.type, selector, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    } // To please ESLint


    return null;
  };
}

function $xqrD$var$findHandler(events, handler, delegationSelector = null) {
  const uidEventList = Object.keys(events);

  for (let i = 0, len = uidEventList.length; i < len; i++) {
    const event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
      return event;
    }
  }

  return null;
}

function $xqrD$var$normalizeParams(originalTypeEvent, handler, delegationFn) {
  const delegation = typeof handler === 'string';
  const originalHandler = delegation ? delegationFn : handler;
  let typeEvent = $xqrD$var$getTypeEvent(originalTypeEvent);
  const isNative = $xqrD$var$nativeEvents.has(typeEvent);

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function $xqrD$var$addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = null;
  } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does


  if ($xqrD$var$customEventsRegex.test(originalTypeEvent)) {
    const wrapFn = fn => {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };

    if (delegationFn) {
      delegationFn = wrapFn(delegationFn);
    } else {
      handler = wrapFn(handler);
    }
  }

  const [delegation, originalHandler, typeEvent] = $xqrD$var$normalizeParams(originalTypeEvent, handler, delegationFn);
  const events = $xqrD$var$getEvent(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFn = $xqrD$var$findHandler(handlers, originalHandler, delegation ? handler : null);

  if (previousFn) {
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
  }

  const uid = $xqrD$var$getUidEvent(originalHandler, originalTypeEvent.replace($xqrD$var$namespaceRegex, ''));
  const fn = delegation ? $xqrD$var$bootstrapDelegationHandler(element, handler, delegationFn) : $xqrD$var$bootstrapHandler(element, handler);
  fn.delegationSelector = delegation ? handler : null;
  fn.originalHandler = originalHandler;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, delegation);
}

function $xqrD$var$removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn = $xqrD$var$findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function $xqrD$var$removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};
  Object.keys(storeElementEvent).forEach(handlerKey => {
    if (handlerKey.includes(namespace)) {
      const event = storeElementEvent[handlerKey];
      $xqrD$var$removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
    }
  });
}

function $xqrD$var$getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace($xqrD$var$stripNameRegex, '');
  return $xqrD$var$customEvents[event] || event;
}

const $xqrD$var$EventHandler = {
  on(element, event, handler, delegationFn) {
    $xqrD$var$addHandler(element, event, handler, delegationFn, false);
  },

  one(element, event, handler, delegationFn) {
    $xqrD$var$addHandler(element, event, handler, delegationFn, true);
  },

  off(element, originalTypeEvent, handler, delegationFn) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    const [delegation, originalHandler, typeEvent] = $xqrD$var$normalizeParams(originalTypeEvent, handler, delegationFn);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = $xqrD$var$getEvent(element);
    const isNamespace = originalTypeEvent.startsWith('.');

    if (typeof originalHandler !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!events || !events[typeEvent]) {
        return;
      }

      $xqrD$var$removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
      return;
    }

    if (isNamespace) {
      Object.keys(events).forEach(elementEvent => {
        $xqrD$var$removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      });
    }

    const storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(keyHandlers => {
      const handlerKey = keyHandlers.replace($xqrD$var$stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        const event = storeElementEvent[keyHandlers];
        $xqrD$var$removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  },

  trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    const $ = $xqrD$var$getjQuery();
    const typeEvent = $xqrD$var$getTypeEvent(event);
    const inNamespace = event !== typeEvent;
    const isNative = $xqrD$var$nativeEvents.has(typeEvent);
    let jQueryEvent;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;
    let evt = null;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    if (isNative) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(typeEvent, bubbles, true);
    } else {
      evt = new CustomEvent(event, {
        bubbles,
        cancelable: true
      });
    } // merge custom information in our event


    if (typeof args !== 'undefined') {
      Object.keys(args).forEach(key => {
        Object.defineProperty(evt, key, {
          get() {
            return args[key];
          }

        });
      });
    }

    if (defaultPrevented) {
      evt.preventDefault();
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
      jQueryEvent.preventDefault();
    }

    return evt;
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$elementMap = new Map();
const $xqrD$var$Data = {
  set(element, key, instance) {
    if (!$xqrD$var$elementMap.has(element)) {
      $xqrD$var$elementMap.set(element, new Map());
    }

    const instanceMap = $xqrD$var$elementMap.get(element); // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used

    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }

    instanceMap.set(key, instance);
  },

  get(element, key) {
    if ($xqrD$var$elementMap.has(element)) {
      return $xqrD$var$elementMap.get(element).get(key) || null;
    }

    return null;
  },

  remove(element, key) {
    if (!$xqrD$var$elementMap.has(element)) {
      return;
    }

    const instanceMap = $xqrD$var$elementMap.get(element);
    instanceMap.delete(key); // free up element references if there are no instances left for an element

    if (instanceMap.size === 0) {
      $xqrD$var$elementMap.delete(element);
    }
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$VERSION = '5.1.3';

class $xqrD$var$BaseComponent {
  constructor(element) {
    element = $xqrD$var$getElement(element);

    if (!element) {
      return;
    }

    this._element = element;
    $xqrD$var$Data.set(this._element, this.constructor.DATA_KEY, this);
  }

  dispose() {
    $xqrD$var$Data.remove(this._element, this.constructor.DATA_KEY);
    $xqrD$var$EventHandler.off(this._element, this.constructor.EVENT_KEY);
    Object.getOwnPropertyNames(this).forEach(propertyName => {
      this[propertyName] = null;
    });
  }

  _queueCallback(callback, element, isAnimated = true) {
    $xqrD$var$executeAfterTransition(callback, element, isAnimated);
  }
  /** Static */


  static getInstance(element) {
    return $xqrD$var$Data.get($xqrD$var$getElement(element), this.DATA_KEY);
  }

  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
  }

  static get VERSION() {
    return $xqrD$var$VERSION;
  }

  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }

  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }

  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }

}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const $xqrD$var$enableDismissTrigger = (component, method = 'hide') => {
  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
  const name = component.NAME;
  $xqrD$var$EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if ($xqrD$var$isDisabled(this)) {
      return;
    }

    const target = $xqrD$var$getElementFromSelector(this) || this.closest(`.${name}`);
    const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

    instance[method]();
  });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const $xqrD$var$NAME$d = 'alert';
const $xqrD$var$DATA_KEY$c = 'bs.alert';
const $xqrD$var$EVENT_KEY$c = `.${$xqrD$var$DATA_KEY$c}`;
const $xqrD$var$EVENT_CLOSE = `close${$xqrD$var$EVENT_KEY$c}`;
const $xqrD$var$EVENT_CLOSED = `closed${$xqrD$var$EVENT_KEY$c}`;
const $xqrD$var$CLASS_NAME_FADE$5 = 'fade';
const $xqrD$var$CLASS_NAME_SHOW$8 = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Alert extends $xqrD$var$BaseComponent {
  // Getters
  static get NAME() {
    return $xqrD$var$NAME$d;
  } // Public


  close() {
    const closeEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_CLOSE);

    if (closeEvent.defaultPrevented) {
      return;
    }

    this._element.classList.remove($xqrD$var$CLASS_NAME_SHOW$8);

    const isAnimated = this._element.classList.contains($xqrD$var$CLASS_NAME_FADE$5);

    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
  } // Private


  _destroyElement() {
    this._element.remove();

    $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_CLOSED);
    this.dispose();
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Alert.getOrCreateInstance(this);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](this);
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$enableDismissTrigger($xqrD$export$Alert, 'close');
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Alert to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Alert);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$c = 'button';
const $xqrD$var$DATA_KEY$b = 'bs.button';
const $xqrD$var$EVENT_KEY$b = `.${$xqrD$var$DATA_KEY$b}`;
const $xqrD$var$DATA_API_KEY$7 = '.data-api';
const $xqrD$var$CLASS_NAME_ACTIVE$3 = 'active';
const $xqrD$var$SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const $xqrD$var$EVENT_CLICK_DATA_API$6 = `click${$xqrD$var$EVENT_KEY$b}${$xqrD$var$DATA_API_KEY$7}`;
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Button extends $xqrD$var$BaseComponent {
  // Getters
  static get NAME() {
    return $xqrD$var$NAME$c;
  } // Public


  toggle() {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle($xqrD$var$CLASS_NAME_ACTIVE$3));
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Button.getOrCreateInstance(this);

      if (config === 'toggle') {
        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API$6, $xqrD$var$SELECTOR_DATA_TOGGLE$5, event => {
  event.preventDefault();
  const button = event.target.closest($xqrD$var$SELECTOR_DATA_TOGGLE$5);
  const data = $xqrD$export$Button.getOrCreateInstance(button);
  data.toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Button to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Button);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function $xqrD$var$normalizeData(val) {
  if (val === 'true') {
    return true;
  }

  if (val === 'false') {
    return false;
  }

  if (val === Number(val).toString()) {
    return Number(val);
  }

  if (val === '' || val === 'null') {
    return null;
  }

  return val;
}

function $xqrD$var$normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
}

const $xqrD$var$Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${$xqrD$var$normalizeDataKey(key)}`, value);
  },

  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${$xqrD$var$normalizeDataKey(key)}`);
  },

  getDataAttributes(element) {
    if (!element) {
      return {};
    }

    const attributes = {};
    Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
      let pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = $xqrD$var$normalizeData(element.dataset[key]);
    });
    return attributes;
  },

  getDataAttribute(element, key) {
    return $xqrD$var$normalizeData(element.getAttribute(`data-bs-${$xqrD$var$normalizeDataKey(key)}`));
  },

  offset(element) {
    const rect = element.getBoundingClientRect();
    return {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset
    };
  },

  position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const $xqrD$var$NODE_TEXT = 3;
const $xqrD$var$SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },

  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },

  children(element, selector) {
    return [].concat(...element.children).filter(child => child.matches(selector));
  },

  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== $xqrD$var$NODE_TEXT) {
      if (ancestor.matches(selector)) {
        parents.push(ancestor);
      }

      ancestor = ancestor.parentNode;
    }

    return parents;
  },

  prev(element, selector) {
    let previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },

  next(element, selector) {
    let next = element.nextElementSibling;

    while (next) {
      if (next.matches(selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  },

  focusableChildren(element) {
    const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(', ');
    return this.find(focusables, element).filter(el => !$xqrD$var$isDisabled(el) && $xqrD$var$isVisible(el));
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$b = 'carousel';
const $xqrD$var$DATA_KEY$a = 'bs.carousel';
const $xqrD$var$EVENT_KEY$a = `.${$xqrD$var$DATA_KEY$a}`;
const $xqrD$var$DATA_API_KEY$6 = '.data-api';
const $xqrD$var$ARROW_LEFT_KEY = 'ArrowLeft';
const $xqrD$var$ARROW_RIGHT_KEY = 'ArrowRight';
const $xqrD$var$TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

const $xqrD$var$SWIPE_THRESHOLD = 40;
const $xqrD$var$Default$a = {
  interval: 5000,
  keyboard: true,
  slide: false,
  pause: 'hover',
  wrap: true,
  touch: true
};
const $xqrD$var$DefaultType$a = {
  interval: '(number|boolean)',
  keyboard: 'boolean',
  slide: '(boolean|string)',
  pause: '(string|boolean)',
  wrap: 'boolean',
  touch: 'boolean'
};
const $xqrD$var$ORDER_NEXT = 'next';
const $xqrD$var$ORDER_PREV = 'prev';
const $xqrD$var$DIRECTION_LEFT = 'left';
const $xqrD$var$DIRECTION_RIGHT = 'right';
const $xqrD$var$KEY_TO_DIRECTION = {
  [$xqrD$var$ARROW_LEFT_KEY]: $xqrD$var$DIRECTION_RIGHT,
  [$xqrD$var$ARROW_RIGHT_KEY]: $xqrD$var$DIRECTION_LEFT
};
const $xqrD$var$EVENT_SLIDE = `slide${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_SLID = `slid${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_KEYDOWN = `keydown${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_MOUSEENTER = `mouseenter${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_MOUSELEAVE = `mouseleave${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_TOUCHSTART = `touchstart${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_TOUCHMOVE = `touchmove${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_TOUCHEND = `touchend${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_POINTERDOWN = `pointerdown${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_POINTERUP = `pointerup${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_DRAG_START = `dragstart${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_LOAD_DATA_API$2 = `load${$xqrD$var$EVENT_KEY$a}${$xqrD$var$DATA_API_KEY$6}`;
const $xqrD$var$EVENT_CLICK_DATA_API$5 = `click${$xqrD$var$EVENT_KEY$a}${$xqrD$var$DATA_API_KEY$6}`;
const $xqrD$var$CLASS_NAME_CAROUSEL = 'carousel';
const $xqrD$var$CLASS_NAME_ACTIVE$2 = 'active';
const $xqrD$var$CLASS_NAME_SLIDE = 'slide';
const $xqrD$var$CLASS_NAME_END = 'carousel-item-end';
const $xqrD$var$CLASS_NAME_START = 'carousel-item-start';
const $xqrD$var$CLASS_NAME_NEXT = 'carousel-item-next';
const $xqrD$var$CLASS_NAME_PREV = 'carousel-item-prev';
const $xqrD$var$CLASS_NAME_POINTER_EVENT = 'pointer-event';
const $xqrD$var$SELECTOR_ACTIVE$1 = '.active';
const $xqrD$var$SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
const $xqrD$var$SELECTOR_ITEM = '.carousel-item';
const $xqrD$var$SELECTOR_ITEM_IMG = '.carousel-item img';
const $xqrD$var$SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
const $xqrD$var$SELECTOR_INDICATORS = '.carousel-indicators';
const $xqrD$var$SELECTOR_INDICATOR = '[data-bs-target]';
const $xqrD$var$SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const $xqrD$var$SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const $xqrD$var$POINTER_TYPE_TOUCH = 'touch';
const $xqrD$var$POINTER_TYPE_PEN = 'pen';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Carousel extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._items = null;
    this._interval = null;
    this._activeElement = null;
    this._isPaused = false;
    this._isSliding = false;
    this.touchTimeout = null;
    this.touchStartX = 0;
    this.touchDeltaX = 0;
    this._config = this._getConfig(config);
    this._indicatorsElement = $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_INDICATORS, this._element);
    this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    this._pointerEvent = Boolean(window.PointerEvent);

    this._addEventListeners();
  } // Getters


  static get Default() {
    return $xqrD$var$Default$a;
  }

  static get NAME() {
    return $xqrD$var$NAME$b;
  } // Public


  next() {
    this._slide($xqrD$var$ORDER_NEXT);
  }

  nextWhenVisible() {
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && $xqrD$var$isVisible(this._element)) {
      this.next();
    }
  }

  prev() {
    this._slide($xqrD$var$ORDER_PREV);
  }

  pause(event) {
    if (!event) {
      this._isPaused = true;
    }

    if ($xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_NEXT_PREV, this._element)) {
      $xqrD$var$triggerTransitionEnd(this._element);
      this.cycle(true);
    }

    clearInterval(this._interval);
    this._interval = null;
  }

  cycle(event) {
    if (!event) {
      this._isPaused = false;
    }

    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }

    if (this._config && this._config.interval && !this._isPaused) {
      this._updateInterval();

      this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
    }
  }

  to(index) {
    this._activeElement = $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_ACTIVE_ITEM, this._element);

    const activeIndex = this._getItemIndex(this._activeElement);

    if (index > this._items.length - 1 || index < 0) {
      return;
    }

    if (this._isSliding) {
      $xqrD$var$EventHandler.one(this._element, $xqrD$var$EVENT_SLID, () => this.to(index));
      return;
    }

    if (activeIndex === index) {
      this.pause();
      this.cycle();
      return;
    }

    const order = index > activeIndex ? $xqrD$var$ORDER_NEXT : $xqrD$var$ORDER_PREV;

    this._slide(order, this._items[index]);
  } // Private


  _getConfig(config) {
    config = { ...$xqrD$var$Default$a,
      ...$xqrD$var$Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {})
    };
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$b, config, $xqrD$var$DefaultType$a);
    return config;
  }

  _handleSwipe() {
    const absDeltax = Math.abs(this.touchDeltaX);

    if (absDeltax <= $xqrD$var$SWIPE_THRESHOLD) {
      return;
    }

    const direction = absDeltax / this.touchDeltaX;
    this.touchDeltaX = 0;

    if (!direction) {
      return;
    }

    this._slide(direction > 0 ? $xqrD$var$DIRECTION_RIGHT : $xqrD$var$DIRECTION_LEFT);
  }

  _addEventListeners() {
    if (this._config.keyboard) {
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_KEYDOWN, event => this._keydown(event));
    }

    if (this._config.pause === 'hover') {
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_MOUSEENTER, event => this.pause(event));
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_MOUSELEAVE, event => this.cycle(event));
    }

    if (this._config.touch && this._touchSupported) {
      this._addTouchEventListeners();
    }
  }

  _addTouchEventListeners() {
    const hasPointerPenTouch = event => {
      return this._pointerEvent && (event.pointerType === $xqrD$var$POINTER_TYPE_PEN || event.pointerType === $xqrD$var$POINTER_TYPE_TOUCH);
    };

    const start = event => {
      if (hasPointerPenTouch(event)) {
        this.touchStartX = event.clientX;
      } else if (!this._pointerEvent) {
        this.touchStartX = event.touches[0].clientX;
      }
    };

    const move = event => {
      // ensure swiping with one touch and not pinching
      this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
    };

    const end = event => {
      if (hasPointerPenTouch(event)) {
        this.touchDeltaX = event.clientX - this.touchStartX;
      }

      this._handleSwipe();

      if (this._config.pause === 'hover') {
        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling
        this.pause();

        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }

        this.touchTimeout = setTimeout(event => this.cycle(event), $xqrD$var$TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      }
    };

    $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
      $xqrD$var$EventHandler.on(itemImg, $xqrD$var$EVENT_DRAG_START, event => event.preventDefault());
    });

    if (this._pointerEvent) {
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_POINTERDOWN, event => start(event));
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_POINTERUP, event => end(event));

      this._element.classList.add($xqrD$var$CLASS_NAME_POINTER_EVENT);
    } else {
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_TOUCHSTART, event => start(event));
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_TOUCHMOVE, event => move(event));
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_TOUCHEND, event => end(event));
    }
  }

  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }

    const direction = $xqrD$var$KEY_TO_DIRECTION[event.key];

    if (direction) {
      event.preventDefault();

      this._slide(direction);
    }
  }

  _getItemIndex(element) {
    this._items = element && element.parentNode ? $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_ITEM, element.parentNode) : [];
    return this._items.indexOf(element);
  }

  _getItemByOrder(order, activeElement) {
    const isNext = order === $xqrD$var$ORDER_NEXT;
    return $xqrD$var$getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
  }

  _triggerSlideEvent(relatedTarget, eventDirectionName) {
    const targetIndex = this._getItemIndex(relatedTarget);

    const fromIndex = this._getItemIndex($xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_ACTIVE_ITEM, this._element));

    return $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SLIDE, {
      relatedTarget,
      direction: eventDirectionName,
      from: fromIndex,
      to: targetIndex
    });
  }

  _setActiveIndicatorElement(element) {
    if (this._indicatorsElement) {
      const activeIndicator = $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_ACTIVE$1, this._indicatorsElement);
      activeIndicator.classList.remove($xqrD$var$CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute('aria-current');
      const indicators = $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_INDICATOR, this._indicatorsElement);

      for (let i = 0; i < indicators.length; i++) {
        if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
          indicators[i].classList.add($xqrD$var$CLASS_NAME_ACTIVE$2);
          indicators[i].setAttribute('aria-current', 'true');
          break;
        }
      }
    }
  }

  _updateInterval() {
    const element = this._activeElement || $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_ACTIVE_ITEM, this._element);

    if (!element) {
      return;
    }

    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

    if (elementInterval) {
      this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
      this._config.interval = elementInterval;
    } else {
      this._config.interval = this._config.defaultInterval || this._config.interval;
    }
  }

  _slide(directionOrOrder, element) {
    const order = this._directionToOrder(directionOrOrder);

    const activeElement = $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_ACTIVE_ITEM, this._element);

    const activeElementIndex = this._getItemIndex(activeElement);

    const nextElement = element || this._getItemByOrder(order, activeElement);

    const nextElementIndex = this._getItemIndex(nextElement);

    const isCycling = Boolean(this._interval);
    const isNext = order === $xqrD$var$ORDER_NEXT;
    const directionalClassName = isNext ? $xqrD$var$CLASS_NAME_START : $xqrD$var$CLASS_NAME_END;
    const orderClassName = isNext ? $xqrD$var$CLASS_NAME_NEXT : $xqrD$var$CLASS_NAME_PREV;

    const eventDirectionName = this._orderToDirection(order);

    if (nextElement && nextElement.classList.contains($xqrD$var$CLASS_NAME_ACTIVE$2)) {
      this._isSliding = false;
      return;
    }

    if (this._isSliding) {
      return;
    }

    const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

    if (slideEvent.defaultPrevented) {
      return;
    }

    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      return;
    }

    this._isSliding = true;

    if (isCycling) {
      this.pause();
    }

    this._setActiveIndicatorElement(nextElement);

    this._activeElement = nextElement;

    const triggerSlidEvent = () => {
      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });
    };

    if (this._element.classList.contains($xqrD$var$CLASS_NAME_SLIDE)) {
      nextElement.classList.add(orderClassName);
      $xqrD$var$reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);

      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add($xqrD$var$CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove($xqrD$var$CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        setTimeout(triggerSlidEvent, 0);
      };

      this._queueCallback(completeCallBack, activeElement, true);
    } else {
      activeElement.classList.remove($xqrD$var$CLASS_NAME_ACTIVE$2);
      nextElement.classList.add($xqrD$var$CLASS_NAME_ACTIVE$2);
      this._isSliding = false;
      triggerSlidEvent();
    }

    if (isCycling) {
      this.cycle();
    }
  }

  _directionToOrder(direction) {
    if (![$xqrD$var$DIRECTION_RIGHT, $xqrD$var$DIRECTION_LEFT].includes(direction)) {
      return direction;
    }

    if ($xqrD$var$isRTL()) {
      return direction === $xqrD$var$DIRECTION_LEFT ? $xqrD$var$ORDER_PREV : $xqrD$var$ORDER_NEXT;
    }

    return direction === $xqrD$var$DIRECTION_LEFT ? $xqrD$var$ORDER_NEXT : $xqrD$var$ORDER_PREV;
  }

  _orderToDirection(order) {
    if (![$xqrD$var$ORDER_NEXT, $xqrD$var$ORDER_PREV].includes(order)) {
      return order;
    }

    if ($xqrD$var$isRTL()) {
      return order === $xqrD$var$ORDER_PREV ? $xqrD$var$DIRECTION_LEFT : $xqrD$var$DIRECTION_RIGHT;
    }

    return order === $xqrD$var$ORDER_PREV ? $xqrD$var$DIRECTION_RIGHT : $xqrD$var$DIRECTION_LEFT;
  } // Static


  static carouselInterface(element, config) {
    const data = $xqrD$export$Carousel.getOrCreateInstance(element, config);
    let {
      _config
    } = data;

    if (typeof config === 'object') {
      _config = { ..._config,
        ...config
      };
    }

    const action = typeof config === 'string' ? config : _config.slide;

    if (typeof config === 'number') {
      data.to(config);
    } else if (typeof action === 'string') {
      if (typeof data[action] === 'undefined') {
        throw new TypeError(`No method named "${action}"`);
      }

      data[action]();
    } else if (_config.interval && _config.ride) {
      data.pause();
      data.cycle();
    }
  }

  static jQueryInterface(config) {
    return this.each(function () {
      $xqrD$export$Carousel.carouselInterface(this, config);
    });
  }

  static dataApiClickHandler(event) {
    const target = $xqrD$var$getElementFromSelector(this);

    if (!target || !target.classList.contains($xqrD$var$CLASS_NAME_CAROUSEL)) {
      return;
    }

    const config = { ...$xqrD$var$Manipulator.getDataAttributes(target),
      ...$xqrD$var$Manipulator.getDataAttributes(this)
    };
    const slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) {
      config.interval = false;
    }

    $xqrD$export$Carousel.carouselInterface(target, config);

    if (slideIndex) {
      $xqrD$export$Carousel.getInstance(target).to(slideIndex);
    }

    event.preventDefault();
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API$5, $xqrD$var$SELECTOR_DATA_SLIDE, $xqrD$export$Carousel.dataApiClickHandler);
$xqrD$var$EventHandler.on(window, $xqrD$var$EVENT_LOAD_DATA_API$2, () => {
  const carousels = $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_DATA_RIDE);

  for (let i = 0, len = carousels.length; i < len; i++) {
    $xqrD$export$Carousel.carouselInterface(carousels[i], $xqrD$export$Carousel.getInstance(carousels[i]));
  }
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Carousel);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$a = 'collapse';
const $xqrD$var$DATA_KEY$9 = 'bs.collapse';
const $xqrD$var$EVENT_KEY$9 = `.${$xqrD$var$DATA_KEY$9}`;
const $xqrD$var$DATA_API_KEY$5 = '.data-api';
const $xqrD$var$Default$9 = {
  toggle: true,
  parent: null
};
const $xqrD$var$DefaultType$9 = {
  toggle: 'boolean',
  parent: '(null|element)'
};
const $xqrD$var$EVENT_SHOW$5 = `show${$xqrD$var$EVENT_KEY$9}`;
const $xqrD$var$EVENT_SHOWN$5 = `shown${$xqrD$var$EVENT_KEY$9}`;
const $xqrD$var$EVENT_HIDE$5 = `hide${$xqrD$var$EVENT_KEY$9}`;
const $xqrD$var$EVENT_HIDDEN$5 = `hidden${$xqrD$var$EVENT_KEY$9}`;
const $xqrD$var$EVENT_CLICK_DATA_API$4 = `click${$xqrD$var$EVENT_KEY$9}${$xqrD$var$DATA_API_KEY$5}`;
const $xqrD$var$CLASS_NAME_SHOW$7 = 'show';
const $xqrD$var$CLASS_NAME_COLLAPSE = 'collapse';
const $xqrD$var$CLASS_NAME_COLLAPSING = 'collapsing';
const $xqrD$var$CLASS_NAME_COLLAPSED = 'collapsed';
const $xqrD$var$CLASS_NAME_DEEPER_CHILDREN = `:scope .${$xqrD$var$CLASS_NAME_COLLAPSE} .${$xqrD$var$CLASS_NAME_COLLAPSE}`;
const $xqrD$var$CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
const $xqrD$var$WIDTH = 'width';
const $xqrD$var$HEIGHT = 'height';
const $xqrD$var$SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
const $xqrD$var$SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Collapse extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._isTransitioning = false;
    this._config = this._getConfig(config);
    this._triggerArray = [];
    const toggleList = $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_DATA_TOGGLE$4);

    for (let i = 0, len = toggleList.length; i < len; i++) {
      const elem = toggleList[i];
      const selector = $xqrD$var$getSelectorFromElement(elem);
      const filterElement = $xqrD$var$SelectorEngine.find(selector).filter(foundElem => foundElem === this._element);

      if (selector !== null && filterElement.length) {
        this._selector = selector;

        this._triggerArray.push(elem);
      }
    }

    this._initializeChildren();

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
    }

    if (this._config.toggle) {
      this.toggle();
    }
  } // Getters


  static get Default() {
    return $xqrD$var$Default$9;
  }

  static get NAME() {
    return $xqrD$var$NAME$a;
  } // Public


  toggle() {
    if (this._isShown()) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    if (this._isTransitioning || this._isShown()) {
      return;
    }

    let actives = [];
    let activesData;

    if (this._config.parent) {
      const children = $xqrD$var$SelectorEngine.find($xqrD$var$CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      actives = $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_ACTIVES, this._config.parent).filter(elem => !children.includes(elem)); // remove children if greater depth
    }

    const container = $xqrD$var$SelectorEngine.findOne(this._selector);

    if (actives.length) {
      const tempActiveData = actives.find(elem => container !== elem);
      activesData = tempActiveData ? $xqrD$export$Collapse.getInstance(tempActiveData) : null;

      if (activesData && activesData._isTransitioning) {
        return;
      }
    }

    const startEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOW$5);

    if (startEvent.defaultPrevented) {
      return;
    }

    actives.forEach(elemActive => {
      if (container !== elemActive) {
        $xqrD$export$Collapse.getOrCreateInstance(elemActive, {
          toggle: false
        }).hide();
      }

      if (!activesData) {
        $xqrD$var$Data.set(elemActive, $xqrD$var$DATA_KEY$9, null);
      }
    });

    const dimension = this._getDimension();

    this._element.classList.remove($xqrD$var$CLASS_NAME_COLLAPSE);

    this._element.classList.add($xqrD$var$CLASS_NAME_COLLAPSING);

    this._element.style[dimension] = 0;

    this._addAriaAndCollapsedClass(this._triggerArray, true);

    this._isTransitioning = true;

    const complete = () => {
      this._isTransitioning = false;

      this._element.classList.remove($xqrD$var$CLASS_NAME_COLLAPSING);

      this._element.classList.add($xqrD$var$CLASS_NAME_COLLAPSE, $xqrD$var$CLASS_NAME_SHOW$7);

      this._element.style[dimension] = '';
      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOWN$5);
    };

    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;

    this._queueCallback(complete, this._element, true);

    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }

  hide() {
    if (this._isTransitioning || !this._isShown()) {
      return;
    }

    const startEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDE$5);

    if (startEvent.defaultPrevented) {
      return;
    }

    const dimension = this._getDimension();

    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    $xqrD$var$reflow(this._element);

    this._element.classList.add($xqrD$var$CLASS_NAME_COLLAPSING);

    this._element.classList.remove($xqrD$var$CLASS_NAME_COLLAPSE, $xqrD$var$CLASS_NAME_SHOW$7);

    const triggerArrayLength = this._triggerArray.length;

    for (let i = 0; i < triggerArrayLength; i++) {
      const trigger = this._triggerArray[i];
      const elem = $xqrD$var$getElementFromSelector(trigger);

      if (elem && !this._isShown(elem)) {
        this._addAriaAndCollapsedClass([trigger], false);
      }
    }

    this._isTransitioning = true;

    const complete = () => {
      this._isTransitioning = false;

      this._element.classList.remove($xqrD$var$CLASS_NAME_COLLAPSING);

      this._element.classList.add($xqrD$var$CLASS_NAME_COLLAPSE);

      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDDEN$5);
    };

    this._element.style[dimension] = '';

    this._queueCallback(complete, this._element, true);
  }

  _isShown(element = this._element) {
    return element.classList.contains($xqrD$var$CLASS_NAME_SHOW$7);
  } // Private


  _getConfig(config) {
    config = { ...$xqrD$var$Default$9,
      ...$xqrD$var$Manipulator.getDataAttributes(this._element),
      ...config
    };
    config.toggle = Boolean(config.toggle); // Coerce string values

    config.parent = $xqrD$var$getElement(config.parent);
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$a, config, $xqrD$var$DefaultType$9);
    return config;
  }

  _getDimension() {
    return this._element.classList.contains($xqrD$var$CLASS_NAME_HORIZONTAL) ? $xqrD$var$WIDTH : $xqrD$var$HEIGHT;
  }

  _initializeChildren() {
    if (!this._config.parent) {
      return;
    }

    const children = $xqrD$var$SelectorEngine.find($xqrD$var$CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
    $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(elem => !children.includes(elem)).forEach(element => {
      const selected = $xqrD$var$getElementFromSelector(element);

      if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected));
      }
    });
  }

  _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
      return;
    }

    triggerArray.forEach(elem => {
      if (isOpen) {
        elem.classList.remove($xqrD$var$CLASS_NAME_COLLAPSED);
      } else {
        elem.classList.add($xqrD$var$CLASS_NAME_COLLAPSED);
      }

      elem.setAttribute('aria-expanded', isOpen);
    });
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const _config = {};

      if (typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      const data = $xqrD$export$Collapse.getOrCreateInstance(this, _config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API$4, $xqrD$var$SELECTOR_DATA_TOGGLE$4, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
  }

  const selector = $xqrD$var$getSelectorFromElement(this);
  const selectorElements = $xqrD$var$SelectorEngine.find(selector);
  selectorElements.forEach(element => {
    $xqrD$export$Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Collapse);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$9 = 'dropdown';
const $xqrD$var$DATA_KEY$8 = 'bs.dropdown';
const $xqrD$var$EVENT_KEY$8 = `.${$xqrD$var$DATA_KEY$8}`;
const $xqrD$var$DATA_API_KEY$4 = '.data-api';
const $xqrD$var$ESCAPE_KEY$2 = 'Escape';
const $xqrD$var$SPACE_KEY = 'Space';
const $xqrD$var$TAB_KEY$1 = 'Tab';
const $xqrD$var$ARROW_UP_KEY = 'ArrowUp';
const $xqrD$var$ARROW_DOWN_KEY = 'ArrowDown';
const $xqrD$var$RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

const $xqrD$var$REGEXP_KEYDOWN = new RegExp(`${$xqrD$var$ARROW_UP_KEY}|${$xqrD$var$ARROW_DOWN_KEY}|${$xqrD$var$ESCAPE_KEY$2}`);
const $xqrD$var$EVENT_HIDE$4 = `hide${$xqrD$var$EVENT_KEY$8}`;
const $xqrD$var$EVENT_HIDDEN$4 = `hidden${$xqrD$var$EVENT_KEY$8}`;
const $xqrD$var$EVENT_SHOW$4 = `show${$xqrD$var$EVENT_KEY$8}`;
const $xqrD$var$EVENT_SHOWN$4 = `shown${$xqrD$var$EVENT_KEY$8}`;
const $xqrD$var$EVENT_CLICK_DATA_API$3 = `click${$xqrD$var$EVENT_KEY$8}${$xqrD$var$DATA_API_KEY$4}`;
const $xqrD$var$EVENT_KEYDOWN_DATA_API = `keydown${$xqrD$var$EVENT_KEY$8}${$xqrD$var$DATA_API_KEY$4}`;
const $xqrD$var$EVENT_KEYUP_DATA_API = `keyup${$xqrD$var$EVENT_KEY$8}${$xqrD$var$DATA_API_KEY$4}`;
const $xqrD$var$CLASS_NAME_SHOW$6 = 'show';
const $xqrD$var$CLASS_NAME_DROPUP = 'dropup';
const $xqrD$var$CLASS_NAME_DROPEND = 'dropend';
const $xqrD$var$CLASS_NAME_DROPSTART = 'dropstart';
const $xqrD$var$CLASS_NAME_NAVBAR = 'navbar';
const $xqrD$var$SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
const $xqrD$var$SELECTOR_MENU = '.dropdown-menu';
const $xqrD$var$SELECTOR_NAVBAR_NAV = '.navbar-nav';
const $xqrD$var$SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const $xqrD$var$PLACEMENT_TOP = $xqrD$var$isRTL() ? 'top-end' : 'top-start';
const $xqrD$var$PLACEMENT_TOPEND = $xqrD$var$isRTL() ? 'top-start' : 'top-end';
const $xqrD$var$PLACEMENT_BOTTOM = $xqrD$var$isRTL() ? 'bottom-end' : 'bottom-start';
const $xqrD$var$PLACEMENT_BOTTOMEND = $xqrD$var$isRTL() ? 'bottom-start' : 'bottom-end';
const $xqrD$var$PLACEMENT_RIGHT = $xqrD$var$isRTL() ? 'left-start' : 'right-start';
const $xqrD$var$PLACEMENT_LEFT = $xqrD$var$isRTL() ? 'right-start' : 'left-start';
const $xqrD$var$Default$8 = {
  offset: [0, 2],
  boundary: 'clippingParents',
  reference: 'toggle',
  display: 'dynamic',
  popperConfig: null,
  autoClose: true
};
const $xqrD$var$DefaultType$8 = {
  offset: '(array|string|function)',
  boundary: '(string|element)',
  reference: '(string|element|object)',
  display: 'string',
  popperConfig: '(null|object|function)',
  autoClose: '(boolean|string)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Dropdown extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._popper = null;
    this._config = this._getConfig(config);
    this._menu = this._getMenuElement();
    this._inNavbar = this._detectNavbar();
  } // Getters


  static get Default() {
    return $xqrD$var$Default$8;
  }

  static get DefaultType() {
    return $xqrD$var$DefaultType$8;
  }

  static get NAME() {
    return $xqrD$var$NAME$9;
  } // Public


  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }

  show() {
    if ($xqrD$var$isDisabled(this._element) || this._isShown(this._menu)) {
      return;
    }

    const relatedTarget = {
      relatedTarget: this._element
    };
    const showEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOW$4, relatedTarget);

    if (showEvent.defaultPrevented) {
      return;
    }

    const parent = $xqrD$export$Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

    if (this._inNavbar) {
      $xqrD$var$Manipulator.setDataAttribute(this._menu, 'popper', 'none');
    } else {
      this._createPopper(parent);
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement && !parent.closest($xqrD$var$SELECTOR_NAVBAR_NAV)) {
      [].concat(...document.body.children).forEach(elem => $xqrD$var$EventHandler.on(elem, 'mouseover', $xqrD$var$noop));
    }

    this._element.focus();

    this._element.setAttribute('aria-expanded', true);

    this._menu.classList.add($xqrD$var$CLASS_NAME_SHOW$6);

    this._element.classList.add($xqrD$var$CLASS_NAME_SHOW$6);

    $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOWN$4, relatedTarget);
  }

  hide() {
    if ($xqrD$var$isDisabled(this._element) || !this._isShown(this._menu)) {
      return;
    }

    const relatedTarget = {
      relatedTarget: this._element
    };

    this._completeHide(relatedTarget);
  }

  dispose() {
    if (this._popper) {
      this._popper.destroy();
    }

    super.dispose();
  }

  update() {
    this._inNavbar = this._detectNavbar();

    if (this._popper) {
      this._popper.update();
    }
  } // Private


  _completeHide(relatedTarget) {
    const hideEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDE$4, relatedTarget);

    if (hideEvent.defaultPrevented) {
      return;
    } // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support


    if ('ontouchstart' in document.documentElement) {
      [].concat(...document.body.children).forEach(elem => $xqrD$var$EventHandler.off(elem, 'mouseover', $xqrD$var$noop));
    }

    if (this._popper) {
      this._popper.destroy();
    }

    this._menu.classList.remove($xqrD$var$CLASS_NAME_SHOW$6);

    this._element.classList.remove($xqrD$var$CLASS_NAME_SHOW$6);

    this._element.setAttribute('aria-expanded', 'false');

    $xqrD$var$Manipulator.removeDataAttribute(this._menu, 'popper');
    $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDDEN$4, relatedTarget);
  }

  _getConfig(config) {
    config = { ...this.constructor.Default,
      ...$xqrD$var$Manipulator.getDataAttributes(this._element),
      ...config
    };
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$9, config, this.constructor.DefaultType);

    if (typeof config.reference === 'object' && !$xqrD$var$isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
      // Popper virtual elements require a getBoundingClientRect method
      throw new TypeError(`${$xqrD$var$NAME$9.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    }

    return config;
  }

  _createPopper(parent) {
    if (typeof $vePw$exports === 'undefined') {
      throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
    }

    let referenceElement = this._element;

    if (this._config.reference === 'parent') {
      referenceElement = parent;
    } else if ($xqrD$var$isElement(this._config.reference)) {
      referenceElement = $xqrD$var$getElement(this._config.reference);
    } else if (typeof this._config.reference === 'object') {
      referenceElement = this._config.reference;
    }

    const popperConfig = this._getPopperConfig();

    const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
    this._popper = $cujj$export$createPopper(referenceElement, this._menu, popperConfig);

    if (isDisplayStatic) {
      $xqrD$var$Manipulator.setDataAttribute(this._menu, 'popper', 'static');
    }
  }

  _isShown(element = this._element) {
    return element.classList.contains($xqrD$var$CLASS_NAME_SHOW$6);
  }

  _getMenuElement() {
    return $xqrD$var$SelectorEngine.next(this._element, $xqrD$var$SELECTOR_MENU)[0];
  }

  _getPlacement() {
    const parentDropdown = this._element.parentNode;

    if (parentDropdown.classList.contains($xqrD$var$CLASS_NAME_DROPEND)) {
      return $xqrD$var$PLACEMENT_RIGHT;
    }

    if (parentDropdown.classList.contains($xqrD$var$CLASS_NAME_DROPSTART)) {
      return $xqrD$var$PLACEMENT_LEFT;
    } // We need to trim the value because custom properties can also include spaces


    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

    if (parentDropdown.classList.contains($xqrD$var$CLASS_NAME_DROPUP)) {
      return isEnd ? $xqrD$var$PLACEMENT_TOPEND : $xqrD$var$PLACEMENT_TOP;
    }

    return isEnd ? $xqrD$var$PLACEMENT_BOTTOMEND : $xqrD$var$PLACEMENT_BOTTOM;
  }

  _detectNavbar() {
    return this._element.closest(`.${$xqrD$var$CLASS_NAME_NAVBAR}`) !== null;
  }

  _getOffset() {
    const {
      offset
    } = this._config;

    if (typeof offset === 'string') {
      return offset.split(',').map(val => Number.parseInt(val, 10));
    }

    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }

    return offset;
  }

  _getPopperConfig() {
    const defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }]
    }; // Disable Popper if we have a static display

    if (this._config.display === 'static') {
      defaultBsPopperConfig.modifiers = [{
        name: 'applyStyles',
        enabled: false
      }];
    }

    return { ...defaultBsPopperConfig,
      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
    };
  }

  _selectMenuItem({
    key,
    target
  }) {
    const items = $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_VISIBLE_ITEMS, this._menu).filter($xqrD$var$isVisible);

    if (!items.length) {
      return;
    } // if target isn't included in items (e.g. when expanding the dropdown)
    // allow cycling to get the last item in case key equals ARROW_UP_KEY


    $xqrD$var$getNextActiveElement(items, target, key === $xqrD$var$ARROW_DOWN_KEY, !items.includes(target)).focus();
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Dropdown.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

  static clearMenus(event) {
    if (event && (event.button === $xqrD$var$RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== $xqrD$var$TAB_KEY$1)) {
      return;
    }

    const toggles = $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_DATA_TOGGLE$3);

    for (let i = 0, len = toggles.length; i < len; i++) {
      const context = $xqrD$export$Dropdown.getInstance(toggles[i]);

      if (!context || context._config.autoClose === false) {
        continue;
      }

      if (!context._isShown()) {
        continue;
      }

      const relatedTarget = {
        relatedTarget: context._element
      };

      if (event) {
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);

        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
          continue;
        } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === $xqrD$var$TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }

        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
        }
      }

      context._completeHide(relatedTarget);
    }
  }

  static getParentFromElement(element) {
    return $xqrD$var$getElementFromSelector(element) || element.parentNode;
  }

  static dataApiKeydownHandler(event) {
    // If not input/textarea:
    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
    // If input/textarea:
    //  - If space key => not a dropdown command
    //  - If key is other than escape
    //    - If key is not up or down => not a dropdown command
    //    - If trigger inside the menu => not a dropdown command
    if (/input|textarea/i.test(event.target.tagName) ? event.key === $xqrD$var$SPACE_KEY || event.key !== $xqrD$var$ESCAPE_KEY$2 && (event.key !== $xqrD$var$ARROW_DOWN_KEY && event.key !== $xqrD$var$ARROW_UP_KEY || event.target.closest($xqrD$var$SELECTOR_MENU)) : !$xqrD$var$REGEXP_KEYDOWN.test(event.key)) {
      return;
    }

    const isActive = this.classList.contains($xqrD$var$CLASS_NAME_SHOW$6);

    if (!isActive && event.key === $xqrD$var$ESCAPE_KEY$2) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if ($xqrD$var$isDisabled(this)) {
      return;
    }

    const getToggleButton = this.matches($xqrD$var$SELECTOR_DATA_TOGGLE$3) ? this : $xqrD$var$SelectorEngine.prev(this, $xqrD$var$SELECTOR_DATA_TOGGLE$3)[0];
    const instance = $xqrD$export$Dropdown.getOrCreateInstance(getToggleButton);

    if (event.key === $xqrD$var$ESCAPE_KEY$2) {
      instance.hide();
      return;
    }

    if (event.key === $xqrD$var$ARROW_UP_KEY || event.key === $xqrD$var$ARROW_DOWN_KEY) {
      if (!isActive) {
        instance.show();
      }

      instance._selectMenuItem(event);

      return;
    }

    if (!isActive || event.key === $xqrD$var$SPACE_KEY) {
      $xqrD$export$Dropdown.clearMenus();
    }
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_KEYDOWN_DATA_API, $xqrD$var$SELECTOR_DATA_TOGGLE$3, $xqrD$export$Dropdown.dataApiKeydownHandler);
$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_KEYDOWN_DATA_API, $xqrD$var$SELECTOR_MENU, $xqrD$export$Dropdown.dataApiKeydownHandler);
$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API$3, $xqrD$export$Dropdown.clearMenus);
$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_KEYUP_DATA_API, $xqrD$export$Dropdown.clearMenus);
$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API$3, $xqrD$var$SELECTOR_DATA_TOGGLE$3, function (event) {
  event.preventDefault();
  $xqrD$export$Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Dropdown to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Dropdown);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const $xqrD$var$SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const $xqrD$var$SELECTOR_STICKY_CONTENT = '.sticky-top';

class $xqrD$var$ScrollBarHelper {
  constructor() {
    this._element = document.body;
  }

  getWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }

  hide() {
    const width = this.getWidth();

    this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


    this._setElementAttributes(this._element, 'paddingRight', calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


    this._setElementAttributes($xqrD$var$SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);

    this._setElementAttributes($xqrD$var$SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);
  }

  _disableOverFlow() {
    this._saveInitialAttribute(this._element, 'overflow');

    this._element.style.overflow = 'hidden';
  }

  _setElementAttributes(selector, styleProp, callback) {
    const scrollbarWidth = this.getWidth();

    const manipulationCallBack = element => {
      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }

      this._saveInitialAttribute(element, styleProp);

      const calculatedValue = window.getComputedStyle(element)[styleProp];
      element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
    };

    this._applyManipulationCallback(selector, manipulationCallBack);
  }

  reset() {
    this._resetElementAttributes(this._element, 'overflow');

    this._resetElementAttributes(this._element, 'paddingRight');

    this._resetElementAttributes($xqrD$var$SELECTOR_FIXED_CONTENT, 'paddingRight');

    this._resetElementAttributes($xqrD$var$SELECTOR_STICKY_CONTENT, 'marginRight');
  }

  _saveInitialAttribute(element, styleProp) {
    const actualValue = element.style[styleProp];

    if (actualValue) {
      $xqrD$var$Manipulator.setDataAttribute(element, styleProp, actualValue);
    }
  }

  _resetElementAttributes(selector, styleProp) {
    const manipulationCallBack = element => {
      const value = $xqrD$var$Manipulator.getDataAttribute(element, styleProp);

      if (typeof value === 'undefined') {
        element.style.removeProperty(styleProp);
      } else {
        $xqrD$var$Manipulator.removeDataAttribute(element, styleProp);
        element.style[styleProp] = value;
      }
    };

    this._applyManipulationCallback(selector, manipulationCallBack);
  }

  _applyManipulationCallback(selector, callBack) {
    if ($xqrD$var$isElement(selector)) {
      callBack(selector);
    } else {
      $xqrD$var$SelectorEngine.find(selector, this._element).forEach(callBack);
    }
  }

  isOverflowing() {
    return this.getWidth() > 0;
  }

}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const $xqrD$var$Default$7 = {
  className: 'modal-backdrop',
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  isAnimated: false,
  rootElement: 'body',
  // give the choice to place backdrop under different elements
  clickCallback: null
};
const $xqrD$var$DefaultType$7 = {
  className: 'string',
  isVisible: 'boolean',
  isAnimated: 'boolean',
  rootElement: '(element|string)',
  clickCallback: '(function|null)'
};
const $xqrD$var$NAME$8 = 'backdrop';
const $xqrD$var$CLASS_NAME_FADE$4 = 'fade';
const $xqrD$var$CLASS_NAME_SHOW$5 = 'show';
const $xqrD$var$EVENT_MOUSEDOWN = `mousedown.bs.${$xqrD$var$NAME$8}`;

class $xqrD$var$Backdrop {
  constructor(config) {
    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  }

  show(callback) {
    if (!this._config.isVisible) {
      $xqrD$var$execute(callback);
      return;
    }

    this._append();

    if (this._config.isAnimated) {
      $xqrD$var$reflow(this._getElement());
    }

    this._getElement().classList.add($xqrD$var$CLASS_NAME_SHOW$5);

    this._emulateAnimation(() => {
      $xqrD$var$execute(callback);
    });
  }

  hide(callback) {
    if (!this._config.isVisible) {
      $xqrD$var$execute(callback);
      return;
    }

    this._getElement().classList.remove($xqrD$var$CLASS_NAME_SHOW$5);

    this._emulateAnimation(() => {
      this.dispose();
      $xqrD$var$execute(callback);
    });
  } // Private


  _getElement() {
    if (!this._element) {
      const backdrop = document.createElement('div');
      backdrop.className = this._config.className;

      if (this._config.isAnimated) {
        backdrop.classList.add($xqrD$var$CLASS_NAME_FADE$4);
      }

      this._element = backdrop;
    }

    return this._element;
  }

  _getConfig(config) {
    config = { ...$xqrD$var$Default$7,
      ...(typeof config === 'object' ? config : {})
    }; // use getElement() with the default "body" to get a fresh Element on each instantiation

    config.rootElement = $xqrD$var$getElement(config.rootElement);
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$8, config, $xqrD$var$DefaultType$7);
    return config;
  }

  _append() {
    if (this._isAppended) {
      return;
    }

    this._config.rootElement.append(this._getElement());

    $xqrD$var$EventHandler.on(this._getElement(), $xqrD$var$EVENT_MOUSEDOWN, () => {
      $xqrD$var$execute(this._config.clickCallback);
    });
    this._isAppended = true;
  }

  dispose() {
    if (!this._isAppended) {
      return;
    }

    $xqrD$var$EventHandler.off(this._element, $xqrD$var$EVENT_MOUSEDOWN);

    this._element.remove();

    this._isAppended = false;
  }

  _emulateAnimation(callback) {
    $xqrD$var$executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
  }

}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const $xqrD$var$Default$6 = {
  trapElement: null,
  // The element to trap focus inside of
  autofocus: true
};
const $xqrD$var$DefaultType$6 = {
  trapElement: 'element',
  autofocus: 'boolean'
};
const $xqrD$var$NAME$7 = 'focustrap';
const $xqrD$var$DATA_KEY$7 = 'bs.focustrap';
const $xqrD$var$EVENT_KEY$7 = `.${$xqrD$var$DATA_KEY$7}`;
const $xqrD$var$EVENT_FOCUSIN$1 = `focusin${$xqrD$var$EVENT_KEY$7}`;
const $xqrD$var$EVENT_KEYDOWN_TAB = `keydown.tab${$xqrD$var$EVENT_KEY$7}`;
const $xqrD$var$TAB_KEY = 'Tab';
const $xqrD$var$TAB_NAV_FORWARD = 'forward';
const $xqrD$var$TAB_NAV_BACKWARD = 'backward';

class $xqrD$var$FocusTrap {
  constructor(config) {
    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  }

  activate() {
    const {
      trapElement,
      autofocus
    } = this._config;

    if (this._isActive) {
      return;
    }

    if (autofocus) {
      trapElement.focus();
    }

    $xqrD$var$EventHandler.off(document, $xqrD$var$EVENT_KEY$7); // guard against infinite focus loop

    $xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_FOCUSIN$1, event => this._handleFocusin(event));
    $xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
    this._isActive = true;
  }

  deactivate() {
    if (!this._isActive) {
      return;
    }

    this._isActive = false;
    $xqrD$var$EventHandler.off(document, $xqrD$var$EVENT_KEY$7);
  } // Private


  _handleFocusin(event) {
    const {
      target
    } = event;
    const {
      trapElement
    } = this._config;

    if (target === document || target === trapElement || trapElement.contains(target)) {
      return;
    }

    const elements = $xqrD$var$SelectorEngine.focusableChildren(trapElement);

    if (elements.length === 0) {
      trapElement.focus();
    } else if (this._lastTabNavDirection === $xqrD$var$TAB_NAV_BACKWARD) {
      elements[elements.length - 1].focus();
    } else {
      elements[0].focus();
    }
  }

  _handleKeydown(event) {
    if (event.key !== $xqrD$var$TAB_KEY) {
      return;
    }

    this._lastTabNavDirection = event.shiftKey ? $xqrD$var$TAB_NAV_BACKWARD : $xqrD$var$TAB_NAV_FORWARD;
  }

  _getConfig(config) {
    config = { ...$xqrD$var$Default$6,
      ...(typeof config === 'object' ? config : {})
    };
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$7, config, $xqrD$var$DefaultType$6);
    return config;
  }

}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const $xqrD$var$NAME$6 = 'modal';
const $xqrD$var$DATA_KEY$6 = 'bs.modal';
const $xqrD$var$EVENT_KEY$6 = `.${$xqrD$var$DATA_KEY$6}`;
const $xqrD$var$DATA_API_KEY$3 = '.data-api';
const $xqrD$var$ESCAPE_KEY$1 = 'Escape';
const $xqrD$var$Default$5 = {
  backdrop: true,
  keyboard: true,
  focus: true
};
const $xqrD$var$DefaultType$5 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean'
};
const $xqrD$var$EVENT_HIDE$3 = `hide${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_HIDE_PREVENTED = `hidePrevented${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_HIDDEN$3 = `hidden${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_SHOW$3 = `show${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_SHOWN$3 = `shown${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_RESIZE = `resize${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_CLICK_DISMISS = `click.dismiss${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_CLICK_DATA_API$2 = `click${$xqrD$var$EVENT_KEY$6}${$xqrD$var$DATA_API_KEY$3}`;
const $xqrD$var$CLASS_NAME_OPEN = 'modal-open';
const $xqrD$var$CLASS_NAME_FADE$3 = 'fade';
const $xqrD$var$CLASS_NAME_SHOW$4 = 'show';
const $xqrD$var$CLASS_NAME_STATIC = 'modal-static';
const $xqrD$var$OPEN_SELECTOR$1 = '.modal.show';
const $xqrD$var$SELECTOR_DIALOG = '.modal-dialog';
const $xqrD$var$SELECTOR_MODAL_BODY = '.modal-body';
const $xqrD$var$SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Modal extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._dialog = $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._ignoreBackdropClick = false;
    this._isTransitioning = false;
    this._scrollBar = new $xqrD$var$ScrollBarHelper();
  } // Getters


  static get Default() {
    return $xqrD$var$Default$5;
  }

  static get NAME() {
    return $xqrD$var$NAME$6;
  } // Public


  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return;
    }

    const showEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOW$3, {
      relatedTarget
    });

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;

    if (this._isAnimated()) {
      this._isTransitioning = true;
    }

    this._scrollBar.hide();

    document.body.classList.add($xqrD$var$CLASS_NAME_OPEN);

    this._adjustDialog();

    this._setEscapeEvent();

    this._setResizeEvent();

    $xqrD$var$EventHandler.on(this._dialog, $xqrD$var$EVENT_MOUSEDOWN_DISMISS, () => {
      $xqrD$var$EventHandler.one(this._element, $xqrD$var$EVENT_MOUSEUP_DISMISS, event => {
        if (event.target === this._element) {
          this._ignoreBackdropClick = true;
        }
      });
    });

    this._showBackdrop(() => this._showElement(relatedTarget));
  }

  hide() {
    if (!this._isShown || this._isTransitioning) {
      return;
    }

    const hideEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDE$3);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._isShown = false;

    const isAnimated = this._isAnimated();

    if (isAnimated) {
      this._isTransitioning = true;
    }

    this._setEscapeEvent();

    this._setResizeEvent();

    this._focustrap.deactivate();

    this._element.classList.remove($xqrD$var$CLASS_NAME_SHOW$4);

    $xqrD$var$EventHandler.off(this._element, $xqrD$var$EVENT_CLICK_DISMISS);
    $xqrD$var$EventHandler.off(this._dialog, $xqrD$var$EVENT_MOUSEDOWN_DISMISS);

    this._queueCallback(() => this._hideModal(), this._element, isAnimated);
  }

  dispose() {
    [window, this._dialog].forEach(htmlElement => $xqrD$var$EventHandler.off(htmlElement, $xqrD$var$EVENT_KEY$6));

    this._backdrop.dispose();

    this._focustrap.deactivate();

    super.dispose();
  }

  handleUpdate() {
    this._adjustDialog();
  } // Private


  _initializeBackDrop() {
    return new $xqrD$var$Backdrop({
      isVisible: Boolean(this._config.backdrop),
      // 'static' option will be translated to true, and booleans will keep their value
      isAnimated: this._isAnimated()
    });
  }

  _initializeFocusTrap() {
    return new $xqrD$var$FocusTrap({
      trapElement: this._element
    });
  }

  _getConfig(config) {
    config = { ...$xqrD$var$Default$5,
      ...$xqrD$var$Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {})
    };
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$6, config, $xqrD$var$DefaultType$5);
    return config;
  }

  _showElement(relatedTarget) {
    const isAnimated = this._isAnimated();

    const modalBody = $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_MODAL_BODY, this._dialog);

    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
      // Don't move modal's DOM position
      document.body.append(this._element);
    }

    this._element.style.display = 'block';

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.scrollTop = 0;

    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    if (isAnimated) {
      $xqrD$var$reflow(this._element);
    }

    this._element.classList.add($xqrD$var$CLASS_NAME_SHOW$4);

    const transitionComplete = () => {
      if (this._config.focus) {
        this._focustrap.activate();
      }

      this._isTransitioning = false;
      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOWN$3, {
        relatedTarget
      });
    };

    this._queueCallback(transitionComplete, this._dialog, isAnimated);
  }

  _setEscapeEvent() {
    if (this._isShown) {
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_KEYDOWN_DISMISS$1, event => {
        if (this._config.keyboard && event.key === $xqrD$var$ESCAPE_KEY$1) {
          event.preventDefault();
          this.hide();
        } else if (!this._config.keyboard && event.key === $xqrD$var$ESCAPE_KEY$1) {
          this._triggerBackdropTransition();
        }
      });
    } else {
      $xqrD$var$EventHandler.off(this._element, $xqrD$var$EVENT_KEYDOWN_DISMISS$1);
    }
  }

  _setResizeEvent() {
    if (this._isShown) {
      $xqrD$var$EventHandler.on(window, $xqrD$var$EVENT_RESIZE, () => this._adjustDialog());
    } else {
      $xqrD$var$EventHandler.off(window, $xqrD$var$EVENT_RESIZE);
    }
  }

  _hideModal() {
    this._element.style.display = 'none';

    this._element.setAttribute('aria-hidden', true);

    this._element.removeAttribute('aria-modal');

    this._element.removeAttribute('role');

    this._isTransitioning = false;

    this._backdrop.hide(() => {
      document.body.classList.remove($xqrD$var$CLASS_NAME_OPEN);

      this._resetAdjustments();

      this._scrollBar.reset();

      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDDEN$3);
    });
  }

  _showBackdrop(callback) {
    $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_CLICK_DISMISS, event => {
      if (this._ignoreBackdropClick) {
        this._ignoreBackdropClick = false;
        return;
      }

      if (event.target !== event.currentTarget) {
        return;
      }

      if (this._config.backdrop === true) {
        this.hide();
      } else if (this._config.backdrop === 'static') {
        this._triggerBackdropTransition();
      }
    });

    this._backdrop.show(callback);
  }

  _isAnimated() {
    return this._element.classList.contains($xqrD$var$CLASS_NAME_FADE$3);
  }

  _triggerBackdropTransition() {
    const hideEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDE_PREVENTED);

    if (hideEvent.defaultPrevented) {
      return;
    }

    const {
      classList,
      scrollHeight,
      style
    } = this._element;
    const isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

    if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains($xqrD$var$CLASS_NAME_STATIC)) {
      return;
    }

    if (!isModalOverflowing) {
      style.overflowY = 'hidden';
    }

    classList.add($xqrD$var$CLASS_NAME_STATIC);

    this._queueCallback(() => {
      classList.remove($xqrD$var$CLASS_NAME_STATIC);

      if (!isModalOverflowing) {
        this._queueCallback(() => {
          style.overflowY = '';
        }, this._dialog);
      }
    }, this._dialog);

    this._element.focus();
  } // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------


  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    const scrollbarWidth = this._scrollBar.getWidth();

    const isBodyOverflowing = scrollbarWidth > 0;

    if (!isBodyOverflowing && isModalOverflowing && !$xqrD$var$isRTL() || isBodyOverflowing && !isModalOverflowing && $xqrD$var$isRTL()) {
      this._element.style.paddingLeft = `${scrollbarWidth}px`;
    }

    if (isBodyOverflowing && !isModalOverflowing && !$xqrD$var$isRTL() || !isBodyOverflowing && isModalOverflowing && $xqrD$var$isRTL()) {
      this._element.style.paddingRight = `${scrollbarWidth}px`;
    }
  }

  _resetAdjustments() {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  } // Static


  static jQueryInterface(config, relatedTarget) {
    return this.each(function () {
      const data = $xqrD$export$Modal.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](relatedTarget);
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API$2, $xqrD$var$SELECTOR_DATA_TOGGLE$2, function (event) {
  const target = $xqrD$var$getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  $xqrD$var$EventHandler.one(target, $xqrD$var$EVENT_SHOW$3, showEvent => {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }

    $xqrD$var$EventHandler.one(target, $xqrD$var$EVENT_HIDDEN$3, () => {
      if ($xqrD$var$isVisible(this)) {
        this.focus();
      }
    });
  }); // avoid conflict when clicking moddal toggler while another one is open

  const allReadyOpen = $xqrD$var$SelectorEngine.findOne($xqrD$var$OPEN_SELECTOR$1);

  if (allReadyOpen) {
    $xqrD$export$Modal.getInstance(allReadyOpen).hide();
  }

  const data = $xqrD$export$Modal.getOrCreateInstance(target);
  data.toggle(this);
});
$xqrD$var$enableDismissTrigger($xqrD$export$Modal);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Modal to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Modal);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$5 = 'offcanvas';
const $xqrD$var$DATA_KEY$5 = 'bs.offcanvas';
const $xqrD$var$EVENT_KEY$5 = `.${$xqrD$var$DATA_KEY$5}`;
const $xqrD$var$DATA_API_KEY$2 = '.data-api';
const $xqrD$var$EVENT_LOAD_DATA_API$1 = `load${$xqrD$var$EVENT_KEY$5}${$xqrD$var$DATA_API_KEY$2}`;
const $xqrD$var$ESCAPE_KEY = 'Escape';
const $xqrD$var$Default$4 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
const $xqrD$var$DefaultType$4 = {
  backdrop: 'boolean',
  keyboard: 'boolean',
  scroll: 'boolean'
};
const $xqrD$var$CLASS_NAME_SHOW$3 = 'show';
const $xqrD$var$CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
const $xqrD$var$OPEN_SELECTOR = '.offcanvas.show';
const $xqrD$var$EVENT_SHOW$2 = `show${$xqrD$var$EVENT_KEY$5}`;
const $xqrD$var$EVENT_SHOWN$2 = `shown${$xqrD$var$EVENT_KEY$5}`;
const $xqrD$var$EVENT_HIDE$2 = `hide${$xqrD$var$EVENT_KEY$5}`;
const $xqrD$var$EVENT_HIDDEN$2 = `hidden${$xqrD$var$EVENT_KEY$5}`;
const $xqrD$var$EVENT_CLICK_DATA_API$1 = `click${$xqrD$var$EVENT_KEY$5}${$xqrD$var$DATA_API_KEY$2}`;
const $xqrD$var$EVENT_KEYDOWN_DISMISS = `keydown.dismiss${$xqrD$var$EVENT_KEY$5}`;
const $xqrD$var$SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Offcanvas extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();

    this._addEventListeners();
  } // Getters


  static get NAME() {
    return $xqrD$var$NAME$5;
  }

  static get Default() {
    return $xqrD$var$Default$4;
  } // Public


  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown) {
      return;
    }

    const showEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOW$2, {
      relatedTarget
    });

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;
    this._element.style.visibility = 'visible';

    this._backdrop.show();

    if (!this._config.scroll) {
      new $xqrD$var$ScrollBarHelper().hide();
    }

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.classList.add($xqrD$var$CLASS_NAME_SHOW$3);

    const completeCallBack = () => {
      if (!this._config.scroll) {
        this._focustrap.activate();
      }

      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOWN$2, {
        relatedTarget
      });
    };

    this._queueCallback(completeCallBack, this._element, true);
  }

  hide() {
    if (!this._isShown) {
      return;
    }

    const hideEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDE$2);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._focustrap.deactivate();

    this._element.blur();

    this._isShown = false;

    this._element.classList.remove($xqrD$var$CLASS_NAME_SHOW$3);

    this._backdrop.hide();

    const completeCallback = () => {
      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._element.style.visibility = 'hidden';

      if (!this._config.scroll) {
        new $xqrD$var$ScrollBarHelper().reset();
      }

      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDDEN$2);
    };

    this._queueCallback(completeCallback, this._element, true);
  }

  dispose() {
    this._backdrop.dispose();

    this._focustrap.deactivate();

    super.dispose();
  } // Private


  _getConfig(config) {
    config = { ...$xqrD$var$Default$4,
      ...$xqrD$var$Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {})
    };
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$5, config, $xqrD$var$DefaultType$4);
    return config;
  }

  _initializeBackDrop() {
    return new $xqrD$var$Backdrop({
      className: $xqrD$var$CLASS_NAME_BACKDROP,
      isVisible: this._config.backdrop,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: () => this.hide()
    });
  }

  _initializeFocusTrap() {
    return new $xqrD$var$FocusTrap({
      trapElement: this._element
    });
  }

  _addEventListeners() {
    $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_KEYDOWN_DISMISS, event => {
      if (this._config.keyboard && event.key === $xqrD$var$ESCAPE_KEY) {
        this.hide();
      }
    });
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Offcanvas.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](this);
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API$1, $xqrD$var$SELECTOR_DATA_TOGGLE$1, function (event) {
  const target = $xqrD$var$getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if ($xqrD$var$isDisabled(this)) {
    return;
  }

  $xqrD$var$EventHandler.one(target, $xqrD$var$EVENT_HIDDEN$2, () => {
    // focus on trigger when it is closed
    if ($xqrD$var$isVisible(this)) {
      this.focus();
    }
  }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

  const allReadyOpen = $xqrD$var$SelectorEngine.findOne($xqrD$var$OPEN_SELECTOR);

  if (allReadyOpen && allReadyOpen !== target) {
    $xqrD$export$Offcanvas.getInstance(allReadyOpen).hide();
  }

  const data = $xqrD$export$Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
$xqrD$var$EventHandler.on(window, $xqrD$var$EVENT_LOAD_DATA_API$1, () => $xqrD$var$SelectorEngine.find($xqrD$var$OPEN_SELECTOR).forEach(el => $xqrD$export$Offcanvas.getOrCreateInstance(el).show()));
$xqrD$var$enableDismissTrigger($xqrD$export$Offcanvas);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Offcanvas);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const $xqrD$var$uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
const $xqrD$var$ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

const $xqrD$var$SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

const $xqrD$var$DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

const $xqrD$var$allowedAttribute = (attribute, allowedAttributeList) => {
  const attributeName = attribute.nodeName.toLowerCase();

  if (allowedAttributeList.includes(attributeName)) {
    if ($xqrD$var$uriAttributes.has(attributeName)) {
      return Boolean($xqrD$var$SAFE_URL_PATTERN.test(attribute.nodeValue) || $xqrD$var$DATA_URL_PATTERN.test(attribute.nodeValue));
    }

    return true;
  }

  const regExp = allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp); // Check if a regular expression validates the attribute.

  for (let i = 0, len = regExp.length; i < len; i++) {
    if (regExp[i].test(attributeName)) {
      return true;
    }
  }

  return false;
};

const $xqrD$var$DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', $xqrD$var$ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};

function $xqrD$var$sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }

  if (sanitizeFn && typeof sanitizeFn === 'function') {
    return sanitizeFn(unsafeHtml);
  }

  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

  for (let i = 0, len = elements.length; i < len; i++) {
    const element = elements[i];
    const elementName = element.nodeName.toLowerCase();

    if (!Object.keys(allowList).includes(elementName)) {
      element.remove();
      continue;
    }

    const attributeList = [].concat(...element.attributes);
    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
    attributeList.forEach(attribute => {
      if (!$xqrD$var$allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
      }
    });
  }

  return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const $xqrD$var$NAME$4 = 'tooltip';
const $xqrD$var$DATA_KEY$4 = 'bs.tooltip';
const $xqrD$var$EVENT_KEY$4 = `.${$xqrD$var$DATA_KEY$4}`;
const $xqrD$var$CLASS_PREFIX$1 = 'bs-tooltip';
const $xqrD$var$DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
const $xqrD$var$DefaultType$3 = {
  animation: 'boolean',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string',
  delay: '(number|object)',
  html: 'boolean',
  selector: '(string|boolean)',
  placement: '(string|function)',
  offset: '(array|string|function)',
  container: '(string|element|boolean)',
  fallbackPlacements: 'array',
  boundary: '(string|element)',
  customClass: '(string|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  allowList: 'object',
  popperConfig: '(null|object|function)'
};
const $xqrD$var$AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: $xqrD$var$isRTL() ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: $xqrD$var$isRTL() ? 'right' : 'left'
};
const $xqrD$var$Default$3 = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  selector: false,
  placement: 'top',
  offset: [0, 0],
  container: false,
  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
  boundary: 'clippingParents',
  customClass: '',
  sanitize: true,
  sanitizeFn: null,
  allowList: $xqrD$var$DefaultAllowlist,
  popperConfig: null
};
const $xqrD$var$Event$2 = {
  HIDE: `hide${$xqrD$var$EVENT_KEY$4}`,
  HIDDEN: `hidden${$xqrD$var$EVENT_KEY$4}`,
  SHOW: `show${$xqrD$var$EVENT_KEY$4}`,
  SHOWN: `shown${$xqrD$var$EVENT_KEY$4}`,
  INSERTED: `inserted${$xqrD$var$EVENT_KEY$4}`,
  CLICK: `click${$xqrD$var$EVENT_KEY$4}`,
  FOCUSIN: `focusin${$xqrD$var$EVENT_KEY$4}`,
  FOCUSOUT: `focusout${$xqrD$var$EVENT_KEY$4}`,
  MOUSEENTER: `mouseenter${$xqrD$var$EVENT_KEY$4}`,
  MOUSELEAVE: `mouseleave${$xqrD$var$EVENT_KEY$4}`
};
const $xqrD$var$CLASS_NAME_FADE$2 = 'fade';
const $xqrD$var$CLASS_NAME_MODAL = 'modal';
const $xqrD$var$CLASS_NAME_SHOW$2 = 'show';
const $xqrD$var$HOVER_STATE_SHOW = 'show';
const $xqrD$var$HOVER_STATE_OUT = 'out';
const $xqrD$var$SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const $xqrD$var$SELECTOR_MODAL = `.${$xqrD$var$CLASS_NAME_MODAL}`;
const $xqrD$var$EVENT_MODAL_HIDE = 'hide.bs.modal';
const $xqrD$var$TRIGGER_HOVER = 'hover';
const $xqrD$var$TRIGGER_FOCUS = 'focus';
const $xqrD$var$TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Tooltip extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    if (typeof $vePw$exports === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }

    super(element); // private

    this._isEnabled = true;
    this._timeout = 0;
    this._hoverState = '';
    this._activeTrigger = {};
    this._popper = null; // Protected

    this._config = this._getConfig(config);
    this.tip = null;

    this._setListeners();
  } // Getters


  static get Default() {
    return $xqrD$var$Default$3;
  }

  static get NAME() {
    return $xqrD$var$NAME$4;
  }

  static get Event() {
    return $xqrD$var$Event$2;
  }

  static get DefaultType() {
    return $xqrD$var$DefaultType$3;
  } // Public


  enable() {
    this._isEnabled = true;
  }

  disable() {
    this._isEnabled = false;
  }

  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }

  toggle(event) {
    if (!this._isEnabled) {
      return;
    }

    if (event) {
      const context = this._initializeOnDelegatedTarget(event);

      context._activeTrigger.click = !context._activeTrigger.click;

      if (context._isWithActiveTrigger()) {
        context._enter(null, context);
      } else {
        context._leave(null, context);
      }
    } else {
      if (this.getTipElement().classList.contains($xqrD$var$CLASS_NAME_SHOW$2)) {
        this._leave(null, this);

        return;
      }

      this._enter(null, this);
    }
  }

  dispose() {
    clearTimeout(this._timeout);
    $xqrD$var$EventHandler.off(this._element.closest($xqrD$var$SELECTOR_MODAL), $xqrD$var$EVENT_MODAL_HIDE, this._hideModalHandler);

    if (this.tip) {
      this.tip.remove();
    }

    this._disposePopper();

    super.dispose();
  }

  show() {
    if (this._element.style.display === 'none') {
      throw new Error('Please use show on visible elements');
    }

    if (!(this.isWithContent() && this._isEnabled)) {
      return;
    }

    const showEvent = $xqrD$var$EventHandler.trigger(this._element, this.constructor.Event.SHOW);
    const shadowRoot = $xqrD$var$findShadowRoot(this._element);
    const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

    if (showEvent.defaultPrevented || !isInTheDom) {
      return;
    } // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
    // This will be removed later in favor of a `setContent` method


    if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector($xqrD$var$SELECTOR_TOOLTIP_INNER).innerHTML) {
      this._disposePopper();

      this.tip.remove();
      this.tip = null;
    }

    const tip = this.getTipElement();
    const tipId = $xqrD$var$getUID(this.constructor.NAME);
    tip.setAttribute('id', tipId);

    this._element.setAttribute('aria-describedby', tipId);

    if (this._config.animation) {
      tip.classList.add($xqrD$var$CLASS_NAME_FADE$2);
    }

    const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

    const attachment = this._getAttachment(placement);

    this._addAttachmentClass(attachment);

    const {
      container
    } = this._config;
    $xqrD$var$Data.set(tip, this.constructor.DATA_KEY, this);

    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
      container.append(tip);
      $xqrD$var$EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
    }

    if (this._popper) {
      this._popper.update();
    } else {
      this._popper = $cujj$export$createPopper(this._element, tip, this._getPopperConfig(attachment));
    }

    tip.classList.add($xqrD$var$CLASS_NAME_SHOW$2);

    const customClass = this._resolvePossibleFunction(this._config.customClass);

    if (customClass) {
      tip.classList.add(...customClass.split(' '));
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement) {
      [].concat(...document.body.children).forEach(element => {
        $xqrD$var$EventHandler.on(element, 'mouseover', $xqrD$var$noop);
      });
    }

    const complete = () => {
      const prevHoverState = this._hoverState;
      this._hoverState = null;
      $xqrD$var$EventHandler.trigger(this._element, this.constructor.Event.SHOWN);

      if (prevHoverState === $xqrD$var$HOVER_STATE_OUT) {
        this._leave(null, this);
      }
    };

    const isAnimated = this.tip.classList.contains($xqrD$var$CLASS_NAME_FADE$2);

    this._queueCallback(complete, this.tip, isAnimated);
  }

  hide() {
    if (!this._popper) {
      return;
    }

    const tip = this.getTipElement();

    const complete = () => {
      if (this._isWithActiveTrigger()) {
        return;
      }

      if (this._hoverState !== $xqrD$var$HOVER_STATE_SHOW) {
        tip.remove();
      }

      this._cleanTipClass();

      this._element.removeAttribute('aria-describedby');

      $xqrD$var$EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);

      this._disposePopper();
    };

    const hideEvent = $xqrD$var$EventHandler.trigger(this._element, this.constructor.Event.HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    tip.classList.remove($xqrD$var$CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support

    if ('ontouchstart' in document.documentElement) {
      [].concat(...document.body.children).forEach(element => $xqrD$var$EventHandler.off(element, 'mouseover', $xqrD$var$noop));
    }

    this._activeTrigger[$xqrD$var$TRIGGER_FOCUS] = false;
    this._activeTrigger[$xqrD$var$TRIGGER_HOVER] = false;
    const isAnimated = this.tip.classList.contains($xqrD$var$CLASS_NAME_FADE$2);

    this._queueCallback(complete, this.tip, isAnimated);

    this._hoverState = '';
  }

  update() {
    if (this._popper !== null) {
      this._popper.update();
    }
  } // Protected


  isWithContent() {
    return Boolean(this.getTitle());
  }

  getTipElement() {
    if (this.tip) {
      return this.tip;
    }

    const element = document.createElement('div');
    element.innerHTML = this._config.template;
    const tip = element.children[0];
    this.setContent(tip);
    tip.classList.remove($xqrD$var$CLASS_NAME_FADE$2, $xqrD$var$CLASS_NAME_SHOW$2);
    this.tip = tip;
    return this.tip;
  }

  setContent(tip) {
    this._sanitizeAndSetContent(tip, this.getTitle(), $xqrD$var$SELECTOR_TOOLTIP_INNER);
  }

  _sanitizeAndSetContent(template, content, selector) {
    const templateElement = $xqrD$var$SelectorEngine.findOne(selector, template);

    if (!content && templateElement) {
      templateElement.remove();
      return;
    } // we use append for html objects to maintain js events


    this.setElementContent(templateElement, content);
  }

  setElementContent(element, content) {
    if (element === null) {
      return;
    }

    if ($xqrD$var$isElement(content)) {
      content = $xqrD$var$getElement(content); // content is a DOM node or a jQuery

      if (this._config.html) {
        if (content.parentNode !== element) {
          element.innerHTML = '';
          element.append(content);
        }
      } else {
        element.textContent = content.textContent;
      }

      return;
    }

    if (this._config.html) {
      if (this._config.sanitize) {
        content = $xqrD$var$sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
      }

      element.innerHTML = content;
    } else {
      element.textContent = content;
    }
  }

  getTitle() {
    const title = this._element.getAttribute('data-bs-original-title') || this._config.title;

    return this._resolvePossibleFunction(title);
  }

  updateAttachment(attachment) {
    if (attachment === 'right') {
      return 'end';
    }

    if (attachment === 'left') {
      return 'start';
    }

    return attachment;
  } // Private


  _initializeOnDelegatedTarget(event, context) {
    return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
  }

  _getOffset() {
    const {
      offset
    } = this._config;

    if (typeof offset === 'string') {
      return offset.split(',').map(val => Number.parseInt(val, 10));
    }

    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }

    return offset;
  }

  _resolvePossibleFunction(content) {
    return typeof content === 'function' ? content.call(this._element) : content;
  }

  _getPopperConfig(attachment) {
    const defaultBsPopperConfig = {
      placement: attachment,
      modifiers: [{
        name: 'flip',
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }, {
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'arrow',
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: 'onChange',
        enabled: true,
        phase: 'afterWrite',
        fn: data => this._handlePopperPlacementChange(data)
      }],
      onFirstUpdate: data => {
        if (data.options.placement !== data.placement) {
          this._handlePopperPlacementChange(data);
        }
      }
    };
    return { ...defaultBsPopperConfig,
      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
    };
  }

  _addAttachmentClass(attachment) {
    this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(attachment)}`);
  }

  _getAttachment(placement) {
    return $xqrD$var$AttachmentMap[placement.toUpperCase()];
  }

  _setListeners() {
    const triggers = this._config.trigger.split(' ');

    triggers.forEach(trigger => {
      if (trigger === 'click') {
        $xqrD$var$EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, event => this.toggle(event));
      } else if (trigger !== $xqrD$var$TRIGGER_MANUAL) {
        const eventIn = trigger === $xqrD$var$TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
        const eventOut = trigger === $xqrD$var$TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
        $xqrD$var$EventHandler.on(this._element, eventIn, this._config.selector, event => this._enter(event));
        $xqrD$var$EventHandler.on(this._element, eventOut, this._config.selector, event => this._leave(event));
      }
    });

    this._hideModalHandler = () => {
      if (this._element) {
        this.hide();
      }
    };

    $xqrD$var$EventHandler.on(this._element.closest($xqrD$var$SELECTOR_MODAL), $xqrD$var$EVENT_MODAL_HIDE, this._hideModalHandler);

    if (this._config.selector) {
      this._config = { ...this._config,
        trigger: 'manual',
        selector: ''
      };
    } else {
      this._fixTitle();
    }
  }

  _fixTitle() {
    const title = this._element.getAttribute('title');

    const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

    if (title || originalTitleType !== 'string') {
      this._element.setAttribute('data-bs-original-title', title || '');

      if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
        this._element.setAttribute('aria-label', title);
      }

      this._element.setAttribute('title', '');
    }
  }

  _enter(event, context) {
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) {
      context._activeTrigger[event.type === 'focusin' ? $xqrD$var$TRIGGER_FOCUS : $xqrD$var$TRIGGER_HOVER] = true;
    }

    if (context.getTipElement().classList.contains($xqrD$var$CLASS_NAME_SHOW$2) || context._hoverState === $xqrD$var$HOVER_STATE_SHOW) {
      context._hoverState = $xqrD$var$HOVER_STATE_SHOW;
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = $xqrD$var$HOVER_STATE_SHOW;

    if (!context._config.delay || !context._config.delay.show) {
      context.show();
      return;
    }

    context._timeout = setTimeout(() => {
      if (context._hoverState === $xqrD$var$HOVER_STATE_SHOW) {
        context.show();
      }
    }, context._config.delay.show);
  }

  _leave(event, context) {
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) {
      context._activeTrigger[event.type === 'focusout' ? $xqrD$var$TRIGGER_FOCUS : $xqrD$var$TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
    }

    if (context._isWithActiveTrigger()) {
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = $xqrD$var$HOVER_STATE_OUT;

    if (!context._config.delay || !context._config.delay.hide) {
      context.hide();
      return;
    }

    context._timeout = setTimeout(() => {
      if (context._hoverState === $xqrD$var$HOVER_STATE_OUT) {
        context.hide();
      }
    }, context._config.delay.hide);
  }

  _isWithActiveTrigger() {
    for (const trigger in this._activeTrigger) {
      if (this._activeTrigger[trigger]) {
        return true;
      }
    }

    return false;
  }

  _getConfig(config) {
    const dataAttributes = $xqrD$var$Manipulator.getDataAttributes(this._element);
    Object.keys(dataAttributes).forEach(dataAttr => {
      if ($xqrD$var$DISALLOWED_ATTRIBUTES.has(dataAttr)) {
        delete dataAttributes[dataAttr];
      }
    });
    config = { ...this.constructor.Default,
      ...dataAttributes,
      ...(typeof config === 'object' && config ? config : {})
    };
    config.container = config.container === false ? document.body : $xqrD$var$getElement(config.container);

    if (typeof config.delay === 'number') {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }

    if (typeof config.title === 'number') {
      config.title = config.title.toString();
    }

    if (typeof config.content === 'number') {
      config.content = config.content.toString();
    }

    $xqrD$var$typeCheckConfig($xqrD$var$NAME$4, config, this.constructor.DefaultType);

    if (config.sanitize) {
      config.template = $xqrD$var$sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
    }

    return config;
  }

  _getDelegateConfig() {
    const config = {};

    for (const key in this._config) {
      if (this.constructor.Default[key] !== this._config[key]) {
        config[key] = this._config[key];
      }
    } // In the future can be replaced with:
    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
    // `Object.fromEntries(keysWithDifferentValues)`


    return config;
  }

  _cleanTipClass() {
    const tip = this.getTipElement();
    const basicClassPrefixRegex = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, 'g');
    const tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

    if (tabClass !== null && tabClass.length > 0) {
      tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
    }
  }

  _getBasicClassPrefix() {
    return $xqrD$var$CLASS_PREFIX$1;
  }

  _handlePopperPlacementChange(popperData) {
    const {
      state
    } = popperData;

    if (!state) {
      return;
    }

    this.tip = state.elements.popper;

    this._cleanTipClass();

    this._addAttachmentClass(this._getAttachment(state.placement));
  }

  _disposePopper() {
    if (this._popper) {
      this._popper.destroy();

      this._popper = null;
    }
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Tooltip.getOrCreateInstance(this, config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */


$xqrD$var$defineJQueryPlugin($xqrD$export$Tooltip);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$3 = 'popover';
const $xqrD$var$DATA_KEY$3 = 'bs.popover';
const $xqrD$var$EVENT_KEY$3 = `.${$xqrD$var$DATA_KEY$3}`;
const $xqrD$var$CLASS_PREFIX = 'bs-popover';
const $xqrD$var$Default$2 = { ...$xqrD$export$Tooltip.Default,
  placement: 'right',
  offset: [0, 8],
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
};
const $xqrD$var$DefaultType$2 = { ...$xqrD$export$Tooltip.DefaultType,
  content: '(string|element|function)'
};
const $xqrD$var$Event$1 = {
  HIDE: `hide${$xqrD$var$EVENT_KEY$3}`,
  HIDDEN: `hidden${$xqrD$var$EVENT_KEY$3}`,
  SHOW: `show${$xqrD$var$EVENT_KEY$3}`,
  SHOWN: `shown${$xqrD$var$EVENT_KEY$3}`,
  INSERTED: `inserted${$xqrD$var$EVENT_KEY$3}`,
  CLICK: `click${$xqrD$var$EVENT_KEY$3}`,
  FOCUSIN: `focusin${$xqrD$var$EVENT_KEY$3}`,
  FOCUSOUT: `focusout${$xqrD$var$EVENT_KEY$3}`,
  MOUSEENTER: `mouseenter${$xqrD$var$EVENT_KEY$3}`,
  MOUSELEAVE: `mouseleave${$xqrD$var$EVENT_KEY$3}`
};
const $xqrD$var$SELECTOR_TITLE = '.popover-header';
const $xqrD$var$SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Popover extends $xqrD$export$Tooltip {
  // Getters
  static get Default() {
    return $xqrD$var$Default$2;
  }

  static get NAME() {
    return $xqrD$var$NAME$3;
  }

  static get Event() {
    return $xqrD$var$Event$1;
  }

  static get DefaultType() {
    return $xqrD$var$DefaultType$2;
  } // Overrides


  isWithContent() {
    return this.getTitle() || this._getContent();
  }

  setContent(tip) {
    this._sanitizeAndSetContent(tip, this.getTitle(), $xqrD$var$SELECTOR_TITLE);

    this._sanitizeAndSetContent(tip, this._getContent(), $xqrD$var$SELECTOR_CONTENT);
  } // Private


  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }

  _getBasicClassPrefix() {
    return $xqrD$var$CLASS_PREFIX;
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Popover.getOrCreateInstance(this, config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Popover to jQuery only if jQuery is present
 */


$xqrD$var$defineJQueryPlugin($xqrD$export$Popover);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$2 = 'scrollspy';
const $xqrD$var$DATA_KEY$2 = 'bs.scrollspy';
const $xqrD$var$EVENT_KEY$2 = `.${$xqrD$var$DATA_KEY$2}`;
const $xqrD$var$DATA_API_KEY$1 = '.data-api';
const $xqrD$var$Default$1 = {
  offset: 10,
  method: 'auto',
  target: ''
};
const $xqrD$var$DefaultType$1 = {
  offset: 'number',
  method: 'string',
  target: '(string|element)'
};
const $xqrD$var$EVENT_ACTIVATE = `activate${$xqrD$var$EVENT_KEY$2}`;
const $xqrD$var$EVENT_SCROLL = `scroll${$xqrD$var$EVENT_KEY$2}`;
const $xqrD$var$EVENT_LOAD_DATA_API = `load${$xqrD$var$EVENT_KEY$2}${$xqrD$var$DATA_API_KEY$1}`;
const $xqrD$var$CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
const $xqrD$var$CLASS_NAME_ACTIVE$1 = 'active';
const $xqrD$var$SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const $xqrD$var$SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
const $xqrD$var$SELECTOR_NAV_LINKS = '.nav-link';
const $xqrD$var$SELECTOR_NAV_ITEMS = '.nav-item';
const $xqrD$var$SELECTOR_LIST_ITEMS = '.list-group-item';
const $xqrD$var$SELECTOR_LINK_ITEMS = `${$xqrD$var$SELECTOR_NAV_LINKS}, ${$xqrD$var$SELECTOR_LIST_ITEMS}, .${$xqrD$var$CLASS_NAME_DROPDOWN_ITEM}`;
const $xqrD$var$SELECTOR_DROPDOWN$1 = '.dropdown';
const $xqrD$var$SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
const $xqrD$var$METHOD_OFFSET = 'offset';
const $xqrD$var$METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$ScrollSpy extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
    this._config = this._getConfig(config);
    this._offsets = [];
    this._targets = [];
    this._activeTarget = null;
    this._scrollHeight = 0;
    $xqrD$var$EventHandler.on(this._scrollElement, $xqrD$var$EVENT_SCROLL, () => this._process());
    this.refresh();

    this._process();
  } // Getters


  static get Default() {
    return $xqrD$var$Default$1;
  }

  static get NAME() {
    return $xqrD$var$NAME$2;
  } // Public


  refresh() {
    const autoMethod = this._scrollElement === this._scrollElement.window ? $xqrD$var$METHOD_OFFSET : $xqrD$var$METHOD_POSITION;
    const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
    const offsetBase = offsetMethod === $xqrD$var$METHOD_POSITION ? this._getScrollTop() : 0;
    this._offsets = [];
    this._targets = [];
    this._scrollHeight = this._getScrollHeight();
    const targets = $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_LINK_ITEMS, this._config.target);
    targets.map(element => {
      const targetSelector = $xqrD$var$getSelectorFromElement(element);
      const target = targetSelector ? $xqrD$var$SelectorEngine.findOne(targetSelector) : null;

      if (target) {
        const targetBCR = target.getBoundingClientRect();

        if (targetBCR.width || targetBCR.height) {
          return [$xqrD$var$Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
        }
      }

      return null;
    }).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => {
      this._offsets.push(item[0]);

      this._targets.push(item[1]);
    });
  }

  dispose() {
    $xqrD$var$EventHandler.off(this._scrollElement, $xqrD$var$EVENT_KEY$2);
    super.dispose();
  } // Private


  _getConfig(config) {
    config = { ...$xqrD$var$Default$1,
      ...$xqrD$var$Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' && config ? config : {})
    };
    config.target = $xqrD$var$getElement(config.target) || document.documentElement;
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$2, config, $xqrD$var$DefaultType$1);
    return config;
  }

  _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  }

  _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  }

  _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  }

  _process() {
    const scrollTop = this._getScrollTop() + this._config.offset;

    const scrollHeight = this._getScrollHeight();

    const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

    if (this._scrollHeight !== scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      const target = this._targets[this._targets.length - 1];

      if (this._activeTarget !== target) {
        this._activate(target);
      }

      return;
    }

    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null;

      this._clear();

      return;
    }

    for (let i = this._offsets.length; i--;) {
      const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

      if (isActiveTarget) {
        this._activate(this._targets[i]);
      }
    }
  }

  _activate(target) {
    this._activeTarget = target;

    this._clear();

    const queries = $xqrD$var$SELECTOR_LINK_ITEMS.split(',').map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);
    const link = $xqrD$var$SelectorEngine.findOne(queries.join(','), this._config.target);
    link.classList.add($xqrD$var$CLASS_NAME_ACTIVE$1);

    if (link.classList.contains($xqrD$var$CLASS_NAME_DROPDOWN_ITEM)) {
      $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_DROPDOWN_TOGGLE$1, link.closest($xqrD$var$SELECTOR_DROPDOWN$1)).classList.add($xqrD$var$CLASS_NAME_ACTIVE$1);
    } else {
      $xqrD$var$SelectorEngine.parents(link, $xqrD$var$SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup => {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        $xqrD$var$SelectorEngine.prev(listGroup, `${$xqrD$var$SELECTOR_NAV_LINKS}, ${$xqrD$var$SELECTOR_LIST_ITEMS}`).forEach(item => item.classList.add($xqrD$var$CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item

        $xqrD$var$SelectorEngine.prev(listGroup, $xqrD$var$SELECTOR_NAV_ITEMS).forEach(navItem => {
          $xqrD$var$SelectorEngine.children(navItem, $xqrD$var$SELECTOR_NAV_LINKS).forEach(item => item.classList.add($xqrD$var$CLASS_NAME_ACTIVE$1));
        });
      });
    }

    $xqrD$var$EventHandler.trigger(this._scrollElement, $xqrD$var$EVENT_ACTIVATE, {
      relatedTarget: target
    });
  }

  _clear() {
    $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_LINK_ITEMS, this._config.target).filter(node => node.classList.contains($xqrD$var$CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove($xqrD$var$CLASS_NAME_ACTIVE$1));
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$ScrollSpy.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(window, $xqrD$var$EVENT_LOAD_DATA_API, () => {
  $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_DATA_SPY).forEach(spy => new $xqrD$export$ScrollSpy(spy));
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ScrollSpy to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$ScrollSpy);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$1 = 'tab';
const $xqrD$var$DATA_KEY$1 = 'bs.tab';
const $xqrD$var$EVENT_KEY$1 = `.${$xqrD$var$DATA_KEY$1}`;
const $xqrD$var$DATA_API_KEY = '.data-api';
const $xqrD$var$EVENT_HIDE$1 = `hide${$xqrD$var$EVENT_KEY$1}`;
const $xqrD$var$EVENT_HIDDEN$1 = `hidden${$xqrD$var$EVENT_KEY$1}`;
const $xqrD$var$EVENT_SHOW$1 = `show${$xqrD$var$EVENT_KEY$1}`;
const $xqrD$var$EVENT_SHOWN$1 = `shown${$xqrD$var$EVENT_KEY$1}`;
const $xqrD$var$EVENT_CLICK_DATA_API = `click${$xqrD$var$EVENT_KEY$1}${$xqrD$var$DATA_API_KEY}`;
const $xqrD$var$CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
const $xqrD$var$CLASS_NAME_ACTIVE = 'active';
const $xqrD$var$CLASS_NAME_FADE$1 = 'fade';
const $xqrD$var$CLASS_NAME_SHOW$1 = 'show';
const $xqrD$var$SELECTOR_DROPDOWN = '.dropdown';
const $xqrD$var$SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
const $xqrD$var$SELECTOR_ACTIVE = '.active';
const $xqrD$var$SELECTOR_ACTIVE_UL = ':scope > li > .active';
const $xqrD$var$SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
const $xqrD$var$SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
const $xqrD$var$SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Tab extends $xqrD$var$BaseComponent {
  // Getters
  static get NAME() {
    return $xqrD$var$NAME$1;
  } // Public


  show() {
    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains($xqrD$var$CLASS_NAME_ACTIVE)) {
      return;
    }

    let previous;
    const target = $xqrD$var$getElementFromSelector(this._element);

    const listElement = this._element.closest($xqrD$var$SELECTOR_NAV_LIST_GROUP);

    if (listElement) {
      const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? $xqrD$var$SELECTOR_ACTIVE_UL : $xqrD$var$SELECTOR_ACTIVE;
      previous = $xqrD$var$SelectorEngine.find(itemSelector, listElement);
      previous = previous[previous.length - 1];
    }

    const hideEvent = previous ? $xqrD$var$EventHandler.trigger(previous, $xqrD$var$EVENT_HIDE$1, {
      relatedTarget: this._element
    }) : null;
    const showEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOW$1, {
      relatedTarget: previous
    });

    if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
      return;
    }

    this._activate(this._element, listElement);

    const complete = () => {
      $xqrD$var$EventHandler.trigger(previous, $xqrD$var$EVENT_HIDDEN$1, {
        relatedTarget: this._element
      });
      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOWN$1, {
        relatedTarget: previous
      });
    };

    if (target) {
      this._activate(target, target.parentNode, complete);
    } else {
      complete();
    }
  } // Private


  _activate(element, container, callback) {
    const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_ACTIVE_UL, container) : $xqrD$var$SelectorEngine.children(container, $xqrD$var$SELECTOR_ACTIVE);
    const active = activeElements[0];
    const isTransitioning = callback && active && active.classList.contains($xqrD$var$CLASS_NAME_FADE$1);

    const complete = () => this._transitionComplete(element, active, callback);

    if (active && isTransitioning) {
      active.classList.remove($xqrD$var$CLASS_NAME_SHOW$1);

      this._queueCallback(complete, element, true);
    } else {
      complete();
    }
  }

  _transitionComplete(element, active, callback) {
    if (active) {
      active.classList.remove($xqrD$var$CLASS_NAME_ACTIVE);
      const dropdownChild = $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

      if (dropdownChild) {
        dropdownChild.classList.remove($xqrD$var$CLASS_NAME_ACTIVE);
      }

      if (active.getAttribute('role') === 'tab') {
        active.setAttribute('aria-selected', false);
      }
    }

    element.classList.add($xqrD$var$CLASS_NAME_ACTIVE);

    if (element.getAttribute('role') === 'tab') {
      element.setAttribute('aria-selected', true);
    }

    $xqrD$var$reflow(element);

    if (element.classList.contains($xqrD$var$CLASS_NAME_FADE$1)) {
      element.classList.add($xqrD$var$CLASS_NAME_SHOW$1);
    }

    let parent = element.parentNode;

    if (parent && parent.nodeName === 'LI') {
      parent = parent.parentNode;
    }

    if (parent && parent.classList.contains($xqrD$var$CLASS_NAME_DROPDOWN_MENU)) {
      const dropdownElement = element.closest($xqrD$var$SELECTOR_DROPDOWN);

      if (dropdownElement) {
        $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(dropdown => dropdown.classList.add($xqrD$var$CLASS_NAME_ACTIVE));
      }

      element.setAttribute('aria-expanded', true);
    }

    if (callback) {
      callback();
    }
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Tab.getOrCreateInstance(this);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API, $xqrD$var$SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if ($xqrD$var$isDisabled(this)) {
    return;
  }

  const data = $xqrD$export$Tab.getOrCreateInstance(this);
  data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Tab);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME = 'toast';
const $xqrD$var$DATA_KEY = 'bs.toast';
const $xqrD$var$EVENT_KEY = `.${$xqrD$var$DATA_KEY}`;
const $xqrD$var$EVENT_MOUSEOVER = `mouseover${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$EVENT_MOUSEOUT = `mouseout${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$EVENT_FOCUSIN = `focusin${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$EVENT_FOCUSOUT = `focusout${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$EVENT_HIDE = `hide${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$EVENT_HIDDEN = `hidden${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$EVENT_SHOW = `show${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$EVENT_SHOWN = `shown${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$CLASS_NAME_FADE = 'fade';
const $xqrD$var$CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

const $xqrD$var$CLASS_NAME_SHOW = 'show';
const $xqrD$var$CLASS_NAME_SHOWING = 'showing';
const $xqrD$var$DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
const $xqrD$var$Default = {
  animation: true,
  autohide: true,
  delay: 5000
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Toast extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;

    this._setListeners();
  } // Getters


  static get DefaultType() {
    return $xqrD$var$DefaultType;
  }

  static get Default() {
    return $xqrD$var$Default;
  }

  static get NAME() {
    return $xqrD$var$NAME;
  } // Public


  show() {
    const showEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOW);

    if (showEvent.defaultPrevented) {
      return;
    }

    this._clearTimeout();

    if (this._config.animation) {
      this._element.classList.add($xqrD$var$CLASS_NAME_FADE);
    }

    const complete = () => {
      this._element.classList.remove($xqrD$var$CLASS_NAME_SHOWING);

      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOWN);

      this._maybeScheduleHide();
    };

    this._element.classList.remove($xqrD$var$CLASS_NAME_HIDE); // @deprecated


    $xqrD$var$reflow(this._element);

    this._element.classList.add($xqrD$var$CLASS_NAME_SHOW);

    this._element.classList.add($xqrD$var$CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
  }

  hide() {
    if (!this._element.classList.contains($xqrD$var$CLASS_NAME_SHOW)) {
      return;
    }

    const hideEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    const complete = () => {
      this._element.classList.add($xqrD$var$CLASS_NAME_HIDE); // @deprecated


      this._element.classList.remove($xqrD$var$CLASS_NAME_SHOWING);

      this._element.classList.remove($xqrD$var$CLASS_NAME_SHOW);

      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDDEN);
    };

    this._element.classList.add($xqrD$var$CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
  }

  dispose() {
    this._clearTimeout();

    if (this._element.classList.contains($xqrD$var$CLASS_NAME_SHOW)) {
      this._element.classList.remove($xqrD$var$CLASS_NAME_SHOW);
    }

    super.dispose();
  } // Private


  _getConfig(config) {
    config = { ...$xqrD$var$Default,
      ...$xqrD$var$Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' && config ? config : {})
    };
    $xqrD$var$typeCheckConfig($xqrD$var$NAME, config, this.constructor.DefaultType);
    return config;
  }

  _maybeScheduleHide() {
    if (!this._config.autohide) {
      return;
    }

    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
      return;
    }

    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }

  _onInteraction(event, isInteracting) {
    switch (event.type) {
      case 'mouseover':
      case 'mouseout':
        this._hasMouseInteraction = isInteracting;
        break;

      case 'focusin':
      case 'focusout':
        this._hasKeyboardInteraction = isInteracting;
        break;
    }

    if (isInteracting) {
      this._clearTimeout();

      return;
    }

    const nextElement = event.relatedTarget;

    if (this._element === nextElement || this._element.contains(nextElement)) {
      return;
    }

    this._maybeScheduleHide();
  }

  _setListeners() {
    $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_MOUSEOVER, event => this._onInteraction(event, true));
    $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_MOUSEOUT, event => this._onInteraction(event, false));
    $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_FOCUSIN, event => this._onInteraction(event, true));
    $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_FOCUSOUT, event => this._onInteraction(event, false));
  }

  _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Toast.getOrCreateInstance(this, config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      }
    });
  }

}

$xqrD$var$enableDismissTrigger($xqrD$export$Toast);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Toast to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Toast);
//selecting all required elements
var $Focm$var$dropArea = document.querySelector(".drag-area"),
    $Focm$var$dragText = $Focm$var$dropArea.querySelector("header"),
    $Focm$var$button = $Focm$var$dropArea.querySelector("button"),
    $Focm$var$input = $Focm$var$dropArea.querySelector("input");
var $Focm$var$file; //this is a global variable and we'll use it inside multiple functions

$Focm$var$button.onclick = function () {
  $Focm$var$input.click(); //if user click on the button then the input also clicked
};

$Focm$var$input.addEventListener("change", function () {
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  $Focm$var$file = this.files[0];
  $Focm$var$dropArea.classList.add("active");
  $Focm$var$showFile(); //calling function
}); //If user Drag File Over DropArea

$Focm$var$dropArea.addEventListener("dragover", function (event) {
  event.preventDefault(); //preventing from default behaviour

  $Focm$var$dropArea.classList.add("active");
  $Focm$var$dragText.textContent = "Release to Upload File";
}); //If user leave dragged File from DropArea

$Focm$var$dropArea.addEventListener("dragleave", function () {
  $Focm$var$dropArea.classList.remove("active");
  $Focm$var$dragText.textContent = "Drag & Drop to Upload File";
}); //If user drop File on DropArea

$Focm$var$dropArea.addEventListener("drop", function (event) {
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one

  $Focm$var$file = event.dataTransfer.files[0];
  $Focm$var$showFile(); //calling function
});

function $Focm$var$showFile() {
  var fileType = $Focm$var$file.type; //getting selected file type

  var validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array

  if (validExtensions.includes(fileType)) {
    //if user selected file is an image file
    var fileReader = new FileReader(); //creating new FileReader object

    fileReader.onload = function () {
      var fileURL = fileReader.result; //passing user file source in fileURL variable
      // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
      // let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute

      $Focm$var$dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    };

    fileReader.readAsDataURL($Focm$var$file);
  } else {
    alert("This is not an Image File!");
    $Focm$var$dropArea.classList.remove("active");
    $Focm$var$dragText.textContent = "Drag & Drop to Upload File";
  }
} // var rtlcss = require('rtlcss');
// var result = rtlcss.process("body { direction:ltr; }");
// //result == body { direction:rtl; }


return {
  "Focm": {}
};
});