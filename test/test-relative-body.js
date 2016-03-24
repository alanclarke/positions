/* globals describe beforeEach afterEach it */
var expect = require('chai').expect
var create = require('./lib/create')
var size = require('../lib/size')
var permute = require('./lib/permute')
var positions = require('../lib/positions')

describe('containers', function () {
  afterEach(function () {
    document.body.innerHTML = ''
    document.body.setAttribute('style', '')
  })
  describe('window', function () {
    var el, target, myStyle, targetStyle, margin
    beforeEach(function () {
      myStyle = {
        top: 40,
        left: 30,
        width: 200,
        height: 100,
        position: 'absolute',
        background: 'rgba(0,0,255,0.1)'
      }
      targetStyle = {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
      margin = 8
      document.body.style.position = 'relative'
      document.body.style.margin = margin + 'px'
      document.body.style.border = '1px solid black'
      el = create(myStyle)
      target = window
    })
    permute(function (myVertical, myHorizontal, theirVertical, theirHorizontal) {
      it([
        'should correctly position my', myVertical, myHorizontal,
        'at their', theirVertical, theirHorizontal
      ].join(' '), function () {
        var left = targetStyle.left - margin
        var top = targetStyle.top - margin
        if (theirHorizontal === 'right') left += targetStyle.width
        if (theirHorizontal === 'center') left += (targetStyle.width) / 2
        if (theirVertical === 'bottom') top += targetStyle.height
        if (theirVertical === 'center') top += (targetStyle.height) / 2
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
    var el, target, docSize, myStyle, targetStyle, margin
    beforeEach(function () {
      docSize = size(document)
      myStyle = {
        top: 40,
        left: 30,
        width: 200,
        height: 100,
        position: 'absolute',
        background: 'rgba(0,0,255,0.1)'
      }
      targetStyle = {
        top: 0,
        left: 0,
        width: docSize.width,
        height: docSize.height
      }
      document.body.style.position = 'relative'
      margin = 8
      document.body.style.margin = margin + 'px'
      el = create(myStyle)
      target = document
    })
    permute(function (myVertical, myHorizontal, theirVertical, theirHorizontal) {
      it([
        'should correctly position my', myVertical, myHorizontal,
        'at their', theirVertical, theirHorizontal
      ].join(' '), function () {
        var left = targetStyle.left - margin
        var top = targetStyle.top - margin
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

  describe('body', function () {
    var el, target, myStyle, targetStyle, margin, bodySize
    beforeEach(function () {
      margin = 8
      document.body.style.position = 'relative'
      document.body.style.margin = margin + 'px'
      document.body.style.border = '1px solid black'
      bodySize = size(document.body)
      myStyle = {
        top: 40,
        left: 30,
        width: 200,
        height: 100,
        position: 'absolute',
        background: 'rgba(0,0,255,0.1)'
      }
      targetStyle = {
        top: 0,
        left: 0,
        width: bodySize.width,
        height: bodySize.height
      }
      el = create(myStyle)
      target = document.body
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
})
