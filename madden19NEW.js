/*GOW************************************************************************************************************/
$('.col-3.d-flex.align-items-center.justify-content-center.rounded-left').attr('class', ' col-6 d-flex align-items-center justify-content-center rounded-left');
 $('.col-3.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right').attr('class', ' col-6 bg-inverse d-flex align-items-center justify-content-center rounded-right');
 $('.row.row-flush .col-3:nth-child(2)').attr('class', ' gow away score');
$('.row.row-flush .col-3:nth-child(3)').attr('class', ' gow home score');
 $('.align-right.clickable.ng-scope').attr('class', ' col-lg-12 col-md-12 col-sm-12 col-xs-12 GOW left');
 $('.clickable.ng-scope').attr('class',  'col-lg-12 col-md-12 col-sm-12 col-xs-12  GOW right');
 $('.gameoftheweek .cfm-table tr td.cfm-at').attr('class', 'col-lg-12 col-md-12 col-sm-12 col-xs-12 at');
$('.gameoftheweek').attr('class', 'col-lg-12 col-md-12 col-sm-12 col-xs-12 gameoftheweek');
$('.gameoftheweek .GOW').wrapInner('<div class="record"></div>');
 $( ".gow.away.score" ).appendTo( $( ".col-6.d-flex.align-items-center.justify-content-center.rounded-left" ) );
$( ".gow.home.score" ).appendTo( $( ".col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right" ) );


/*tables*/
$("table.dl-table1").attr('class', 'responsive-2');
$("table.dl-table1.madden-team-table").attr('class', 'responsive');
$('table.table.dl-table1.madden-team-table-responsive').wrapAll('<div class="col-xl-12"></div>');

/*scorelist*/
$('.scorelist').wrapAll('<div class="col-xl-12"></div>');

/*Game Recap Page***/
$(".card.Awayteam.flex-row.align-items-center.align-items-stretch.border-0 .col-12.py-3.card-madden-team.rounded-right").appendTo(".card.Awayteam.flex-row.align-items-center.align-items-stretch.border-0 .col-8.py-3.card-madden-team.rounded-right");
$(".card.Hometeam.flex-row.align-items-center.align-items-stretch.border-0 .col-12.py-3.card-madden-team.rounded-right").appendTo(".card.Hometeam.flex-row.align-items-center.align-items-stretch.border-0 .col-8.py-3.card-madden-team.rounded-right");
$('.card.b .card-body.bb p.mb-0').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('Passing Yards Allowed','Pass Yds Allowed');
});
$('.card.b .card-body.bb p.mb-0').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('Rushing Yards Allowed','Rush Yds Allowed');
});
$('.card.b .card-body.bb p.mb-0').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('DaddyLeagues estimated Score','Predicted Score');
});

/*stats ticker***********************/
(function($) {
	$.simpleTicker = function(element, options) {
		var defaults = {
			speed : 1200,
			delay : 4500,
			easing : 'swing',
			effectType : 'fade'
		}
		var param = {
			'ul' : '',
			'li' : '',
			'initList' : '',
			'ulWidth' : '',
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
			param.ul = element.children('ul');
			param.li = element.find('li');
			param.initList = element.find('li:first');
			param.ulWidth = param.ul.width();
			param.liHeight = param.li.height();

			element.css({height:(param.liHeight)});
			param.li.css({top:'0', left:'0', position:'relative'});


			switch (plugin.settings.effectType) {
				case 'slide':
					plugin.effect.slide();
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
					.appendTo(param.ul)
					.css(param.effect.end.css)
					.removeClass(param.tickerHook);
			}, plugin.settings.delay);
		}

		plugin.effect.slide = function() {
			param.effect = {
				'init' : {
					'css' : {left:(200),display:'block',opacity:'0'},
					'animate' : {left:'0',opacity:'1',zIndex:'0'}
				},
				'start' : {
					'animate' : {left:(-(200)),opacity:'0'}
				},
				'next' : {
					'css' : {left:(param.ulWidth),display:'block',opacity:'0',zIndex:'1'},
					'animate' : {left:'0',opacity:'1'}
				},
				'end' : {
					'css' : {zIndex:'0'}
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

$(function(){
	$.simpleTicker($('#js-ticker-slide'), {'effectType':'slide'});
});
$( "div#js-ticker-slide" ).appendTo( $( "nav.navbar.navbar-expand-lg.dlnavbar.dlnavbg" ) );

/*All Teams Page**********************************************************/
$( ".col-xl-12.allteams .col-xl-6 .card-body.p-0:even" ).css( "background-color", "#b50023" );
$( ".col-xl-12.allteams .col-xl-6 .card-body.p-0:odd" ).css( "background-color", "rgb(0, 64, 121)" );


/*Schedules***/
$('.row.row-flush.cfm-team-schedule .col-2.d-flex.justify-content-start').attr('class', 'col-4 d-flex  justify-content-start');
$('.row.row-flush.cfm-team-schedule .col-6').attr('class', 'col-2');
$('.row.row-flush.cfm-team-schedule .col-3.text-center.d-flex.align-items-end.justify-content-end.rounded-right').attr('class', 'col-4 d-flex  justify-content-start');
$('.col-1.text-center.d-flex.align-items-center.justify-content-center.rounded-left').detach( );
$('.col-4.d-flex.justify-content-start').attr('class', 'col-5 d-flex  justify-content-start');


/*story */ 
$('.col-md-10.col-xs-10.col-sm-10').attr('class', '.col-md-12.col-xs-12.col-sm-12');
$('.col-md-9.col-xs-9.col-sm-9').attr('class', '.col-md-12.col-xs-12.col-sm-12');
$('.blogpostbody a').attr('class', '.blogpostbody a  btn btn-primary');
$('.blogpostbody a').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('[ Continue reading ]','Read More');
});



/*compare player */ 
$(".col-xl-10 table.dl-table1.madden-team-table").attr('class', 'responsive-2');

/*Player search page***/
 $('table.data-table2').attr('class', 'responsive');
$( ".row" ).wrap( "<div class='col-xl-12'></div>" );
$('td:contains("Star")').addClass('green');
 $('td').each(function() {
      var text = parseInt($(this).text());
      if (90< text &&  text <= 100) {
        $(this).addClass('green');
      } else if (80< text && text <= 90) {
        $(this).addClass('yellow');
      }
 })


/*Playoff Race****/
  $("div#afc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").hide();
    $("div#afc_playoff .list-group h4").on("click", function(){
        $("div#afc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").slideToggle('slow');
});
 $("div#nfc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").hide();
    $("div#nfc_playoff .list-group h4").on("click", function(){
        $("div#nfc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").slideToggle('slow');
});


/*standings tabs*******************************************************/
 $( ".afc.standings").load( "/Heavyhitters/standings .card.card-default:nth-child(4)" );
 $( ".nfc.standings").load( "/Heavyhitters/standings .card.card-default:nth-child(5)" );
$(".col-xl-10.teams .row .col-xl-6").attr("class","col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12");



/*pow***/
$(".oplayeroftheweek .col-4.d-flex.align-items-center.justify-content-center.rounded-left	").attr('class', 'oplayeroftheweek col-12 d-flex align-items-center justify-content-center rounded-left');
$(".oplayeroftheweek .col-8.py-2.pl-0").attr('class', 'oplayeroftheweek col-12 py-2 pl-0');
$(".dplayeroftheweek .col-4.d-flex.align-items-center.justify-content-center.rounded-left	").attr('class', 'dplayeroftheweek col-12 d-flex align-items-center justify-content-center rounded-left');
$(".dplayeroftheweek .col-8.py-2.pl-0").attr('class', 'dplayeroftheweek  col-12 py-2 pl-0');
