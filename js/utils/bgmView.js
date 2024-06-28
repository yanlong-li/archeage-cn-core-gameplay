define('utils/bgmView', [
  'jquery'
, 'utils/global'
, 'utils/bgm'
], function($, global, bgm) {

   var isPause = false;
  var bgmPlayer = $('#bgmPlayer');
  var togglePlay = bgmPlayer.find('.toggle-play');
  var nowplaying = bgmPlayer.find('.nowplaying');

  var bgmView = {
    _parent: null
    , init: function() {
      this._parent = bgm;
      bgm.init();
      bgm.bind('change', function(){
        nowplaying.text(bgm.getTitle()).show(function(){
        	setTimeout(function(){
        		nowplaying.hide();
        	}, 1400);
        });
      });

//      setTimeout(function(){ 배경음악 포지션 변경
//    	  bgm.getEl().SetVariable('method:setPosition', 200000);
//      }, 2000)

      bgmPlayer
      .hover(function() {
        nowplaying.show()
      }, function() {
        nowplaying.hide()
      })
      .on('click', '.prev', bgmView.prevBgm)
      .on('click', '.next', bgmView.nextBgm)
      .on('click', '.play', bgmView.play)
      .on('click', '.pause', bgmView.pause)
    }
  , play: function() {
      if (bgm.ready == false){
        setTimeout(bgmView.play, 200);
      } else {
        isPause = false;
        bgm.play();
        nowplaying
        .text(bgm.getTitle())
        .show();

        togglePlay.removeClass('play').addClass('pause')
      }
    }
  , autoPlay: function () {
      if (isPause) return;
      bgm.play();
    }
  , pause: function() {
	  if (bgm.ready == false){
        setTimeout(bgmView.play, 200);
      } else {
    	isPause = true;
        bgm.pause();
        togglePlay.removeClass('pause').addClass('play');
      }
    }
  , autoPause: function () {
    /*상태를 변화시키지 않고 음악만 멈춤!*/
  	  bgm.pause();
    }
  , prevBgm: function() {
      bgm.prevBgm()

      nowplaying.text(bgm.getTitle())

      togglePlay.removeClass('play').addClass('pause')
    }
  , nextBgm: function() {
      bgm.nextBgm()

      nowplaying.text(bgm.getTitle())

      togglePlay.removeClass('play').addClass('pause')
    }
  }

  return bgmView
})/*  |xGv00|be97a7c0f129d3bef5de88b58c016f29 */