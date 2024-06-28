define('slides/index', [
  'utils/global'
, 'utils/util'
], function(global, util) {
  var slides = [
	  {
	    id: 'index'
	  , title: '메뉴'
	  , noUtil: true
	  , slideNum: {
	      current: '-1'
	    , prev: '-1'
	    , next: '0'
	    }
	  , action: {
	      init: function() {
		      // ie8이하는 메뉴 로테이트 대신 다른 액션
		      if (!Modernizr.csstransforms3d) {
		        var duration = 200

		        $('.index .section')
		        .hover(
		          function() {
		            $(this)
		            .find('.front')
		            .animate({
		              left: -250
		            }, duration, 'easeInQuad')
		            .end()
		            .find('.back')
		            .animate({
		              left: 0
		            }, duration, 'easeInQuad')
		            .end()
		          }, function() {
		            $(this)
		            .find('.front')
		            .animate({
		              left: 0
		            }, duration, 'easeInQuad')
		            .end()
		            .find('.back')
		            .animate({
		              left: 250
		            }, duration, 'easeInQuad')
		            .end()
		          }
		        )
		      }

		      if (global.win.height() < 769) {
		      	$('.index .content')
		      	.css({
		      		marginTop: '-300px'
		      	})
		      	.find('.section, .event')
		      	.css({
		      		marginBottom: '40px'
		      	})
		      	.end()
		      }
	      }
	    , inAct: function() {
	      }
	    , outAct: function() {
	      }
	    }
	  }
  ]

  return slides
})/*  |xGv00|777bf2918cfd3cbdd02c4160ae9d0c42 */