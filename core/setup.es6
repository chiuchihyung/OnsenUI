((ons) => {

  // fastclick
  window.addEventListener('load', () => FastClick.attach(document.body), false);

  // ons._defaultDeviceBackButtonHandler
  window.addEventListener('DOMContentLoaded', () => {
    ons._defaultDeviceBackButtonHandler = ons._deviceBackButtonDispatcher.createHandler(window.document.body, () => {
      navigator.app.exitApp();
    });
  }, false);

  // viewport.js
  new Viewport().setup();

  // modernize
  Modernizr.testStyles('#modernizr { -webkit-overflow-scrolling:touch }', function(elem, rule) {
    Modernizr.addTest(
      'overflowtouch',
      window.getComputedStyle && window.getComputedStyle(elem).getPropertyValue('-webkit-overflow-scrolling') == 'touch');
  });

  // BaseElement
  if (typeof HTMLElement !== 'function') {
    ons._BaseElement = () => {};
    ons._BaseElement.prototype = document.createElement('div');
  } else {
    ons._BaseElement = HTMLElement;
  }

  // Change the default touchAction of GestureDetector, needed for Windows Phone app
  ons.GestureDetector.defaults.behavior.touchAction = 'none';

})(window.ons = window.ons || {});
