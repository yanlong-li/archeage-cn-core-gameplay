define('utils/slideUtil', [
  'jquery'
, 'utils/global'
, 'slides/slide'
], function($, global, slides) {

  var slideUtil = {
    changeSlide: function(slideNum) {
      var target = slideUtil.getSlide.byNum(slideNum).id

      target && slideUtil.changeHash(target)
    }
  , changeHash: function(target) {
      if(global.moveReady) location.hash = target
    }
  , getSlide: {
      byNum: function(slideNum) {
        var len = slides.length
          , i

        for (i = 0; i < len; i++) {
          if (slides[i].slideNum.current == slideNum) {
            return slides[i]
          } 
        }
      }
    , byId: function(id) {
        var len = slides.length
          , i

        for (i = 0; i < len; i++) {
            if(!slides[i]){
                continue;
            }
          if (slides[i].id == id) {
            return slides[i]
          } 
        }
      }
    }
  , setSlideMenu: function() {
      var target = slideUtil.getSlide.byNum(global.currentSlideNum)
      //   , link = {}
      //   , template = Handlebars.compile($('#tempMenu').html())
      //   , data = {
      //       id: target.id
      //     , facebook: link.facebook
      //     , me2day: link.me2day
      //     , twitter: link.twitter
      //     , wiki: link.wiki
      //     }
      //   , result
      // if (target.noUtil) {
      //   result = '<div class="menu" style="background: none; width: 0; height: 0;"></div>'
      // } else {
      //   result = template(data)
      // }

      // return result
      if (target.noUtil) {
        $('.menu .link-top').hide()
      } else {
        $('.menu .link-top').show()
      }
    }
  }

  return slideUtil
})/*  |xGv00|14db477ce6ddddb8a29e423ef5b608a9 */