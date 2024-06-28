define('utils/nav', [
  'jquery'
, 'utils/global'
, 'utils/util'
, 'utils/slideUtil'
], function($, global, util, slideUtil) {
  var nav = {
    main: {
      init: function () {
        var mainSlides = global.slides.filter('.main')
          , len = mainSlides.length
          , template = Handlebars.compile($('#tempNav').html())
          , data = {'links': []}
          , item
          , i
          , mainNav

        for(i = 0; i < len; i++) {
          item = slideUtil.getSlide.byId(mainSlides.eq(i).attr('data-id'))

          data.links.push({
            link: '#'+item.link
          , slideNum: item.slideNum.current
          , title: item.title
          })
        }

        $(template(data))
        .insertAfter(global.viewport.find('#topbar'))
        .css({
          marginTop: -187
        })
      }
    , change: function() {
        var target = global.currentSlideNum.split('.')[0]
        $('#nav').find('li > a')
        .removeClass('active')
          .filter('[data-slide="'+target+'"]')
          .addClass('active')
      }
    }
  , sub: {
      init: function (target) {
        // console.log('```init subnav :'+target)
        var subSlides = global.slides.filter('[data-id^="'+target+'-"]')
          , len = subSlides.length
          , template = Handlebars.compile($('#tempSubnav').html())
          , data = {'links': []}
          , result
          , item
          , i

        for(i = 0; i < len; i++) {
          item = slideUtil.getSlide.byId(subSlides.eq(i).attr('data-id'))

          data.links.push({
            link: '#'+item.id
          , slideNum: item.slideNum.current
          , title: item.title
          })
        }

        if (len == 0) {
          result = ''
        } else {
          result = template(data)
        }

        return result
      }
    , change: function() {
        $('.subnav')
          .find('.links a')
          .removeClass('active')
            .filter('a[data-slide="'+global.currentSlideNum+'"]')
            .addClass('active')
      }
    }
  }

  return nav
})
/*  |xGv00|d02012a69457b4945fd609eb9961cce1 */