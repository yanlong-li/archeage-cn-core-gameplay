(function($){
	"use strict";
	ArcheAge.namespace("Preview.SNSButtons");
	ArcheAge.Preview.SNSButtons = Class.extend({
		init:function(){
			var me = this;
			me.facebookBtn = '.link-facebook';
			me.twitterBtn = '.link-twitter';
			me.me2dayBtn = '.link-me2day';
			me.wikiBtn = '.link-wiki';
			me._bindFacebookBtn();
			me._bindTwiterBtn();
			me._bindM2dayBtn();
			me._bindWikiBtn();
		},
		_bindFacebookBtn : function(){
			var me = this;
			$(document).on("click" , me.facebookBtn, function(e){
				e.preventDefault();
				var url = '//www.facebook.com/sharer/sharer.php?u=' + encodeURI(me.getShareUrl($(this))) + '&t=' + encodeURI(me.getTitle($(this)));
				window.open(url, 'share_on_facebook', 'width=640,height=300,scrollbars=0,resizable=1');
				return false;
			});
		},
		_bindTwiterBtn : function(){
			var me = this;
			$(document).on("click" , me.twitterBtn, function(e){
				e.preventDefault();
				var url = '//twitter.com/share?lang=ko&url=' + encodeURI(me.getShareUrl($(this))) + '&text=' + encodeURI(me.getTitle($(this)));
				window.open(url, 'share_on_twitter', 'width=640,height=260,scrollbars=1,resizable=1');
				return false;
			});

		},
		_bindM2dayBtn : function(){
			var me = this;
				$(document).on("click" , me.me2dayBtn , function(e){
				e.preventDefault();
				var url = 'http://me2day.net/posts/new?new_post[body]=' + encodeURI('"' + me.getTitle($(this))+ '"') + ":" + encodeURI(me.getShareUrl($(this)));
				window.open(url, 'share_on_me2day', 'width=1024,height=364,scrollbars=1,resizable=1');
				return false;
			});

		},
		_bindWikiBtn : function(){
			var me = this;
			$(document).on("click" , me.wikiBtn , function(e){
				e.preventDefault();
				var url = me.getWikiUrl($(this));
				if( url == undefined || url == ''){
					return false;
				}
				window.open(url, 'Archeage_Wiki');
				return false;
			});

		},
		getTitle : function($button){
			var me = this;
			var slideId = me.getSlideId($button);
			return slideDetailOption[slideId].title;
		},
		getWikiUrl: function($button){
			var me = this;
			var slideId = me.getSlideId($button);
			return slideDetailOption[slideId].wikiUrl;
		},
		getSlideId: function($button){
			return ($button.parent().data("id"));
		},
		getShareUrl : function($button){
			return location.host + '/en'
		}
	});
}(jQuery));
/*  |xGv00|f7881ade1325bd8d17ff273bbd42f3d5 */