/* globals describe beforeEach afterEach it */
var expect = require('chai').expect
var each = require('./lib/each')
var create = require('./lib/create')
var size = require('../lib/size')
var situate = require('../lib/situate')

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
            var position = situate(
              el, target,
              [myVertical, myHorizontal].join(' '),
              [theirVertical, theirHorizontal].join(' ')
            )
            el.style.left = position.left + 'px'
            el.style.top = position.top + 'px'
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
            expect(position).to.eql({ top: top, left: left })
          })
        })
      })
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
            var position = situate(
              el, target,
              [myVertical, myHorizontal].join(' '),
              [theirVertical, theirHorizontal].join(' ')
            )
            el.style.left = position.left + 'px'
            el.style.top = position.top + 'px'
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
            expect(position).to.eql({ top: top, left: left })
          })
        })
      })
    })
  })
})
