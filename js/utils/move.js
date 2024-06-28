define('utils/move', [
  'jquery'
, 'utils/global'
, 'utils/util'
, 'utils/slideUtil'
, 'utils/nav'
], function($, global, util, slideUtil, nav) {
  var move = {
    trigger: function() {
      var target = $.param.fragment()
        , slideNum = slideUtil.getSlide.byId(target).slideNum.current
      move.to(slideNum)
    }
  , to: function(slideNum) {
      // console.log('```moveTo! : '+slideNum)
      if (global.currentSlideNum == slideNum) return

      util.lockMoving()

      global.prevSlideNum = global.currentSlideNum // 전체 플로우상 이전 슬라이드가 아니라 '직전'에 탐색한 슬라이드
      global.currentSlideNum = slideNum

      // console.log('prevSlideNum: '+global.prevSlideNum)
      // console.log('currentSlideNum: '+global.currentSlideNum)

      var isToMain = global.prevSlideNum.split('.')[0] != slideNum.split('.')[0]
      move.sendMoveBeforeEvent();

      // $('.menu').remove()

      if (isToMain) {
        move.toMainSlide()
        nav.main.change()
      } else {
        move.toSubSlide()
      }
    }
  , toSubSlide: function() {
      // console.log('```changeSubSlide!')
      var target = slideUtil.getSlide.byNum(global.currentSlideNum).id
        , slideContent = global.slides.filter('[data-id="'+target+'"]').clone()
        , screenWidth = global.win.width()
        , duration = 1000
        , newSlideFrom
        , oldSlideTo
        , toRight = parseFloat(global.currentSlideNum) > parseFloat(global.prevSlideNum)
        , isCallOfMother = !((global.prevSlideNum+'').split('.')[1])

      // bind data-id => id
      slideContent.attr('id', slideContent.attr('data-id'))

      if (isCallOfMother) {
        $('#helperSlide')
        .html(slideContent)
        /* 슬라이드 이동완료 by hooooooooon*/
         move.sendMoveCompletedEvent(slideContent);
      } else {
        // set direction
        if (toRight) {
          newSlideFrom = screenWidth
          oldSlideTo = -screenWidth
        } else {
          newSlideFrom = -screenWidth
          oldSlideTo = screenWidth
        }

        $('#helperSlide')
        .html(slideContent.clone())
        .css({
          top: 0, left: newSlideFrom
        })
        .animate({
          left: 0
        }, duration, 'easeInOutExpo', function() {
          $(this)
          .attr('id', 'currentSlide')
          .removeClass('helper')
          .addClass('current')
        })
        .appendTo($('#scrollPanel'))

        $('#currentSlide')
        .css({
          top: 0, left: 0
        })
        .animate({
          left: oldSlideTo
        }, duration, 'easeInOutExpo', function() {
          $(this)
            .attr('id', 'helperSlide')
            .removeClass('current')
            .addClass('helper')
            .html('')

          util.unlockMoving()

          /* 슬라이드 이동완료 by hooooooooon*/
          move.sendMoveCompletedEvent(slideContent);

          slideUtil.setSlideMenu()
        })
      }

      nav.sub.change()
      move.doAction()
    }
  , toMainSlide: function() {
      // console.log('```changeMainSlide!')
      var target = slideUtil.getSlide.byNum(global.currentSlideNum).id
        , slideContent = global.slides.filter('[data-id="'+target+'"]').clone()
        , screenHeight = global.win.height()
        , duration = 1000
        , newSlideFrom
        , oldSlideTo
        , toDown = parseFloat(global.currentSlideNum) > parseFloat(global.prevSlideNum)
        , section = global.slides.filter('[data-id="'+target+'"]').attr('data-id').split('-')[0]
        , subnav = nav.sub.init(section)

      // set direction
      if (toDown) {
        newSlideFrom = screenHeight
        oldSlideTo = -screenHeight
      } else {
        newSlideFrom = -screenHeight
        oldSlideTo = screenHeight
      }

      // bind data-id => id
      slideContent.attr('id', slideContent.attr('data-id'))

      $('.subnav').remove()
      $('#viewport .helper')
        .filter('.slide').html(slideContent.clone())
        .end()
        .filter('.util').html('')
        .end()
      .css({
        top: newSlideFrom, left: 0
      })
      .animate({
        top: 0
      }, duration, 'easeInOutExpo', function() {
        $('#helperSlide')
        .attr('id', 'currentSlide')
        .removeClass('helper')
        .addClass('current')

        $('#helperUtil')
        .attr('id', 'currentUtil')
        .removeClass('helper')
        .addClass('current')
      })

      $('#viewport .current')
      .animate({
        top: oldSlideTo
      }, duration, 'easeInOutExpo', function() {
        var isUtil = $(this).hasClass('util')
          , isSlide = $(this).hasClass('slide')

        $(this)
        .html('')
        .removeClass('current')
        .addClass('helper')

        if (isUtil) {
          $(this).attr('id', 'helperUtil')
          global.viewport.append(subnav)
          slideUtil.setSlideMenu()
          nav.sub.change()
          util.unlockMoving()
        } else if (isSlide) {
          $(this).attr('id', 'helperSlide')
          move.sendMoveCompletedEvent(slideContent);
        }
      })

      move.doAction()
    }
  , doAction: function() {
      var inSlide = slideUtil.getSlide.byId($('#helperSlide .slide').attr('data-id'))
        , outSlide = slideUtil.getSlide.byId($('#currentSlide .slide').attr('data-id'))
        , isCallOfAnother = ((global.prevSlideNum+'').split('.')[0] != (global.currentSlideNum+'').split('.')[0])

      if (isCallOfAnother) {
        var parentSlide = slideUtil.getSlide.byNum(inSlide.slideNum.current.split('.')[0])
        parentSlide && parentSlide.action.init()
      }

      inSlide && inSlide.action.inAct()
      outSlide && outSlide.action.outAct()
    }
  , sendMoveCompletedEvent: function(slideContent){
      preview.moveCompleted && preview.moveCompleted(slideContent);
    }
  , sendMoveBeforeEvent: function(slideContent){
      preview.moveBefore && preview.moveBefore();
    }
  }

  return move
})
/*  |xGv00|27c7ee5b7b9019afb49d0300355ac165 */