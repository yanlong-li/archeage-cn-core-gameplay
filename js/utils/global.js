define('utils/global', [
], function() {
  var global = {
    win: $(window)
  , viewport: $('#viewport')
  , slides: $('#tempSlide .slide')
  , prevSlideNum: '0'
  , currentSlideNum: '-3'
  , moveReady: true
  }

  return global
})
/*  |xGv00|e1a27f68d9671de098a02b86c0f941d0 */