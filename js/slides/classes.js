define('slides/classes', [
  'utils/global'
, 'utils/util'
], function(global, util) {
  var slides = [
    {
      id: 'classes'
    , link: 'classes'
    , title: '120职业'
    , slideNum: {
        current: '2'
      , prev: '1.4'
      , next: '3'
      }
    , action: {
        init: function() {
          global.slides.filter('.classes.main').find('.bg-flexible').clone().appendTo($('#helperUtil'))
          util.resizeFlexibleBg()
        }
      , inAct: function() {
          var slide = $('#helperSlide')

          slide
            .find('.char')
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
        }
      }
    }
  ]

  return slides
})/*  |xGv00|987b7af964653e8070eb7c6ddd873095 */