$(function(){
	$.simpleTicker($('#js-ticker-fade'), {'effectType':' '});
});

(function($) {

	$.simpleTicker = function(element, options) {
		var defaults = {
			speed : 1000,
			delay : 8000,
			easing : 'swing',
			effectType : 'fade'
		}
		var param = {
			'ol' : '',
			'li' : '',
			'initList' : '',
			'olWidth' : '',
			'liHeight' : '',
			'tickerHook' : 'tickerHook',
			'effect' : {}
		}

		var plugin = this;
		plugin.settings = {}
		var $element = $(element),
			element = element;

		plugin.init = function() {
			plugin.settings = $.extend({}, defaults, options);
			param.ol = element.children('ol');
			param.li = element.find('li');
			param.initList = element.find('li:first');
			param.olWidth = param.ol.width();
			param.liHeight = param.li.height();

			element.css({height:(param.liHeight)});
			param.li.css({top:'0', left:'-45', position:'relative'});


			switch (plugin.settings.effectType) {
				case 'fade':
					plugin.effect.fade();
					break;
			}
			plugin.effect.exec();
		}

		plugin.effect = {};
		plugin.effect.exec = function() {
			param.initList.css(param.effect.init.css)
				.animate(param.effect.init.animate,plugin.settings.speed,plugin.settings.easing)
				.addClass(param.tickerHook);
			setInterval(function(){
				element.find('.' + param.tickerHook)
					.animate(param.effect.start.animate,plugin.settings.speed,plugin.settings.easing)
					.next()
					.css(param.effect.next.css)
					.animate(param.effect.next.animate,plugin.settings.speed,plugin.settings.easing)
					.addClass(param.tickerHook)
					.end()
					.appendTo(param.ol)
					.css(param.effect.end.css)
					.removeClass(param.tickerHook);
			}, plugin.settings.delay);
		}

		plugin.effect.fade = function() {
			param.effect = {
				'init' : {
					'css' : {display:'block',opacity:'0'},
					'animate' : {opacity:'1',zIndex:'98'}
				},
					'start' : {
					'animate' : {opacity:'0'}
				},
				'next' : {
					'css' : {display:'block',opacity:'0',zIndex:'99'},
					'animate' : {opacity:'1'}
				},
				'end' : {
					'css' : {display:'none',zIndex:'98'}
				}
			}
		}

		plugin.effect.roll = function() {
			param.effect = {
				'init' : {
					'css' : {top:'3em',display:'block',opacity:'0'},
					'animate' : {top:'0',opacity:'1',zIndex:'98'}
				},
				'start' : {
					'animate' : {top:'-3em',opacity:'0'}
				},
				'next' : {
					'css' : {top:'3em',display:'block',opacity:'0',zIndex:'99'},
					'animate' : {top:'0',opacity:'1'}
				},
				'end' : {
					'css' : {zIndex:'98'}
				}
			}
		}

		plugin.effect.slide = function() {
			param.effect = {
				'init' : {
					'css' : {left:(200),display:'block',opacity:'0'},
					'animate' : {left:'0',opacity:'1',zIndex:'98'}
				},
				'start' : {
					'animate' : {left:(-(200)),opacity:'0'}
				},
				'next' : {
					'css' : {left:(param.ulWidth),display:'block',opacity:'0',zIndex:'99'},
					'animate' : {left:'0',opacity:'1'}
				},
				'end' : {
					'css' : {zIndex:'98'}
				}
			}
		}

		plugin.init();
	}

	$.fn.simpleTicker = function(options) {
		return this.each(function() {
			if (undefined == $(this).data('simpleTicker')) {
				var plugin = new $.simpleTiecker(this, options);
				$(this).data('simpleTicker', plugin);
			}
		});
	}
})(jQuery);
	

</script>


<script>

jQuery(window).load(function() {
	
	var windowHeight, windowScrollPosTop, windowScrollPosBottom = 0;
	
	
	function calcScrollValues() {
		windowHeight = jQuery(window).height();
		windowScrollPosTop = jQuery(window).scrollTop();
		windowScrollPosBottom = windowHeight + windowScrollPosTop;
	} 
	
	jQuery.fn.revealOnScroll = function(direction, speed) {
		return this.each(function() {
			
			var objectOffset = jQuery(this).offset();
			var objectOffsetTop = objectOffset.top;
			
			if (!jQuery(this).hasClass("hidden")) {
				
				
				if (direction == "top") {
					jQuery(this).css({
						"opacity"	: 0,
						"top"		: "325px",
						"position"	: "relative"
					});
				} else {
					jQuery(this).css({
						"opacity"	: 0,
						"top"		: "-325px",
						"position"	: "relative"
					});
					
				}
				
				jQuery(this).addClass("hidden");	
			} 
			if (!jQuery(this).hasClass("animation-complete")) {
				
				
				if (windowScrollPosBottom > objectOffsetTop) {
					jQuery(this).animate({"opacity" : 1, "top" : 0}, speed).addClass("animation-complete");
				}

			} 
			
		});
	}
	
	function revealCommands() {
		jQuery(".col-lg-12.col-md-12.col-sm-12.col-xs-12.storylines").revealOnScroll("top", 600);
		jQuery(".GOW.col-lg-12.col-md-12.col-sm-12.col-xs-12").revealOnScroll("top", 600);
jQuery(".Standings.col-lg-12.col-md-12.col-sm-12.col-xs-12").revealOnScroll("top", 600);
	}

	calcScrollValues();
	revealCommands();
	
	
	jQuery(window).scroll(function() {
		calcScrollValues()
		revealCommands();
	});
});
