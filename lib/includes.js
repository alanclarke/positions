module.exports = ''.includes ? function includes (hay, needle) {
  return hay.includes(needle)
} : function includes (hay, needle) {
  return hay.indexOf(needle) >= 0
}
