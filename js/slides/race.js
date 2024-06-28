define('slides/race', [
  'utils/global'
, 'utils/util'
], function(global, util) {
  var slides = [
    {
      id: 'race'
    , link: 'race-nuian'
    , title: '种族'
    , slideNum: {
        current: '1'
      , prev: '0'
      , next: '1.1'
      }
    , action: {
        init: function() {
        }
      , inAct: function() {
          if (global.prevSlideNum == '1.1') {
            history.go(-1)
          } else {
            location.hash = 'race-nuian'
          }
        }
      , outAct: function() {
        }
      }
    }
  , {
     id: 'race-nuian'
    ,title: 'Nuian'
    , slideNum: {
        current: '1.1'
      , prev: '0'
      , next: '1.2'
      }
    , action: {
        init: function() {
        }
      , inAct: function() {
          changeBg('n')
          action('.female', '.male')
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'race-elf'
    , title: 'Elf'
    , slideNum: {
        current: '1.2'
      , prev: '1.1'
      , next: '1.3'
      }
    , action: {
        init: function() {
        }
      , inAct: function() {
          changeBg('e')
          action('.female', '.male')
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'race-hariharan'
    , title: 'Hariharan'
    , slideNum: {
        current: '1.3'
      , prev: '1.2'
      , next: '1.4'
      }
    , action: {
        init: function() {
        }
      , inAct: function() {
          changeBg('h')
          action('.female', '.male')
        }
      , outAct: function() {
        }
      }
    }
  , {
      id: 'race-ferre'
    , title: 'Ferre'
    , slideNum: {
        current: '1.4'
      , prev: '1.3'
      , next: '2'
      }
    , action: {
        init: function() {
        }
      , inAct: function() {
          changeBg('f')
          action('.female', '.male')
        }
      , outAct: function() {
        }
      }
    }
  ]

  // function isUnderIe8() {
  //   return ($.browser.msie && ($.browser.version <= 8)) 
  // }
  // function changeBgIe(race) {
  //   var raceFull

  //   if (race == 'n') {
  //     raceFull = 'nuian'
  //   } else if (race == 'e') {
  //     raceFull = 'elf'
  //   } else if (race == 'h') {
  //     raceFull = 'hariharan'
  //   } else if (race == 'f') {
  //     raceFull = 'ferre'
  //   }
  //   console.log($('#viewport .race-'+raceFull))
  //   global.slides.filter('.race.main').find('.race-bg-'+race).clone().appendTo($('#viewport .race-'+raceFull))
  //   util.resizeFlexibleBg()
  // }
  function changeBg(race) {
    var utilBg = $('.util')
      , raceBgImg = global.slides.filter('.race.main').find('.race-bg-'+race).clone()

    utilBg.append(raceBgImg)
    util.resizeFlexibleBg()

    raceBgImg
    .css({opacity: 0, zIndex: 1})
    .animate({
      opacity: 1
    }, 1000, 'easeInOutExpo', function () {
      utilBg.find('.race-bg-current')
      .remove()

      $(this)
      .removeClass('race-bg-new')
      .css({zIndex: 0})
      .addClass('race-bg-current')
      .appendTo($('#currentUtil'))
    })
  }

  function action(obj1, obj2) {
    var screenHeight = global.win.height()

    $('#helperSlide')
    .find(obj1)
      .css({top: screenHeight})
      .animate({
        top: 0
      }, 1600, 'easeInOutExpo')
    .end()
    .find(obj2)
      .css({top: screenHeight})
      .animate({
        top: 0
      }, 1800, 'easeInOutExpo')
    .end()
    .find('.content .txt')
      .css({
        marginLeft: '-80px'
      , opacity: 0
      })
      .delay(800)
      .animate({
          marginLeft: 0
        , opacity: 1
        }, 600, 'easeOutSine')
    .end()
  }

  return slides
})/*  |xGv00|8ecb0816f862fcfe60de3498ec788725 */