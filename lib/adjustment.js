// elements absolutely positioned within other elements require an additional offset
module.exports = function getRelativeAdjustment (el) {
  var p = el.offsetParent
  if (p === document || p === window || p === document.body) return { top: 0, left: 0 }
  var rect = el.getBoundingClientRect()
  return {
    left: rect.left - el.offsetLeft,
    top: rect.top - el.offsetTop
  }
}
