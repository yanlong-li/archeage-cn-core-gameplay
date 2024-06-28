define('slides/glider', [
  'utils/global'
, 'utils/util'
], function(global, util) {
  var slides = [
	  {
	    id: 'glider'
    , link: 'glider-main'
	  , title: '滑翔翼'
	  , slideNum: {
        current: '6'
      , prev: '5.2'
      , next: '6.1'
	    }
    , action: {
        init: function() {
          global.slides.filter('.glider.main').find('.bg-flexible').clone().appendTo($('#helperUtil'))
          util.resizeFlexibleBg()
        }
      , inAct: function() {
          location.hash = 'glider-main'
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'glider-main'
    , title: 'Gliders'
    , slideNum: {
        current: '6.1'
      , prev: '5.2'
      , next: '6.2'
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
            }, 1400, 'easeInOutExpo')
            .end()
            .find('.flying1')
            .css({
              left: '0'
            , top: '100%'
            })
            .animate({
              left: '50%'
            , top: '50%'
            }, 1800, 'easeInOutExpo')
            .end()
            .find('.flying2')
            .css({
              left: '100%'
            , top: '50%'
            })
            .animate({
              left: '50%'
            , top: '50%'
            }, 1600, 'easeInOutExpo')
            .end()
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'glider-video'
    , title: 'Glider Videos'
    , slideNum: {
        current: '6.2'
      , prev: '6.1'
      , next: '6.3'
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
      id: 'glider-play'
    , title: 'How to Enjoy Your Glider'
    , slideNum: {
        current: '6.3'
      , prev: '6.2'
      , next: '8.1'
      }
    , action: {
        init: function() {
        }
      , inAct: function() {
          var airCraft = $('#helperSlide').find('.side-aircraft')

          airCraft
          .css({
            left: '-400px'
          , bottom: '-550px'
          })
          .animate({
            left: 0
          , bottom: 0
          }, 1200, 'easeOutCirc')

          util.setBlind()
        }
      , outAct: function() {
          util.removeBlind()
        }
      }
    }
  ]

  return slides
})/*  |xGv00|81317418f8d27bca928c7403680ff105 */