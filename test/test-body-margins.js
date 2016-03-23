/* globals describe beforeEach afterEach it */
var expect = require('chai').expect
var create = require('./lib/create')
var size = require('../lib/size')
var permute = require('./lib/permute')
var positions = require('../lib/positions')

describe('margins', function () {
  afterEach(function () {
    document.body.setAttribute('style', '')
    document.body.innerHTML = ''
  })

  describe('when target is body', function () {
    var bodySize = size(document.body)
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
      width: bodySize.width,
      height: bodySize.height
    }
    var el, target, margin
    beforeEach(function () {
      el = create(myStyle)
      target = document.body
      margin = 22
      document.body.style.margin = margin + 'px'
    })
    permute(function (myVertical, myHorizontal, theirVertical, theirHorizontal) {
      it([
        'should correctly position my', myVertical, myHorizontal,
        'at their', theirVertical, theirHorizontal
      ].join(' '), function () {
        var left = targetStyle.left
        var top = targetStyle.top
        if (theirHorizontal === 'right') left += targetStyle.width
        if (theirHorizontal === 'center') left += (targetStyle.width / 2)
        if (theirVertical === 'bottom') top += targetStyle.height
        if (theirVertical === 'center') top += (targetStyle.height / 2)
        if (myHorizontal === 'right') left -= myStyle.width
        if (myHorizontal === 'center') left -= (myStyle.width / 2)
        if (myVertical === 'bottom') top -= myStyle.height
        if (myVertical === 'center') top -= (myStyle.height / 2)
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
  describe('when target is not body', function () {
    var myStyle = {
      top: 40,
      left: 30,
      width: 200,
      height: 100,
      position: 'absolute',
      background: 'blue'
    }
    var targetStyle = {
      top: 10,
      left: 20,
      width: 300,
      height: 400,
      position: 'absolute',
      background: 'rgba(0,255,0,0.1)'
    }
    var myParentStyle = {
      top: 40,
      left: 30,
      width: 200,
      height: 100,
      position: 'absolute',
      background: 'rgba(0,0,0,0.1)'
    }
    var el, target, parent, margin
    beforeEach(function () {
      el = create(myStyle)
      target = create(targetStyle)
      parent = create(myParentStyle)
      margin = 22
      document.body.style.margin = margin + 'px'
      parent.appendChild(el)
    })
    permute(function (myVertical, myHorizontal, theirVertical, theirHorizontal) {
      it([
        'should correctly position my', myVertical, myHorizontal,
        'at their', theirVertical, theirHorizontal
      ].join(' '), function () {
        var left = targetStyle.left - myParentStyle.left
        var top = targetStyle.top - myParentStyle.top
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
})
