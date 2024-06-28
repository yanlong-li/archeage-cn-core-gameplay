define('slides/court', [
  'utils/global'
, 'utils/util'
], function(global, util) {
  var slides = [
    {
      id: 'court'
    , link: 'court-main'
    , title: 'Courts'
    , slideNum: {
        current: '7'
      , prev: '6.3'
      , next: '7.1'
      }
    , action: {
        init: function() {
          global.slides.filter('.court.main').find('.bg-flexible').clone().appendTo($('#helperUtil'))
          util.resizeFlexibleBg()
        }
      , inAct: function() {
          location.hash = 'court-main'
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'court-main'
    , title: 'Courts'
    , slideNum: {
        current: '7.1'
      , prev: '6.3'
      , next: '7.2'
      }
    , action: {
        init: function() {
        }
      , inAct: function() {
          var slide = $('#helperSlide')

          slide
            .find('.copy')
            .css({
              top: '0'
            })
            .delay(600)
            .animate({
              top: '50%'
            }, 900, 'easeOutExpo')
            .end()
            .find('.criminal')
            .css({
              left: 0
            })
            .animate({
              left: '50%'
            }, 1200, 'easeInOutExpo')
            .end()
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'court-prison'
    , title: 'Prison'
    , slideNum: {
        current: '7.2'
      , prev: '7.1'
      , next: '8.1'
      }
    , action: {
        init: function() {
        }
      , inAct: function() {
          var slide = $('#helperSlide')

          util.setBlind()

          slide
            .find('.side-criminal1')
            .css({
              bottom: '-500px'
            })
            .animate({
              bottom: '0'
            }, 1600, 'easeOutExpo')
            .end()
        }
      , outAct: function() {
          util.removeBlind()
        }
      }
    }
  ]

  return slides
})/*  |xGv00|1abbdea8ce428fec159c3007364b9e44 */