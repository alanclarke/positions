module.exports = function stringify (val) {
  if (typeof val === 'number') return val + 'px'
  return val
}
