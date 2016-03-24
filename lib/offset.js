module.exports = function offset (el) {
  if (el === window || el === document || el === document.documentElement) {
    return { top: 0, left: 0 }
  }
  var rect = el.getBoundingClientRect()
  return {
    top: rect.top + (document.body.scrollTop || document.documentElement.scrollTop),
    left: rect.left + (document.body.scrollLeft || document.documentElement.scrollLeft)
  }
}
