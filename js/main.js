require([
  'jquery'
, 'utils/global'
, 'utils/util'
, 'utils/slideUtil'
, 'utils/move'
, 'utils/nav'
, 'utils/bgmView'
, 'lib/jpreloader.min'
, 'lib/jquery.mousewheel.min'
, 'lib/jquery.easing.1.3'
, 'lib/keymaster.min'
, 'lib/jquery.ba-bbq.min'
, 'lib/handlebars-1.0.rc.1.min'
, 'lib/modernizr.custom.72077'
, 'lib/jrumble.min'
], function($, global, util, slideUtil, move, nav, bgm) {
  $(function() {

    // assets preload
    $('body')
    .jpreLoader({
      splashID: '#preloader'
    // , autoClose: false
    , loaderVPos: '50%'
    , splashVPos: '0'
    , showPercentage: false
    }, init);
    // init()

    function init() {
      try {
        preview = new ArcheAge.Preview.Service()
      } catch(E) {
        preview = {}
      }
      nav.main.init()
      bindEvent()
      // setEvt()
      $("body").on("keydown", function(e){
    	if(e.keyCode == 27){
    		$('#fansiteBridge').hide()
            $('#topbar .btn-bridge').removeClass('active')
    	}
      })
      $('#preloader').remove()
      $('#viewport').show()

      if (location.hash) {
        $(this).trigger('hashchange')
      } else {
        location.hash = '#index'
      }

      if (!location.hash || location.hash != '#index') {
        preview.bgm.autoPlay()
      }
    }
    function bindEvent() {
      $(window)
      .on('hashchange', function(){
    	  move.trigger();
      })
      .on('resize', util.resizeFlexibleBg)

      $('#oldIE .btn-close').on('click', function() {$('#oldIE').remove()})

      global.viewport
      .on('mousewheel', function(e, delta) {
        e.preventDefault()
        var target = slideUtil.getSlide.byNum(global.currentSlideNum).slideNum
          , slideNum = delta > 0 ? target.prev : target.next

        slideUtil.changeSlide(slideNum)
      })
      // 네비게이션
      .on('click', 'a', function(e) {
        var target = $(this).attr('href')

        if ($.browser.msie && $.browser.version < 8) {
          target = target.split('#')[1]
        } else {
          if(!target.split('#')[0]) {
            e.preventDefault()

            if (target == location.hash.split('-')[0]) return

            slideUtil.changeHash(target)
          }
        }
      })
        .find('#nav')
        .hover(
          function() {
            $('#nav')
            .stop()
            .animate({
              width: '170px'
            }, 200, 'easeInExpo')
          }, function() {
            $('#nav')
            .stop()
            .animate({
              width: '10px'
            }, 200, 'easeOutExpo')
          }
        )
        .on('focus', 'a', function() {
          $('#nav')
          .css({
            width: '170px'
          })
        })
        .on('blur', 'a', function() {
          $('#nav')
          .css({
            width: '10px'
          })
        })
        .end()
      .on('hover focus', '.subnav a', function() {
        var me = $(this)
          , targetLabel = me.text()
          , subNav = global.viewport.find('.subnav')
          , tooltip = subNav.find('.tooltip')
          , tooltipLabel = tooltip.find('.txt')
          , posX

          tooltipLabel.html(targetLabel)
          posX = me.offset().left - 93
          tooltip.css({left: posX}).show()
      })
      .on('mouseout blur', '.subnav a', function() {
        var subNav = global.viewport.find('.subnav')
          , tooltip = subNav.find('.tooltip')
        tooltip.hide()
      })
      .on('click', '.v-panel .btns a', function() {
        var me = $(this)
          , btns = me.parent().children()
          , weight = btns.index(me)
          , width = 680
          , leftPos = -(weight * width)
          , pics = me.parent().parent().find('.pics .list')

          btns.removeClass('active')

          me.addClass('active')

          pics.animate({
            left: leftPos
          }, 400, 'easeInExpo')
      })
      .on('click', '.h-panel .btns a', function() {
        var me = $(this)
          , btns = me.parent().children()
          , weight = btns.index(me)
          , width = 700
          , leftPos = -(weight * width)
          , pics = me.parent().parent().find('.pics .list')

          btns.removeClass('active')

          me.addClass('active')

          pics.animate({
            left: leftPos
          }, 400, 'easeInExpo')
      })
      .on('click', '.btn-bridge', function(e) {
        e.preventDefault()
        $('#fansiteBridge').toggle()
        $(this).toggleClass('active')
      })

      $('#fansiteBridge').on('click', '.btn-close', function(e) {
        e.preventDefault()
        $('#fansiteBridge').toggle()
        $('#topbar .btn-bridge').removeClass('active')
      })

      key('up, left, backspace, pageup', 'viewport',function(e) {
        e.returnValue = false
        e.preventDefault && e.preventDefault()

        var target = slideUtil.getSlide.byNum(global.currentSlideNum).slideNum.prev

        slideUtil.changeSlide(target)
      })
      key('down, right, space, pagedown', 'viewport', function(e) {
        e.returnValue = false
        e.preventDefault && e.preventDefault()

        var target = slideUtil.getSlide.byNum(global.currentSlideNum).slideNum.next

        slideUtil.changeSlide(target)
      })
      key.setScope('viewport')

      preview.bgm = bgm;
      preview.bgm.init();
    }
    function setEvt() {
      var nav = $('#nav')
        , navMarginTop = -374/2+'px' //parseInt(nav.css('marginTop'), 10) - (180 / 2)
        , navHeight = nav.find('.nav-box').css('height')

      nav.css({
        marginTop: navMarginTop
      })
    }
  })
})
/*  |xGv00|282319bac20b1b2a6db9fb3d259700e0 */