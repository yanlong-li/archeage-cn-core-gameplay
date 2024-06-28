define('slides/ship', [
  'utils/global'
, 'utils/util'
], function(global, util) {
  var floating

  var slides = [
    {
      id: 'ship'
    , link: 'ship-main'
    , title: '船舶'
    , slideNum: {
        current: '4'
      , prev: '3'
      , next: '4.1'
      }
    , action: {
        init: function() {
          global.slides.filter('.ship.main').find('.bg-flexible').clone().appendTo($('#helperUtil'))
          util.resizeFlexibleBg()
        }
      , inAct: function() {
          location.hash = 'ship-main'
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'ship-main'
    , title: 'Ships'
    , slideNum: {
        current: '4.1'
      , prev: '3'
      , next: '4.2'
      }
    , action: {
        init: function() {
        }
      , inAct: function() {
          var slide = $('#helperSlide')

          slide
            .find('.copy')
            .css({
              opacity: 0
            })
            .delay(300)
            .animate({
              opacity: 1
            }, 900, 'easeOutQuad')
            .end()
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'ship-warfare'
    , title: 'Naval Combat Videos'
    , slideNum: {
        current: '4.2'
      , prev: '4.1'
      , next: '4.3'
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
      id: 'ship-kraken'
    , title: 'Kraken Videos'
    , slideNum: {
        current: '4.3'
      , prev: '4.2'
      , next: '4.4'
      }
    , action: {
        init: function() {
          // console.log('init: '+this.title)
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
      id: 'ship-boat'
    , title: 'Rowboat'
    , slideNum: {
        current: '4.4'
      , prev: '4.3'
      , next: '5.1'
      }
    , action: {
        init: function() {
        }
      , inAct: function() {
          var slide = $('#helperSlide')

          slide
            .find('.side-picture')
            .css({
              opacity: 0
            })
            .animate({
              opacity: 1
            }, 1200, 'easeInQuad')
            .end()
            .find('.side-boat')
            .css({
              opacity: 0
            , left: '-100px'
            , bottom: '60px'
            })
            .animate({
              opacity: 1
            , left: 0
            , bottom: 0
            }, 1200, 'easeInQuad')
            .end()

          util.setBlind()
        }
      , outAct: function() {
          util.removeBlind()
        }
      }
    }
  ]

  return slides
})/*  |xGv00|565259a8c21a4f66498c95ff3045c75c */