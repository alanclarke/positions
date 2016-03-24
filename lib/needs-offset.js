module.exports = function needsOffset (el) {
  return el.offsetParent && (el.offsetParent !== document.body || window.getComputedStyle(document.body).position !== 'static')
}
