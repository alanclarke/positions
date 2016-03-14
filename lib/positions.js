var getOffset = require('./offset')
var getSize = require('./size')
var getAdjustment = require('./adjustment')

module.exports = function positions (el, my, target, their) {
  my = my.split(' ')
  their = their.split(' ')
  var mySize = getSize(el)
  var theirSize = getSize(target)
  var theirOffset = getOffset(target)
  var myVertical = my[0]
  var myHorizontal = my[1]
  var theirVertical = their[0]
  var theirHorizontal = their[1]
  var adjustment = getAdjustment(el)
  var left = theirOffset.left - adjustment.left
  var top = theirOffset.top - adjustment.top

  if (theirHorizontal === 'right') {
    left += theirSize.width
  } else if (theirHorizontal === 'center') {
    left += theirSize.width / 2
  }

  if (theirVertical === 'bottom') {
    top += theirSize.height
  } else if (theirVertical === 'center') {
    top += theirSize.height / 2
  }

  if (myHorizontal === 'right') {
    left -= mySize.width
  } else if (myHorizontal === 'center') {
    left -= mySize.width / 2
  }

  if (myVertical === 'bottom') {
    top -= mySize.height
  } else if (myVertical === 'center') {
    top -= mySize.height / 2
  }

  return {
    top: top,
    left: left
  }
}
