module.exports = function offset (el) {
  if (el === document || el === window) return { top: 0, left: 0 }
  var rect = el.getBoundingClientRect()
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  }
}
