define('slides/trailer', [
  'utils/global'
, 'utils/util'
], function(global, util) {
  var slides = [
	  {
	    id: 'trailer'
	  , title: '트레일러'
	  , noUtil: true
	  , slideNum: {
	      current: '-2'
	    , prev: '-2'
	    , next: '-1'
	    }
	  , action: {
	      init: function() {
	      }
	    , inAct: function() {
	        $('#nav').css({
	        	right: '-100%'
	        })
	      	$('#topbar')
	      	.css({
	      		top: '-300px'
	      	})
	      	// $('#evtStar').hide()
	      }
	    , outAct: function() {
	        $('#nav').css({
	        	right: '0'
	        })
	      	$('#topbar')
	      	.animate({
	      		top: '42px'
	      	}, 'easeInOutExpo',function () {
		      	// $('#evtStar').show()
	      	})
	      }
	    }
	  }
  ]

  return slides
})/*  |xGv00|a7622293745ae029f90354f9698252da */