module.exports = function needsOffset (el) {
  if (!el.offsetParent) return false
  if (el.offsetParent !== document.body) return true
  return window.getComputedStyle(el.offsetParent).position !== 'static'
}
