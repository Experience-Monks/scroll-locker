module.exports = function (element, disableKeysFunctionality) {
  var keys = {37: 1, 38: 1, 39: 1, 40: 1};
  var el, disableKeys;

  var el = element;
  var disableKeys = disableKeysFunctionality === undefined ? true : disableKeysFunctionality;

  function preventDefault(e) {
    e = e || el.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
    return false;
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  function lock() {
    if (el.addEventListener) el.addEventListener('DOMMouseScroll', preventDefault, true);
    el.onmousewheel = preventDefault;
    el.onwheel = preventDefault;
    el.ontouchmove = preventDefault;
    if (disableKeys) el.onkeydown = preventDefaultForScrollKeys;
  }

  function unlock() {
    if (el.removeEventListener) el.removeEventListener('DOMMouseScroll', preventDefault, true);
    el.onmousewheel = null;
    el.onwheel = null;
    el.ontouchmove = null;
    el.onkeydown = null;
  }

  return {
    lock: lock,
    unlock: unlock
  }

};