/* globals describe beforeEach afterEach it */
var positions = require('../lib/positions')
var expect = require('chai').expect
var create = require('./lib/create')
var each = require('./lib/each')

describe('scroll', function () {
  describe('fixed', function () {
    var myStyle = {
      top: 140,
      left: 30,
      width: 20,
      height: 20,
      position: 'fixed',
      background: 'rgba(255, 0, 0, 0.5)'
    }
    var targetStyle = {
      top: 200,
      left: 20,
      width: 40,
      height: 40,
      position: 'absolute',
      background: 'rgba(0, 255, 0, 0.5)'
    }
    var myParentStyle = {
      top: 40,
      left: 30,
      width: 200,
      height: 100,
      overflow: 'scroll',
      position: 'relative',
      background: 'rgba(0,0,0,0.1)'
    }
    var el, target, parent
    beforeEach(function () {
      el = create(myStyle)
      target = create(targetStyle)
      parent = create(myParentStyle)
      parent.appendChild(el)
      parent.appendChild(target)
      parent.scrollTop = 140
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
              var left = targetStyle.left + parent.offsetLeft
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
      })
    })
  })
  describe('absolute', function () {
    var myStyle = {
      top: 140,
      left: 30,
      width: 20,
      height: 20,
      position: 'absolute',
      background: 'rgba(255, 0, 0, 0.5)'
    }
    var targetStyle = {
      top: 200,
      left: 20,
      width: 40,
      height: 40,
      position: 'absolute',
      background: 'rgba(0, 255, 0, 0.5)'
    }
    var myParentStyle = {
      top: 40,
      left: 30,
      width: 200,
      height: 100,
      overflow: 'scroll',
      position: 'relative',
      background: 'rgba(0,0,0,0.1)'
    }
    var el, target, parent
    beforeEach(function () {
      el = create(myStyle)
      target = create(targetStyle)
      parent = create(myParentStyle)
      parent.appendChild(el)
      parent.appendChild(target)
      parent.scrollTop = 140
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
    })
  })
  describe('relative', function () {
    var myStyle = {
      top: 140,
      left: 30,
      width: 20,
      height: 20,
      position: 'absolute',
      background: 'rgba(255, 0, 0, 0.5)'
    }
    var targetStyle = {
      width: 40,
      height: 40,
      position: 'relative',
      'margin-left': '20px',
      'margin-top': '200px',
      background: 'rgba(0, 255, 0, 0.5)'
    }
    var myParentStyle = {
      top: 40,
      left: 30,
      width: 200,
      height: 100,
      overflow: 'scroll',
      position: 'relative',
      background: 'rgba(0,0,0,0.1)'
    }
    var el, target, parent
    beforeEach(function () {
      el = create(myStyle)
      target = create(targetStyle)
      parent = create(myParentStyle)
      parent.appendChild(el)
      parent.appendChild(target)
      parent.scrollTop = 140
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
              var left = parseInt(targetStyle['margin-left'], 10)
              var top = parseInt(targetStyle['margin-top'], 10)
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
    })
  })
  describe('absolute', function () {
    var myStyle = {
      top: 140,
      left: 30,
      width: 20,
      height: 20,
      position: 'absolute',
      background: 'rgba(255, 0, 0, 0.5)'
    }
    var targetStyle = {
      top: 200,
      left: 20,
      width: 40,
      height: 40,
      position: 'absolute',
      background: 'rgba(0, 255, 0, 0.5)'
    }
    var myParentStyle = {
      top: 40,
      left: 30,
      width: 200,
      height: 100,
      overflow: 'scroll',
      position: 'relative',
      background: 'rgba(0,0,0,0.1)'
    }
    var el, target, parent
    beforeEach(function () {
      el = create(myStyle)
      target = create(targetStyle)
      parent = create(myParentStyle)
      parent.appendChild(el)
      parent.appendChild(target)
      parent.scrollTop = 140
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
    })
  })
  describe('window scroll', function () {
    var myStyle = {
      top: 140,
      left: 30,
      width: 20,
      height: 20,
      position: 'absolute',
      background: 'rgba(255, 0, 0, 0.5)'
    }
    var targetStyle = {
      width: 40,
      height: 40,
      position: 'relative',
      'margin-left': '20px',
      'margin-top': '200px',
      background: 'rgba(0, 255, 0, 0.5)'
    }
    var fillerStyle = {
      width: 20,
      height: Math.min(1000000000, window.innerHeight * 100),
      position: 'relative',
      background: 'rgba(0,0,0,0.1)'
    }
    var el, target
    beforeEach(function () {
      el = create(myStyle)
      target = create(targetStyle)
      create(fillerStyle)
      window.scroll(0, 100)
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
    })
  })
})
