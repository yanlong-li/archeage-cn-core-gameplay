define('slides/trade', [
  'utils/global'
, 'utils/util'
], function(global, util) {
  var slides = [
	  {
	    id: 'trade'
    , link: 'trade-main'
	  , title: '贸易'
	  , slideNum: {
        current: '5'
      , prev: '4.4'
      , next: '5.1'
	    }
    , action: {
        init: function() {
          global.slides.filter('.trade.main').find('.bg-flexible').clone().appendTo($('#helperUtil'))
          util.resizeFlexibleBg()
        }
      , inAct: function() {
          this.init()
          location.hash = 'trade-main'
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'trade-main'
    , title: 'Trade'
    , slideNum: {
        current: '5.1'
      , prev: '4.4'
      , next: '5.2'
      }
    , action: {
        init: function() {
        }
      , inAct: function() {
          var slide = $('#helperSlide')

          slide
            .find('.copy')
            .css({
              top: '100%'
            })
            .animate({
              top: '50%'
            }, 1200, 'easeOutCirc')
            .end()
            .find('.side')
            .css({
              left: '-1000px'
            })
            .animate({
              left: 0
            }, 1800, 'easeOutExpo')
            .end()
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'trade-transportation'
    , title: 'Transportation'
    , slideNum: {
        current: '5.2'
      , prev: '5.1'
      , next: '6.1'
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
})/*  |xGv00|d954364c77a3d8de3ba3b0762a876166 */