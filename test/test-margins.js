/* globals describe beforeEach afterEach it */
var expect = require('chai').expect
var each = require('./lib/each')
var create = require('./lib/create')
var size = require('../lib/size')
var positions = require('../lib/positions')

describe('margins', function () {
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
    margin = 22
    el = create(myStyle)
    target = document.body
    document.body.style.margin = margin + 'px'
  })
  afterEach(function () {
    document.body.setAttribute('style', '')
    document.body.innerHTML = ''
  })
  var verticals = ['top', 'center', 'bottom']
  var horizontals = ['left', 'center', 'right']
  each(verticals, function (myVertical) {
    each(verticals, function (theirVertical) {
      each(horizontals, function (myHorizontal) {
        each(horizontals, function (theirHorizontal) {
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
    })
  })
})
