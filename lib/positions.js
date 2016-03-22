var getOffset = require('./offset')
var getSize = require('./size')
var includes = require('./includes')

module.exports = function positions (el, my, target, their) {
  var mySize = getSize(el)
  var theirSize = getSize(target)
  var theirOffset = getOffset(target)
  var left = theirOffset.left
  var top = theirOffset.top

  if (el.offsetParent && el.offsetParent !== document.body) {
    var parentOffset = getOffset(el.offsetParent)
    top = top - parentOffset.top + el.offsetParent.scrollTop
    left = left - parentOffset.left + el.offsetParent.scrollLeft
  }

  if (includes(their, 'right')) {
    left += theirSize.width
  } else if (!includes(their, 'left')) {
    left += theirSize.width / 2
  }

  if (includes(their, 'bottom')) {
    top += theirSize.height
  } else if (!includes(their, 'top')) {
    top += theirSize.height / 2
  }

  if (includes(my, 'right')) {
    left -= mySize.width
  } else if (!includes(my, 'left')) {
    left -= mySize.width / 2
  }

  if (includes(my, 'bottom')) {
    top -= mySize.height
  } else if (!includes(my, 'top')) {
    top -= mySize.height / 2
  }

  return {
    top: top,
    left: left
  }
}
