define('utils/bgm', [
  ], function() {
  var bgm, doc, me, audio_el, canUseAudio, canPlayMp3, supportPreFix;

  var MINUTE = 60;
  var TEN_SECOND = 10;
  var HUNDRED = 100;
  var THOUSAND = 1000;
  var STR_ZERO = '0';
  var BGM_URL = '/bgm';
  var bgmLists = [
      {title: 'Exiles of the Dream', time: '4:28', url: BGM_URL+'/01.mp3', aa: 0}
    , {title: 'A Land of Whispering Sprites', time: '3:42', url: BGM_URL+'/02.mp3'}
    , {title: 'Fertile Plains', time: '4:42', url: BGM_URL+'/03.mp3'}
    , {title: 'Rushing Meadow', time: '4:21', url: BGM_URL+'/04.mp3'}
    , {title: 'Royal Procession', time: '5:14', url: BGM_URL+'/05.mp3'}
    , {title: 'Of Forgotten Names', time: '4:28', url: BGM_URL+'/06.mp3'}
  ];
  var numOfBgm = bgmLists.length;

  doc = document;
  audio_el = doc.createElement('audio');

  canUseAudio = audio_el.play ? true : false;
  if ($.browser.msie && (parseInt($.browser.version, 10) < 10)) canUseAudio = false;
  if (canUseAudio) canPlayMp3 = audio_el.canPlayType('audio/mpeg') ? false : true;

  var player_obj = {};
  player_obj['flashPlayer'] = { onInit: function() { me.position = 0; me.ready = true; } };
  player_obj['audioPlayer'] = (function() {
    var currentEl, interval_obj;

    function interval_update() {
      me.position = parseInt(currentEl.currentTime * THOUSAND, 10);
      me.duration = parseInt(currentEl.duration * THOUSAND, 10);
      me.onUpdate();
    }
    function setUrl (url) {
      clearInterval(interval_obj);
      var url2 = canPlayMp3 ? url.replace('.mp3', '.ogg') : url;
      me.url = me.getEl().src = url2;
    }
    function play () {
      currentEl = me.getEl();
      interval_obj = setInterval(interval_update, 500);
      currentEl.play();
      me.isPlaying = 'true';
    }
    function pause () {
      me.getEl().pause();
      clearInterval(interval_obj);
      me.isPlaying = 'false';
    }
    function setPosition (milliSecond) {
	    me.getEl().currentTime = parseInt(milliSecond / THOUSAND, 10);
	    me.position = milliSecond;
	    me.onUpdate();
	  }

    return {
      setAudio: function() {
        var el = me.getEl();

        el.addEventListener('loadstart', function() {
          me.ready = true;
          me.duration = me.getEl().duration * THOUSAND;
        }, false);

        el.SetVariable = function(method, opt) {
          switch (method) {
            case 'method:setUrl': setUrl(opt); break;
            case 'method:play': play(opt); break;
            case 'method:pause': pause(opt); break;
            case 'method:setPosition': setPosition(opt); break;
          }
        } //end SetVariable
      }
    }; //end return object
  })();

  var events = {
    'change': []
    , publish: function() {
      var i;
      for (var type in this) {
        i = this[type].length;
        while (i--) {
          this[type][i]();
        }
      }
    }
  };

  bgm = {
    url: null
    , isFirst: true
    , position: 0
    , duration: false
    , isPlaying: null
    , volume: 100
    , ready: false
    , title: ''
    , selectedBgm: 1
    , onUpdate: function() {
      if (me.bytesPercent && me.bytesPercent != 100) return;
      if (me.duration - 500 < me.position) {
        me.nextBgm();
        events.publish();
      }
    }
    , trigger: function() {
      events.publish();
    }
    , bind: function(type, callback) {
      events[type].push(callback);
    }
    , getEl: function() {
      return doc.getElementById(supportPreFix + 'Player');
    }
    , setSelectedBgm: function(isNext) {
      var currentBmg, len, value;
      currentBmg = me.selectedBgm;
      last = numOfBgm - 1;

      if (isNext) {
        if (currentBmg == last) {
          value = 0;
        } else {
          value = ++currentBmg;
        }
      } else {
        if (currentBmg == 0) {
          value = last;
        } else {
          value = --currentBmg;
        }
      }
      me.selectedBgm = value;

      me.getEl().SetVariable('method:setUrl', bgmLists[me.selectedBgm].url);
    }
    , prevBgm: function() {
      me.setSelectedBgm(false);
      me.play();
    }
    , nextBgm: function() {
      me.setSelectedBgm(true);
      me.play();
    }
    , play: function() {
      if (!me.ready) return;
      if (me.position == 0) me.setSelectedBgm(false);

      me.getEl().SetVariable('method:play', '');
      me.getEl().SetVariable('enabled', 'true');
    }
    , pause: function() {
      me.getEl().SetVariable('method:pause', '');
    }
    , getTitle: function() {
      return bgmLists[me.selectedBgm].title;
    }
    , initPlayer: function() {

    }
    , init: function(){
      var player_tmpl;
      me = this;

      supportPreFix = canUseAudio ? 'audio' : 'flash';

      $.extend(me, player_obj[supportPreFix + 'Player']);
      player_tmpl = $('#' + supportPreFix + '_tmpl').html();
      $('#musicPlayer').html(Handlebars.compile(player_tmpl));

      if (canUseAudio) me.setAudio();
    }
  }; //end bgm

  return bgm;
})
/*  |xGv00|4669087becb458304b7be654889743e5 */