module.exports = function needsOffset (el) {
  if (el.offsetParent && el.offsetParent !== document.body) return true
  if (window.getComputedStyle(document.body).position !== 'static') return true
}
