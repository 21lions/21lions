
/***Splash page***/
$('.Splash.col-lg-12.col-md-12.col-sm-12.col-xs-12').fadeIn('slow').delay(2000).fadeOut('slow');

/*DL personal menu ****/
$( ".dropdown-menu.dropdown-menu-right.animated.flipInX.show" ).wrap( "<div class='col-xl-12'></div>" );



/***Jumbotron****/
$('.jumbotron').fadeIn('slow').delay(20000).fadeOut('slow');


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

/*storylines***/
$('.col-md-9.col-xs-9.col-sm-9').attr('class', 'col-md-12  col-xs-12 col-sm-12');
$('.col-md-10.col-xs-10.col-sm-10').attr('class', 'col-md-12  col-xs-12 col-sm-12');
$('div#hp-stories').attr('class', 'slideshow');
$('.blogpost.clearfix').attr('class', 'slideitem current');
$('.blogpostbody').attr('class', 'info');
$('img.blogpostimage').attr('class', 'img');
$('  div#hp-stories h4').attr('class', '.carousel-caption h3');
$("#slideshow > div:gt(0)").hide();


/*Playoff Race****/
  $("div#afc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").hide();
    $("div#afc_playoff .list-group h4").on("click", function(){
        $("div#afc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").slideToggle('slow');
});
 $("div#nfc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").hide();
    $("div#nfc_playoff .list-group h4").on("click", function(){
        $("div#nfc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").slideToggle('slow');
});


/*Game Recap Page***/
$( ".card.b" ).wrap( "<div class='col-xl-12'></div>" );
$(".card.Awayteam.flex-row.align-items-center.align-items-stretch.border-0 .col-12.py-3.card-madden-team.rounded-right").appendTo(".card.Awayteam.flex-row.align-items-center.align-items-stretch.border-0 .col-8.py-3.card-madden-team.rounded-right");
$(".card.Hometeam.flex-row.align-items-center.align-items-stretch.border-0 .col-12.py-3.card-madden-team.rounded-right").appendTo(".card.Hometeam.flex-row.align-items-center.align-items-stretch.border-0 .col-8.py-3.card-madden-team.rounded-right");
$('.card.b .card-body.bb p.mb-0').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('DaddyLeagues estimated Score','Predicted Score');
});


/*Schedules***/
$('.row.row-flush.cfm-team-schedule .col-1.text-center.d-flex.align-items-center.justify-content-center.rounded-left').attr('class', 'col-1 text-center d-flex align-items-center justify-content-center rounded-left');
$('.row.row-flush.cfm-team-schedule .col-2.d-flex.justify-content-start').attr('class', 'col-4 d-flex  justify-content-start');
$('.row.row-flush.cfm-team-schedule .col-6').attr('class', 'col-2');
$('.row.row-flush.cfm-team-schedule .col-3.text-center.d-flex.align-items-end.justify-content-end.rounded-right').attr('class', 'col-4 d-flex  justify-content-start');
$('.col-1.text-center.d-flex.align-items-center.justify-content-center.rounded-left').detach( );
$('.col-4.d-flex.justify-content-start').attr('class', 'col-5 d-flex  justify-content-start');


/*Player Page***/
$( "ul.nav.nav-tabs" ).wrap( "<div class='col-xl-12'></div>" );
$(".col-md-6.col-xs-6.col-sm-6 .card .d-flex.Teamcolors").appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$(".xl-12").appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$(".col-xl-12 ul.nav.nav-tabs").appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$('table.dl-table1.madden-team-table').appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$(".col-xl-12.col-lg-6.col-md-12.pt-2").appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$(".col-xl-10.col-lg-6.col-md-12.pt-2").appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$('.col-1.d-flex.align-items-left.justify-content-center.cfm-player-team-logo').attr('class', 'col-12 d-flex align-items-left justify-content-center cfm-player-team-logo');
$('.col-10.py-3.rounded-right.cfm-player-info').attr('class', 'col-12 py-3 rounded-right cfm-player-info');
$("div#tmpg .table-responsive").appendTo("#tmpg");
$(".col-12.py-3.rounded-right.cfm-player-info").appendTo(".col-12.d-flex.align-items-left.justify-content-center.cfm-player-team-logo");
$(".col-1.d-flex.align-items-left.justify-content-center.cfm-player-logo").appendTo(".col-12.d-flex.align-items-left.justify-content-center.cfm-player-team-logo");
$('.col-1.d-flex.align-items-left.justify-content-center.cfm-player-logo').attr('class', 'col-4 d-flex align-items-left justify-content-center cfm-player-logo  ');
$( ".card-footer.text-center.cfm-player-attribute" ).wrap( "<div class='att-snapshot'>Attribute Snapshot <em class='fa fa-chevron-circle-down'></em></div>" );
$(".card-footer.text-center.cfm-player-attribute").hide();
    $(".att-snapshot").on("click", function(){
        $(".card-footer.text-center.cfm-player-attribute").fadeToggle('slow');
});

/*Team Page****/
$( '.col-10.py-3.rounded-right.cfm-team-info').attr('class', 'col-12 py-3 rounded-right cfm-team-info');
$(' .col-2.d-flex.align-items-left.justify-content-center.cfm-team-logo').attr('class', 'col-12 d-flex align-items-left justify-content-center cfm-team-logo  ');
$(' .col-xl-10.col-lg-6.col-md-12.pt-2').attr('class', 'col-xl-12 col-lg-12 col-md-12 pt-2 ');
 $('.col-xl-12.col-lg-6.col-md-12 .card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors').attr('id', 'tmpg');
$(" ul.nav.nav-tabs").appendTo(".col-12.py-3.rounded-right.cfm-team-info  ");
$(" .col-md-6.col-xs-6.col-sm-6 .card").appendTo(".col-12.py-3.rounded-right.cfm-team-info");
$(".card.card-madden-team").appendTo(".col-12.py-3.rounded-right.cfm-team-info");
 $('table.dl-table1.madden-team-table').appendTo(".col-12.py-3.rounded-right.cfm-team-info");
$(" .col-xl-12.col-lg-6.col-md-12.pt-2").appendTo("div#tmpg .col-12.py-3.rounded-right.cfm-team-info");

/*front-office***/
$("div#frontoffice_wrapper").attr('class', 'col-12 frontoffice_wrapper');

/*pow***/
$(".oplayeroftheweek .col-4.d-flex.align-items-center.justify-content-center.rounded-left	").attr('class', 'oplayeroftheweek col-12 d-flex align-items-center justify-content-center rounded-left');
$(".oplayeroftheweek .col-8.py-2.pl-0").attr('class', 'oplayeroftheweek col-12 py-2 pl-0');
$(".dplayeroftheweek .col-4.d-flex.align-items-center.justify-content-center.rounded-left	").attr('class', 'dplayeroftheweek col-12 d-flex align-items-center justify-content-center rounded-left');
$(".dplayeroftheweek .col-8.py-2.pl-0").attr('class', 'dplayeroftheweek  col-12 py-2 pl-0');
$("img.rounded-circle.thumb24").unwrap();

/*Player search page***/
 $('table.data-table2').attr('class', 'responsive');
$( ".row" ).wrap( "<div class='col-xl-10'></div>" );
$('ul.players-add-filter.dropdown-menu.show').attr('class', 'dropdown-menu');
$("legend").appendTo(".col-xl-10 .row .col-12 .card.card-default .card-body");
$( "legend" ).wrap( "<div class='legendtwo'>Player Search <em class='fa fa-chevron-circle-down'></em></div>" );
$("form.form-horizontal").hide();
    $(".legendtwo").on("click", function(){
        $("form.form-horizontal").fadeToggle('slow');
});


(function($) {         

  'use strict';

  $(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function(e) {
    var $target = $(e.target);
    var $tabs = $target.closest('.nav-tabs-responsive');
    var $current = $target.closest('li');
    var $parent = $current.closest('li.dropdown');
		$current = $parent.length > 0 ? $parent : $current;
    var $next = $current.next();
    var $prev = $current.prev();
    var updateDropdownMenu = function($el, position){
      $el
      	.find('.dropdown-menu')
        .removeClass('pull-xs-left pull-xs-center pull-xs-right')
      	.addClass( 'pull-xs-' + position );
    };

    $tabs.find('>li').removeClass('next prev');
    $prev.addClass('prev');
    $next.addClass('next');
    
    updateDropdownMenu( $prev, 'left' );
    updateDropdownMenu( $current, 'center' );
    updateDropdownMenu( $next, 'right' );
  });

})(jQuery);


$("#slideshow > div:gt(0)").hide();

var buttons = "<button class=\"slidebtn prev\"><i class=\"fa fa-chevron-circle-left\"></i></button><button class=\"slidebtn next\"><i class=\"fa fa-chevron-circle-right\"></i></button\>";

var slidesl = $('.slideitem').length
var d = "<li class=\"dot active-dot\">•</li>";
for (var i = 1; i < slidesl; i++) {
  d = d+"<li class=\"dot\">•</li>";
}	
var dots = "<ul class=\"slider-dots\">" + d + "</ul\>";

$("#slideshow").append(dots).append(buttons);
var interval = setInterval(slide, 8000);

function intslide(func) {
	if (func == 'start') { 
 	interval = setInterval(slide, 8000);
	} else {
		clearInterval(interval);		
		}
}

function slide() {
		sact('next', 0, 1200);
}
	
function sact(a, ix, it) {
        var currentSlide = $('.current');
        var nextSlide = currentSlide.next('.slideitem');
        var prevSlide = currentSlide.prev('.slideitem');
		    var reqSlide = $('.slideitem').eq(ix);

		    var currentDot = $('.active-dot');
    	  var nextDot = currentDot.next();
    	  var prevDot = currentDot.prev();
		    var reqDot = $('.dot').eq(ix);
		
        if (nextSlide.length == 0) {
      		nextDot = $('.dot').first();
            nextSlide = $('.slideitem').first();
            }

        if (prevSlide.length == 0) {
      		prevDot = $('.dot').last();
            prevSlide = $('.slideitem').last();
            }
			
		if (a == 'next') {
			var Slide = nextSlide;
			var Dot = nextDot;
			}
			else if (a == 'prev') {
				var Slide = prevSlide;
				var Dot = prevDot;
				}
				else {
					var Slide = reqSlide;
					var Dot = reqDot;
					}

        currentSlide.fadeOut(it).removeClass('current');
        Slide.fadeIn(it).addClass('current');
		
    	currentDot.removeClass('active-dot');
    	Dot.addClass('active-dot');
}	

$('.next').on('click', function(){
		intslide('stop');						
		sact('next', 0, 200);
		intslide('start');						
	});//next

$('.prev').on('click', function(){
		intslide('stop');						
		sact('prev', 0, -200);
		intslide('start');						
	});//prev

$('.dot').on('click', function(){
		intslide('stop');
		var index  = $(this).index();
		sact('dot', index, 400);
		intslide('start');						
	});





/***StarFlash***/
$(function () {
	    setInterval(function () {
		    $('.star-1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
	        $('.star-2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
	        $('.star-3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
	        $('.star-4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
		$('.star-5').fadeOut(900).fadeIn(500).fadeOut(360).delay(1550);
	    }, 1);
    });

/***scorelist***/
$('a>span:contains("ARI")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/ARI.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Arizona</small><br>Cardinals</div>');
$('a>span:contains("ATL")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/ATL.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Atlanta</small><br>Falcons</div>');
$('a>span:contains("BAL")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/BAL.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Baltimore</small><br>Ravens</div>');
$('a>span:contains("BUF")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/BUF.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Buffalo</small><br>Bills</div>');
$('a>span:contains("CAR")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/CAR.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Carolina</small><br>Panthers</div>');
$('a>span:contains("CHI")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/CHI.svg" width="35" height="25"" class="scoreboard"> <div class="teamname"><small>Chicago</small><br>Bears</div>');
$('a>span:contains("CIN")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/CIN.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Cincinnatti</small><br>Bengals</div>');
$('a >span:contains("CLE")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/CLE.svg" width="35" height="25""" class="scoreboard"><div class="teamname"><small>Cleveland</small><br>Browns</div>');
$('a>span:contains("DAL")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/DAL.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Dallas</small><br>Cowboys</div>');
$('a>span:contains("DEN")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/DEN.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Denver</small><br>Broncos</div>');
$('a>span:contains("DET")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/DET.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Detroit</small><br>Lions</div>');
$('a>span:contains("GB")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/GB.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Green Bay</small><br>Packers</div>');
$('a>span:contains("HOU")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/HOU.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Houston</small><br>Texans</div>');
$('a>span:contains("IND")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/IND.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Indianapolis</small><br>Colts</div>');
$('a>span:contains("JAX")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/JAC.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Jacksonville</small><br>Jaguars</div>');
$('a>span:contains("KC")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/KC.svg" width="35" height="25"" class="scoreboard"> <div class="teamname"><small>Kansas City</small><br>Chiefs</div>');
$('a>span:contains("MIA")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/MIA.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Miami</small><br>Dolphins</div>');
$('a>span:contains("MIN")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/MIN.svg" width="35" height="25"" class="scoreboard"> <div class="teamname"><small>Minnesota</small><br>Vikings</div>');
$('a>span:contains("NE")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/NE.svg"width="35" height="25"" class="scoreboard"><div class="teamname"><small>New England</small><br>Patriots</div>');
$('a>span:contains("NO")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/NO.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>New Orleans</small><br>Saints</div>');
$('a>span:contains("NYG")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/NYG.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>New York</small><br>Giants</div>');
$('a>span:contains("NYJ")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/NYJ.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>New York</small><br>Jets</div>');
$('a>span:contains("OAK")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/OAK.svg" width="35" height="25"" class="scoreboard"> <div class="teamname"><small>Oakland</small><br>Raiders</div>');
$('a>span:contains("PHI")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/PHI.svg" width="35" height="25"" class="scoreboard"> <div class="teamname"><small>Philadelphia</small><br>Eagles</div>');
$('a>span:contains("PIT")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/PIT.svg" width="35" height="25"" class="scoreboard"> <div class="teamname"><small>Pittsburgh</small><br>Steelers</div>');
$('a>span:contains("SF")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/SF.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>San Francisco</small><br>49ers </div>');
$('a>span:contains("SEA")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/SEA.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Seattle</small><br>Seahawks</div>');
$('a>span:contains("LAR")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/LA.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Los Angeles</small><br>Rams</div>');
$('a>span:contains("LAC")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/LAC.svg" width="35" height="25"" class="scoreboard"> <div class="teamname"><small>Los Angeles</small><br>Chargers </div>');
$('a>span:contains("TB")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/TB.svg" width="35" height="25"" class="scoreboard"> <div class="teamname"><small>Tampa Bay</small><br>Buccaneers</div>');
$('a>span:contains("TEN")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/TEN.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Tennesee</small><br>Titans</div>');
$('a>span:contains("WAS")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/WAS.svg" width="35" height="25"" class="scoreboard"><div class="teamname"><small>Washington</small><br>Redskins </div>');


$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})
