module.exports = function getSize (el) {
  if (el === window) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  } else if (el === document) {
    var body = document.body
    var html = document.documentElement
    return {
      width: Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth),
      height: Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
    }
  }
  return {
    width: el.offsetWidth,
    height: el.offsetHeight
  }
}
