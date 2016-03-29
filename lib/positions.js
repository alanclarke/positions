var getOffset = require('./offset')
var getSize = require('./size')
var includes = require('./includes')
var needsOffset = require('./needs-offset')

module.exports = function positions (el, my, target, their) {
  var mySize = getSize(el)
  var theirSize = getSize(target)
  var theirOffset = getOffset(target)
  var left = theirOffset.left
  var top = theirOffset.top
  var parentOffset

  // adjust relative to the offsetParent if appropriate
  if (needsOffset(el)) {
    parentOffset = getOffset(el.offsetParent)
    top -= parentOffset.top
    left -= parentOffset.left

    // add scroll if not already accounted for in the target offset
    if (el.offsetParent !== document.body) {
      top += el.offsetParent.scrollTop
      left += el.offsetParent.scrollLeft
    }
  } else if (!el.offsetParent) {
    top -= document.body.scrollTop || document.documentElement.scrollTop
    left -= document.body.scrollLeft || document.documentElement.scrollLeft
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
