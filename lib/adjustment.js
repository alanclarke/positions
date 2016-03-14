// elements positioned relative to other elements require an additional offset
module.exports = function getRelativeAdjustment (el) {
  var rect = el.getBoundingClientRect()
  return {
    left: rect.left - el.offsetLeft,
    top: rect.top - el.offsetTop
  }
}
