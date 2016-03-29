/* globals describe beforeEach afterEach it */
var positions = require('../lib/positions')
var expect = require('chai').expect
var create = require('./lib/create')
var permute = require('./lib/permute')

describe('scroll', function () {
  afterEach(function () {
    document.body.innerHTML = ''
    document.body.setAttribute('style', '')
  })
  describe('fixed with relative parent and absolute target', function () {
    var el, target, parent, myStyle, targetStyle, myParentStyle
    beforeEach(function () {
      myStyle = {
        top: 140,
        left: 30,
        width: 20,
        height: 20,
        position: 'fixed',
        background: 'rgba(255, 0, 0, 0.5)'
      }
      targetStyle = {
        top: 200,
        left: 20,
        width: 40,
        height: 40,
        position: 'absolute',
        background: 'rgba(0, 255, 0, 0.5)'
      }
      myParentStyle = {
        top: 40,
        left: 30,
        width: 200,
        height: 100,
        overflow: 'scroll',
        position: 'relative',
        background: 'rgba(0,0,0,0.1)'
      }
      el = create(myStyle)
      target = create(targetStyle)
      parent = create(myParentStyle)
      document.body.style.border = '1px solid black'
      parent.appendChild(el)
      parent.appendChild(target)
      parent.scrollTop = 140
    })
    permute(function (myVertical, myHorizontal, theirVertical, theirHorizontal) {
      it([
        'should correctly position my', myVertical, myHorizontal,
        'at their', theirVertical, theirHorizontal
      ].join(' '), function () {
        var left = targetStyle.left + parent.offsetLeft - parent.scrollLeft
        var top = targetStyle.top + parent.offsetTop - parent.scrollTop
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
  describe('fixed with absolute parent and absolute target', function () {
    var el, target, parent, myStyle, targetStyle, myParentStyle
    beforeEach(function () {
      myStyle = {
        top: 140,
        left: 30,
        width: 20,
        height: 20,
        position: 'fixed',
        background: 'rgba(255, 0, 0, 0.5)'
      }
      targetStyle = {
        top: 200,
        left: 20,
        width: 40,
        height: 40,
        position: 'absolute',
        background: 'rgba(0, 255, 0, 0.5)'
      }
      myParentStyle = {
        top: 40,
        left: 30,
        width: 200,
        height: 100,
        overflow: 'scroll',
        position: 'absolute',
        background: 'rgba(0,0,0,0.1)'
      }
      document.body.style.border = '1px solid black'
      el = create(myStyle)
      target = create(targetStyle)
      parent = create(myParentStyle)
      parent.appendChild(el)
      parent.appendChild(target)
      parent.scrollTop = 140
    })
    permute(function (myVertical, myHorizontal, theirVertical, theirHorizontal) {
      it([
        'should correctly position my', myVertical, myHorizontal,
        'at their', theirVertical, theirHorizontal
      ].join(' '), function () {
        var left = targetStyle.left + parent.offsetLeft - parent.scrollLeft
        var top = targetStyle.top + parent.offsetTop - parent.scrollTop
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
  describe('fixed with absolute parent and fixed target', function () {
    var el, target, parent, myStyle, targetStyle, myParentStyle
    beforeEach(function () {
      myStyle = {
        top: 140,
        left: 30,
        width: 20,
        height: 20,
        position: 'fixed',
        background: 'rgba(255, 0, 0, 0.5)'
      }
      targetStyle = {
        top: 200,
        left: 20,
        width: 40,
        height: 40,
        position: 'fixed',
        background: 'rgba(0, 255, 0, 0.5)'
      }
      myParentStyle = {
        top: 40,
        left: 30,
        width: 200,
        height: 100,
        overflow: 'scroll',
        position: 'relative',
        background: 'rgba(0,0,0,0.1)'
      }
      document.body.style.border = '1px solid black'
      el = create(myStyle)
      target = create(targetStyle)
      parent = create(myParentStyle)
      parent.appendChild(el)
      parent.appendChild(target)
      parent.scrollTop = 140
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
  describe('absolute with absolute parent and absolute target', function () {
    var el, target, parent, myStyle, targetStyle, myParentStyle
    beforeEach(function () {
      myStyle = {
        top: 140,
        left: 30,
        width: 20,
        height: 20,
        position: 'absolute',
        background: 'rgba(255, 0, 0, 0.5)'
      }
      targetStyle = {
        top: 200,
        left: 20,
        width: 40,
        height: 40,
        position: 'absolute',
        background: 'rgba(0, 255, 0, 0.5)'
      }
      myParentStyle = {
        top: 40,
        left: 30,
        width: 200,
        height: 100,
        overflow: 'scroll',
        position: 'relative',
        background: 'rgba(0,0,0,0.1)'
      }
      el = create(myStyle)
      target = create(targetStyle)
      parent = create(myParentStyle)
      parent.appendChild(el)
      parent.appendChild(target)
      parent.scrollTop = 140
    })
    permute(function (myVertical, myHorizontal, theirVertical, theirHorizontal) {
      it([
        'should correctly position my', myVertical, myHorizontal,
        'at their', theirVertical, theirHorizontal
      ].join(' '), function () {
        var left = target.offsetLeft
        var top = target.offsetTop
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
  describe('absolute with relative parent and relative target', function () {
    var el, target, parent, myStyle, targetStyle, myParentStyle
    beforeEach(function () {
      myStyle = {
        top: 140,
        left: 30,
        width: 20,
        height: 20,
        position: 'absolute',
        background: 'rgba(255, 0, 0, 0.5)'
      }
      targetStyle = {
        width: 40,
        height: 40,
        position: 'relative',
        'margin-left': '20px',
        'margin-top': '200px',
        background: 'rgba(0, 255, 0, 0.5)'
      }
      myParentStyle = {
        top: 40,
        left: 30,
        width: 200,
        height: 100,
        overflow: 'scroll',
        position: 'relative',
        background: 'rgba(0,0,0,0.1)'
      }
      el = create(myStyle)
      target = create(targetStyle)
      parent = create(myParentStyle)
      parent.appendChild(el)
      parent.appendChild(target)
      parent.scrollTop = 140
    })
    permute(function (myVertical, myHorizontal, theirVertical, theirHorizontal) {
      it([
        'should correctly position my', myVertical, myHorizontal,
        'at their', theirVertical, theirHorizontal
      ].join(' '), function () {
        var left = target.offsetLeft
        var top = target.offsetTop
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
  describe('parent is body and is absolute and target is relative', function () {
    var el, target, myStyle, targetStyle, fillerStyle
    beforeEach(function () {
      myStyle = {
        top: 140,
        left: 30,
        width: 20,
        height: 20,
        position: 'absolute',
        background: 'rgba(255, 0, 0, 0.5)'
      }
      targetStyle = {
        width: 40,
        height: 40,
        position: 'relative',
        'margin-left': '20px',
        'margin-top': '200px',
        background: 'rgba(0, 255, 0, 0.5)'
      }
      fillerStyle = {
        width: 20,
        height: Math.min(1000000000, window.innerHeight * 100),
        position: 'relative',
        background: 'rgba(0,0,0,0.1)'
      }
      document.body.style.margin = '8px'
      el = create(myStyle)
      target = create(targetStyle)
      create(fillerStyle)
      window.scroll(0, 100)
    })
    permute(function (myVertical, myHorizontal, theirVertical, theirHorizontal) {
      it([
        'should correctly position my', myVertical, myHorizontal,
        'at their', theirVertical, theirHorizontal
      ].join(' '), function () {
        var left = parseInt(target.offsetLeft, 10)
        var top = parseInt(target.offsetTop, 10)
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
  describe('parent is body and is absolute and target is fixed', function () {
    var el, target, myStyle, targetStyle, fillerStyle, scroll
    beforeEach(function () {
      scroll = 100
      myStyle = {
        top: 140,
        left: 30,
        width: 20,
        height: 20,
        position: 'absolute',
        background: 'rgba(255, 0, 0, 0.5)'
      }
      targetStyle = {
        width: 40,
        height: 40,
        position: 'fixed',
        'margin-left': '20px',
        'margin-top': '200px',
        background: 'rgba(0, 255, 0, 0.5)'
      }
      fillerStyle = {
        width: 20,
        height: Math.min(1000000000, window.innerHeight * 100),
        position: 'relative',
        background: 'rgba(0,0,0,0.1)'
      }
      document.body.style.margin = '8px'
      el = create(myStyle)
      target = create(targetStyle)
      create(fillerStyle)
      window.scroll(0, scroll)
    })
    permute(function (myVertical, myHorizontal, theirVertical, theirHorizontal) {
      it([
        'should correctly position my', myVertical, myHorizontal,
        'at their', theirVertical, theirHorizontal
      ].join(' '), function () {
        var left = parseInt(target.offsetLeft, 10)
        var top = parseInt(target.offsetTop, 10) + scroll
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
  describe('parent is body and is fixed and target is relative', function () {
    var el, target, myStyle, targetStyle, fillerStyle, scroll
    beforeEach(function () {
      myStyle = {
        top: 140,
        left: 30,
        width: 20,
        height: 20,
        position: 'fixed',
        background: 'rgba(255, 0, 0, 0.5)'
      }
      targetStyle = {
        width: 40,
        height: 40,
        position: 'relative',
        'margin-left': '20px',
        'margin-top': '200px',
        background: 'rgba(0, 255, 0, 0.5)'
      }
      fillerStyle = {
        width: 20,
        height: Math.min(1000000000, window.innerHeight * 100),
        position: 'relative',
        background: 'rgba(0,0,0,0.1)'
      }
      document.body.style.margin = '8px'
      el = create(myStyle)
      target = create(targetStyle)
      create(fillerStyle)
      scroll = 100
      window.scroll(0, scroll)
    })
    permute(function (myVertical, myHorizontal, theirVertical, theirHorizontal) {
      it([
        'should correctly position my', myVertical, myHorizontal,
        'at their', theirVertical, theirHorizontal
      ].join(' '), function () {
        var left = parseInt(target.offsetLeft, 10)
        var top = parseInt(target.offsetTop, 10) - scroll
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
  describe('parent is body and is fixed and target is fixed', function () {
    var el, target, myStyle, targetStyle, fillerStyle, scroll
    beforeEach(function () {
      scroll = 100
      myStyle = {
        top: 140,
        left: 30,
        width: 20,
        height: 20,
        position: 'fixed',
        background: 'rgba(255, 0, 0, 0.5)'
      }
      targetStyle = {
        width: 40,
        height: 40,
        position: 'fixed',
        'margin-left': '20px',
        'margin-top': '200px',
        background: 'rgba(0, 255, 0, 0.5)'
      }
      fillerStyle = {
        width: 20,
        height: Math.min(1000000000, window.innerHeight * 100),
        position: 'relative',
        background: 'rgba(0,0,0,0.1)'
      }
      document.body.style.margin = '8px'
      el = create(myStyle)
      target = create(targetStyle)
      create(fillerStyle)
      window.scroll(0, scroll)
    })
    permute(function (myVertical, myHorizontal, theirVertical, theirHorizontal) {
      it([
        'should correctly position my', myVertical, myHorizontal,
        'at their', theirVertical, theirHorizontal
      ].join(' '), function () {
        var left = parseInt(target.offsetLeft, 10)
        var top = parseInt(target.offsetTop, 10)
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
