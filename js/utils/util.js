define('utils/util', [
  'jquery'
, 'utils/global'
], function($, global) {
  var util = {
    lockMoving: function() {
      // console.log('lock moving..!')
      global.moveReady = false
    }
  , unlockMoving: function() {
      // console.log('unlock moving..!')
      global.moveReady = true
    }
  , resizeFlexibleBg: function() {
      var screenWidth = global.win.width()
        , screenHeight = global.win.height()
        , bgImg = $('.bg-flexible').last()
        , bgImgWidth = 1920
        , bgImgHeight = 940
        , width
        , height
        , marginLeft
        , marginTop

      if (screenWidth > bgImgWidth) {
        width = screenWidth
        height = screenWidth / bgImgWidth * bgImgHeight
      } else {
        width = screenHeight / bgImgHeight * bgImgWidth
        height = screenHeight
        if (width < screenWidth) {
          width = screenWidth
          height = width / bgImgWidth * bgImgHeight
        }
      }

      marginLeft = -(width / 2)
      marginTop = -(height / 2)

      $('.bg-flexible').css({
        'width': width
      , 'height': height
      , 'margin-left': marginLeft
      , 'margin-top': marginTop
      })
    }
  , setBlind: function() {
      var currentUtil = $('.bg-flexible')
        , blind = $('<div class="blind"></div>')

      blind
      .insertAfter(currentUtil)
      .css({
        opacity: 0
      })
      .animate({
        opacity: .6
      }, 1000, 'easeInOutExpo', function() {
        $(this).addClass('blind-current')
      })
    }
  , removeBlind: function() {
      $('.blind-current')
      .animate({
        opacity: 0
      }, 1000, 'easeInOutExpo', function() {
        $(this).remove()
      })
    }
  }

  return util
})/*  |xGv00|53111cf7889f829e979ca931bee23072 */