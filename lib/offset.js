// position relative to top of document
module.exports = function offset (el) {
  // document position is always 0, 0 irrespective of whether window has scroll
  if (el === document || el === document.documentElement) {
    return { top: 0, left: 0 }
  }
  var scroll = {
    top: document.body.scrollTop || document.documentElement.scrollTop,
    left: document.body.scrollLeft || document.documentElement.scrollLeft
  }

  // window is positioned at the scroll offset coordinates
  if (el === window) return scroll

  var rect = el.getBoundingClientRect()
  return {
    top: rect.top + scroll.top,
    left: rect.left + scroll.left
  }
}
