/* globals describe beforeEach afterEach it */
var expect = require('chai').expect
var create = require('./lib/create')
var size = require('../lib/size')
var permute = require('./lib/permute')
var positions = require('../lib/positions')

describe('window', function () {
  var myStyle = {
    top: 40,
    left: 30,
    width: 200,
    height: 100,
    position: 'absolute',
    background: 'blue'
  }
  var targetStyle = {
    top: 0,
    left: 0,
    width: window.innerWidth,
    height: window.innerHeight
  }
  var el, target
  beforeEach(function () {
    el = create(myStyle)
    target = window
  })
  afterEach(function () {
    document.body.innerHTML = ''
  })
  permute(function (myVertical, myHorizontal, theirVertical, theirHorizontal) {
    it([
      'should correctly position my', myVertical, myHorizontal,
      'at their', theirVertical, theirHorizontal
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
        el, [myVertical, myHorizontal].join(' '),
        target, [theirVertical, theirHorizontal].join(' ')
      )
      el.style.left = position.left + 'px'
      el.style.top = position.top + 'px'
      expect(position).to.eql({ top: top, left: left })
    })
  })
})

describe('document', function () {
  var docSize = size(document)
  var myStyle = {
    top: 40,
    left: 30,
    width: 200,
    height: 100,
    position: 'absolute',
    background: 'blue'
  }
  var targetStyle = {
    top: 0,
    left: 0,
    width: docSize.width,
    height: docSize.height
  }
  var el, target
  beforeEach(function () {
    el = create(myStyle)
    target = document
  })
  afterEach(function () {
    document.body.innerHTML = ''
  })
  permute(function (myVertical, myHorizontal, theirVertical, theirHorizontal) {
    it([
      'should correctly position my', myVertical, myHorizontal,
      'at their', theirVertical, theirHorizontal
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
        el, [myVertical, myHorizontal].join(' '),
        target, [theirVertical, theirHorizontal].join(' ')
      )
      el.style.left = position.left + 'px'
      el.style.top = position.top + 'px'
      expect(position).to.eql({ top: top, left: left })
    })
  })
})
