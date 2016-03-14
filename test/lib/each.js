module.exports = function each (arr, fn) {
  for (var key in arr) if (arr.hasOwnProperty(key)) fn(arr[key], key)
}
