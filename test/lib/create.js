var each = require('./each')
var stringify = require('./stringify')

module.exports = function create (style) {
  var styleArr = []
  each(style, function (val, key) { styleArr.push(key + ':' + stringify(val)) })
  var el = document.createElement('div')
  if (style) el.setAttribute('style', styleArr.join(';'))
  document.body.appendChild(el)
  return el
}
