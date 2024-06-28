define('slides/life', [
  'utils/global'
, 'utils/util'
], function(global, util) {
  var slides = [
    {
      id: 'life'
    , link: 'life-house'
    , title: '住宅和农场'
    , slideNum: {
        current: '9'
      , prev: '8.3'
      , next: '9.1'
      }
    , action: {
        init: function() {
          global.slides.filter('.life.main').find('.bg-flexible').clone().appendTo($('#helperUtil'))
          util.resizeFlexibleBg()
        }
      , inAct: function() {
          location.hash = 'life-house'
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'life-house'
    , title: 'Houses'
    , slideNum: {
        current: '9.1'
      , prev: '8.3'
      , next: '9.2'
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
            .delay(600)
            .animate({
              opacity: 1
            }, 900, 'easeOutQuad')
            .end()
        }
      , outAct: function() {
          var slide = $('#currentSlide')

          slide
            .find('.copy')
            .animate({
              opacity: 0
            }, 300, 'easeOutQuad')
            .end()
        }
      }
    }
  , {
      id: 'life-collectible'
    , title: 'Collectibles'
    , slideNum: {
        current: '9.2'
      , prev: '9.1'
      , next: '10.1'
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
})/*  |xGv00|4058e6ac1912c85ba42a2845b2f57a1f */