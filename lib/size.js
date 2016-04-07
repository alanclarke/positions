module.exports = function getSize (el) {
  if (el === window) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  } else if (el === document || el === document.documentElement) {
    var body = document.body
    var html = document.documentElement
    return {
      width: Math.max(
        body.scrollWidth,
        body.offsetWidth,
        html.clientWidth,
        html.scrollWidth,
        html.offsetWidth
      ),
      height: Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )
    }
  }
  return {
    width: el.offsetWidth,
    height: el.offsetHeight
  }
}
