var each = require('./each')

module.exports = function permute (fn) {
  var verticals = ['top', 'center', 'bottom']
  var horizontals = ['left', 'center', 'right']
  each(verticals, function (myVertical) {
    each(verticals, function (theirVertical) {
      each(horizontals, function (myHorizontal) {
        each(horizontals, function (theirHorizontal) {
          fn(myVertical, myHorizontal, theirVertical, theirHorizontal)
        })
      })
    })
  })
}
