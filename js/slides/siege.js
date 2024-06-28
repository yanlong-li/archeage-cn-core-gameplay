define('slides/siege', [
  'utils/global'
, 'utils/util'
], function(global, util) {
  var slides = [
    {
      id: 'siege'
    , link: 'siege-main'
    , title: '攻城战'
    , slideNum: {
        current: '10'
      , prev: '9.2'
      , next: '10.1'
      }
    , action: {
        init: function() {
          global.slides.filter('.siege.main').find('.bg-rumble').clone().appendTo($('#helperUtil'))
          util.resizeFlexibleBg()
        }
      , inAct: function() {
          location.hash = 'siege-main'
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'siege-main'
    , title: 'Siege Battles'
    , slideNum: {
        current: '10.1'
      , prev: '9.2'
      , next: '10.2'
      }
    , action: {
        init: function() {
        }
      , inAct: function() {
          
          var bg = $('.bg-rumble')

          bg
          .jrumble({
            x: 2
          , y: 2
          })

          setTimeout(function() {
            bg.trigger('startRumble')
          }, 800)
          
          setTimeout(function() {
            bg.trigger('stopRumble')
          }, 1400)
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'siege-video'
    , title: 'Siege Videos'
    , slideNum: {
        current: '10.2'
      , prev: '10.1'
      , next: '10.2'
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
})/*  |xGv00|288cd5854006425281e95b7229042035 */