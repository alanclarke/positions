module.exports = function offset (el) {
  if (el === window || el === document || el === document.documentElement) {
    return { top: 0, left: 0 }
  }
  var rect = el.getBoundingClientRect()
  return {
    top: rect.top,
    left: rect.left
  }
}
