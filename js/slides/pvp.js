define('slides/pvp', [
  'utils/global'
, 'utils/util'
], function(global, util) {
  var slides = [
    {
      id: 'pvp'
    , link: 'pvp-main'
    , title: 'PvP'
    , slideNum: {
        current: '8'
      , prev: '6.3'
      , next: '8.1'
      }
    , action: {
        init: function() {
          global.slides.filter('.pvp.main').find('.bg-flexible').clone().appendTo($('#helperUtil'))
          util.resizeFlexibleBg()
        }
      , inAct: function() {
          location.hash = 'pvp-main'
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'pvp-main'
    , title: 'PvP'
    , slideNum: {
        current: '8.1'
      , prev: '6.3'
      , next: '8.2'
      }
    , action: {
        init: function() {
        }
      , inAct: function() {
          var slide = $('#helperSlide')
            , copy = slide.find('.copy .inner')

          slide
            .find('.man-left')
            .css({
              left: '0'
            })
            .delay(400)
            .animate({
              left: '50%'
            }, 400, 'easeInOutCirc')
            .end()
            .find('.man-right')
            .css({
              left: '180%'
            })
            .delay(400)
            .animate({
              left: '50%'
            }, 400, 'easeInOutCirc')
            .end()
            .find('.copy')
            .css({
              opacity: 0
            })
            .delay(400)
            .animate({
              opacity: 1
            }, 400, 'easeInOutExpo')
            .end()

            // copy
            // .jrumble({
            //   x: 10
            // , y: 10
            // })

            // setTimeout(function() {
            //   copy
            //   .trigger('startRumble')
            // }, 800)
            
            // setTimeout(function() {
            //   copy.trigger('stopRumble')
            // }, 1200)
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'pvp-duel'
    , title: 'Duel Videos'
    , slideNum: {
        current: '8.2'
      , prev: '8.1'
      , next: '8.3'
      }
    , action: {
        init: function() {
        }
      , inAct: function() {
          util.setBlind()
        }
      , outAct: function() {
          util.removeBlind()
        }
      }
    }
  , {
      id: 'pvp-warfare'
    , title: 'Large-scale Combat Videos'
    , slideNum: {
        current: '8.3'
      , prev: '8.2'
      , next: '9.1'
      }
    , action: {
        init: function() {
        }
      , inAct: function() {
          util.setBlind()
        }
      , outAct: function() {
          util.removeBlind()
        }
      }
    }
  ]

  return slides
})/*  |xGv00|e589c963943ed94576235e375e90cd38 */