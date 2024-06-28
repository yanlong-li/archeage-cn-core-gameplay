define('slides/world', [
  'utils/global'
, 'utils/util'
], function(global, util) {
	var slides = [
	  {
	    id: 'world'
	  , link: 'world'
	  , title: '世界观'
	  , slideNum: {
	      current: '0'
	    , prev: '-1'
	    , next: '1.1'
	    }
	  , action: {
	      init: function() {
          util.resizeFlexibleBg()
	      }
	    , inAct: function() {
	        $('#world').find('.heros')
	        .css({
	        	opacity: 0
	        , marginTop: '100px'
	        })
	        .animate({
	        	opacity: 1
	        , marginTop: 0
	        }, 800, 'easeInQuad')
	      }
	    , outAct: function() {
	        $('#world').find('.heros')
	        .animate({
	        	opacity: 0
	        }, 400, 'easeInQuad')
	      }
	    }
	  }
	]

  return slides
})/*  |xGv00|b19ec6968f1b0e1a3798f15446756530 */