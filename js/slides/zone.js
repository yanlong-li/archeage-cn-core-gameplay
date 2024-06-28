define('slides/zone', [
  'utils/global'
, 'utils/util'
], function(global, util) {
  var slides = [
    {
      id: 'zone'
    , link: 'zone'
    , title: '地图'
    , slideNum: {
        current: '3'
      , prev: '2'
      , next: '4.1'
      }
    , action: {
        init: function() {
          var screenWidth = global.win.width()
            , zone = $('#zone')
            , picList = zone.find('.zone-panel .pics .list')
            , mark = zone.find('.mark')

          $('#zone')
            .find('.mark img')
            .hide()
            .end()
          .on('click', '.zone-nav .selected', function() {
            $(this).parents('.zone-nav')
            .toggleClass('active')
          })
          .on('click', '.zone-panel .btns a', function() {
            var me = $(this)
              , picList = me.parent().parent().find('.pics .list')
              , targetNum = parseInt(picList.attr('data-zone'), 10) - 1

            if (me.hasClass('prev')) {
              targetNum -= 1
            } else if (me.hasClass('next')) {
              targetNum += 1
            }

            slidezoneImg(targetNum)
          })
          .on('click', '.zone-nav .list button', function() {
            var me = $(this)
              , targetNum = me.attr('data-zone')

            slidezoneImg(targetNum)
          })
          zone.find('.zone-nav .list button')
          .hover(
            function() {
              var me = $(this)
                , targetzone = me.attr('data-zone')
                , target = mark.find('[data-zone="'+targetzone+'"]')

                target.show()
            }, function() {
              mark.find('img').hide()
            }
          )
          global.win.on('resize.zoneImg', resizezoneImg)
          
          picList
            .find('li:first-child')
              .clone().appendTo(picList)
              .end()
            .end()
          
          resizezoneImg()

          function slidezoneImg(targetNum) {
            var screenWidth = global.win.width()
              , picList = zone.find('.pics .list')
              , pics = picList.find('li')
              , len = pics.length - 1
              , leftPos = 0

            leftPos =  - targetNum * screenWidth

            if (targetNum < 0) {
              leftPos = - screenWidth * (len - 1)
              picList.css('marginLeft', -screenWidth * len)
              targetNum = len - 1
            }
            picList
            .animate({
              marginLeft: leftPos
            }, 400, 'easeInQuart', function() {
              if (targetNum == len) {
                picList.css('marginLeft', 0)
                targetNum = 0
              }

              picList.attr('data-zone', parseInt(targetNum, 10) + 1)
              changezone(targetNum)
            })
          }
          function changezone(targetNum) {
            var zoneNav = zone.find('.zone-nav')
              , zoneList = zoneNav.find('.list button')
              , target = zoneList.filter('[data-zone="'+targetNum+'"]')
              , targetName = target.text()
              , nowzone = zoneNav.find('.selected .label')

            zoneList.removeClass('active')
            target.addClass('active')
            nowzone.html(targetName)
          }
          function resizezoneImg() {
            var screenWidth = global.win.width()
              , screenHeight = global.win.height()
              , picListWidth = screenWidth * picList.find('li').length
              , marginCarrot = picList.attr('data-zone') - 1
              , picListMarginLeft = -marginCarrot * screenWidth
              , picImg = picList.find('.zone-img')
              , picWidth = 1920
              , picHeight = 940
              , width
              , height
              , marginLeft
              , marginTop

            if (screenWidth > picWidth) {
              width = screenWidth
              height = screenWidth / picWidth * picHeight
            } else {
              width = screenHeight / picHeight * picWidth
              height = screenHeight
              if (width < screenWidth) {
                width = screenWidth
                height = width / picWidth * picHeight
              }
            }

            marginLeft = -(width / 2)
            marginTop = -(height / 2)

            picList
            .css({
              'width': picListWidth
            , 'marginLeft': picListMarginLeft
            })
              .find('li')
              .css({
                width: screenWidth
              })
            picImg.css({
              'position': 'absolute'
            , 'left': '50%'
            , 'top': '50%'
            , 'width': width
            , 'height': height
            , 'margin-left': marginLeft
            , 'margin-top': marginTop
            })
          }
        }
      , inAct: function() {
          var slide = $('#helperSlide')

          slide
            .find('.content')
              .css({
                opacity: 0
              })
              .delay(600)
              .animate({
                opacity: 1
              }, 600, 'easeOutSine')
            .end()
        }
      , outAct: function() {
          global.win.off('resize.zoneImg')
          $('#zone').off('click')
        }
      }
    }
  ]

  return slides
})/*  |xGv00|4367f9b12343ec3291bb7bcfda492281 */