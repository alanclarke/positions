/* globals describe beforeEach afterEach it */
var positions = require('../lib/positions')
var expect = require('chai').expect
var create = require('./lib/create')
var permute = require('./lib/permute')

describe('position fixed', function () {
  var myStyle = {
    top: 40,
    left: 30,
    width: 200,
    height: 100,
    position: 'fixed',
    background: 'blue'
  }
  var targetStyle = {
    top: 10,
    left: 20,
    width: 300,
    height: 400,
    position: 'fixed',
    background: 'red'
  }
  var el, target
  beforeEach(function () {
    el = create(myStyle)
    target = create(targetStyle)
  })
  afterEach(function () {
    document.body.innerHTML = ''
  })
  permute(function (myVertical, myHorizontal, theirVertical, theirHorizontal) {
    it([
      'should correctly position my', myHorizontal, myVertical,
      'at their', theirHorizontal, theirVertical
    ].join(' '), function () {
      var left = targetStyle.left
      var top = targetStyle.top
      if (theirHorizontal === 'right') left += targetStyle.width
      if (theirHorizontal === 'center') left += targetStyle.width / 2
      if (theirVertical === 'bottom') top += targetStyle.height
      if (theirVertical === 'center') top += targetStyle.height / 2
      if (myHorizontal === 'right') left -= myStyle.width
      if (myHorizontal === 'center') left -= myStyle.width / 2
      if (myVertical === 'bottom') top -= myStyle.height
      if (myVertical === 'center') top -= myStyle.height / 2
      var position = positions(
        el, [myHorizontal, myVertical].join(' '),
        target, [theirHorizontal, theirVertical].join(' ')
      )
      el.style.left = position.left + 'px'
      el.style.top = position.top + 'px'
      expect(position).to.eql({ top: top, left: left })
    })
  })
})
