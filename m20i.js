/**width correction***/
window.onresize = function() {
    document.body.width= window.innerWidth;
}
window.onresize(); // called to initially set the width.



 // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/***Splash page***/
$('.Splash.col-lg-12.col-md-12.col-sm-12.col-xs-12').fadeIn('slow').delay(1000).fadeOut('slow');



/*fade*********************************************************/
 $('div#disappear').attr('class',  'fade');

  /* Every time the window is scrolled ... */
  $(window).scroll(function() {

    /* Check the location of each desired element */
    $('.fade').each(function(i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1',
          'top': '10px'
        }, 900);
$(this).removeClass("fade");
      }

    });

  });

	
	/*TEAM stats Page*********************************************************/ 
	$(" div#schedules").addClass("schedules col-xl-12"); 
	$("table.dl-table1 ").addClass("dl-table1 responsive"); 
	
	/*background changes*********************************************************/ 
	$('table.data-table2').attr('class', 'data-table2 responsive table-striped table-dark'); 
	$('table.table.table-striped.madden-stangings').attr('class', 'table table-striped madden-stangings responsive table-striped table-dark'); 
	$('table.table.table-striped').attr('class', 'table table-striped madden-stangings responsive table-striped table-dark'); 
	$('.col-md-9.col-xs-9.col-sm-9').attr('class', 'col-md-12 col-xs-12 col-sm-12'); 
	


/*renamed classes*/
$( '.col-xl-10').attr('class', 'col-xl-12'); 
	$( '.col-2.d-flex.align-items-left.justify-content-center.cfm-team-logo').attr('class', 'col-12 d-flex align-items-left justify-content-center cfm-team-logo '); 
	$( '.col-10.py-3.rounded-right.cfm-team-info').attr('class', 'col-12 py-3 rounded-right cfm-team-info'); 
	$("ul.nav.nav-tabs").prependTo(".col-12.py-3.rounded-right.cfm-player-info");$( '.col-md-10.col-xs-10.col-sm-10').attr('class', 'col-md-12 col-xs-12 col-sm-12'); 
	$( '.col-xl-12.col-lg-6.col-md-12').attr('class', 'col-xl-12 col-lg-12 col-md-12 '); 
        $('div#dlmaddenmenu ul.navbar-nav li:nth-child(11)').attr('class', 'nav-item ');
        $('.card-header.bg-primary').attr('class', ' card-header bg-light');
        $('.card-header.bg-info').attr('class', ' card-header bg-light');
        $('form .row .col-md-6.col-xs-6.col-sm-6').attr('class', ' col-xl-6  ');

	/*teampage*/ 
	$(".col-md-6.col-xs-6.col-sm-6 .card .d-flex.Teamcolors").appendTo(".col-12.d-flex.align-items-left.justify-content-center.cfm-team-logo"); 
	$("ul.nav.nav-tabs").prependTo(".col-12.py-3.rounded-right.cfm-team-info"); 
	$(".d-flex.Teamcolors").appendTo(".col-12.py-3.rounded-right.cfm-team-info"); 
	$(".card.card-madden-team").appendTo(".col-12.py-3.rounded-right.cfm-team-info"); 
	$(" .col-md-6.col-xs-6.col-sm-6 .card").appendTo(".col-12.py-3.rounded-right.cfm-team-info"); 
	$('table.dl-table1.madden-team-table').appendTo(".col-12.py-3.rounded-right.cfm-team-info"); 
$('li.nav-item a').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('Career Stats','Stats');
});
$('li.nav-item a').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('Attributes History','Atr History');
});
$('p.mb-0.text-muted').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('Signing Bonus','Bonus');
});
$('li.nav-item a').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('Madden Feedback','M20 Feedback');
});

	
		/*Schedules***/ 
	$('.row.row-flush.cfm-team-schedule .col-1.text-center.d-flex.align-items-center.justify-content-center.rounded-left').attr('class', 'col-1 text-center d-flex align-items-center justify-content-center rounded-left'); 
	$('.row.row-flush.cfm-team-schedule .col-2.d-flex.justify-content-start').attr('class', 'col-4 d-flex justify-content-start'); 
	$('.row.row-flush.cfm-team-schedule .col-6').attr('class', 'col-2'); 
	$('.row.row-flush.cfm-team-schedule .col-3.text-center.d-flex.align-items-end.justify-content-end.rounded-right').attr('class', 'col-4 d-flex justify-content-start'); 
	$('.col-1.text-center.d-flex.align-items-center.justify-content-center.rounded-left').detach( ); 
	$('.col-4.d-flex.justify-content-start').attr('class', 'col-5 d-flex justify-content-start'); 

	/*Player Page***/ 
	$('.col-1.d-flex.align-items-left.justify-content-center.cfm-player-team-logo').attr('class', 'col-12 d-flex align-items-left justify-content-center cfm-player-team-logo'); 
	$(".col-1.d-flex.align-items-left.justify-content-center.cfm-player-logo").appendTo(".col-12.d-flex.align-items-left.justify-content-center.cfm-player-team-logo"); 
	$('.col-1.d-flex.align-items-left.justify-content-center.cfm-player-logo').attr('class', 'col-4 d-flex align-items-left justify-content-center cfm-player-logo '); 
	$("ul.nav.nav-tabs").appendTo(".col-10.py-3.rounded-right.cfm-player-info"); 
	$(".col-12.py-3.rounded-right.cfm-player-info").appendTo(".col-12.py-3.rounded-right.cfm-player-info"); 
	$(".col-xl-12.col-lg-6.col-md-12.pt-2").appendTo(".col-12.py-3.rounded-right.cfm-player-info"); 
	$(".col-xl-10.col-lg-6.col-md-12.pt-2").appendTo(".col-12.py-3.rounded-right.cfm-player-info"); 
	$('.row .col-xl-12 .card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors').attr('id', 'playerpage');
$('.row:nth-child(5) .col-xl-12').attr('class', 'col-xl-12 col-lg-12 col-md-12 pt-2 ');
$(" .col-xl-12.col-lg-12.col-md-12.pt-2").appendTo("div#playerpage .col-12.py-3.rounded-right.cfm-team-info");
$( ".card-footer.text-center.cfm-player-attribute" ).wrap( "<div class='att-snapshot'>Attribute Snapshot <em class='fa fa-chevron-circle-down'></em></div>" ); 
	$(".card-footer.text-center.cfm-player-attribute").hide(); 
	$(".att-snapshot").on("click", function(){ 
	$(".card-footer.text-center.cfm-player-attribute").fadeToggle('slow'); 
	}); 

	/***scoreboard**********************/
 $('span.cfm-score-vts.cfm-score-visitor.cfm-score-score').attr('class', 'col-2 cfm-score-vts cfm-score-visitor cfm-score-score');	
 $('span.cfm-score-vta.cfm-score-visitor.cfm-score-abbr').attr('class', 'col-12 cfm-score-vta cfm-score-visitor cfm-score-abbr');	
$('span.cfm-score-hts.cfm-score-home.cfm-score-score').attr('class', 'col-2 cfm-score-hts cfm-score-home cfm-score-score');	
$('span.cfm-score-hta.cfm-score-home.cfm-score-abbr').attr('class', 'col-12 cfm-score-hta cfm-score-home cfm-score-abbr');	
 $('div#flip2').attr('class', 'scorelist');
$('.scorelist').attr('id', 'js-ticker-fade');
    $("div#js-ticker-fade").hide();
    $("#flip").on("click", function(){
        $("div#js-ticker-fade").fadeToggle('slow');
    });


/*GOW*/
$('.col-3.d-flex.align-items-center.justify-content-center.rounded-left').attr('class', ' col-4 d-flex align-items-center justify-content-center rounded-left');
$('.col-3.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right').attr('class', ' col-4 bg-inverse d-flex align-items-center justify-content-center rounded-right');
 $('.row.row-flush .col-3:nth-child(2)').attr('class', ' col-2 gow away score');
$('.row.row-flush .col-3:nth-child(3)').attr('class', '  col-2 gow home score');
 $('.align-right.clickable.ng-scope').attr('class', ' col-lg-12 col-md-12 col-sm-12 col-xs-12 GOW left');
 $('.clickable.ng-scope').attr('class',  'col-lg-12 col-md-12 col-sm-12 col-xs-12  GOW right');
 $('.gameoftheweek .cfm-table tr td.cfm-at').attr('class', 'col-lg-12 col-md-12 col-sm-12 col-xs-12 at');
$('.gameoftheweek').attr('class', 'col-lg-12 col-md-12 col-sm-12 col-xs-12 gameoftheweek');
$('.gameoftheweek .GOW').wrapInner('<div class="record"></div>');
 $( ".gow.away.score" ).appendTo( $( ".col-6.d-flex.align-items-center.justify-content-center.rounded-left" ) );
$( ".gow.home.score" ).appendTo( $( ".col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right" ) );

/*stars*/
$(function () {
	    setInterval(function () {
		    $('.star-1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
	        $('.star-2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
	        $('.star-3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
	        $('.star-4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
	    }, 1);
    });


//HOME-CHI
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/0.png"]').css( 'background-image', 'url("/img/nfl/teams/left/0.png")');
//HOME-CIN
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/1.png"]').css( 'background-image', 'url("/img/nfl/teams/left/1.png")');
//HOME-BUF
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/2.png"]').css( 'background-image', 'url("/img/nfl/teams/left/2.png")');
//HOME-DEN
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/3.png"]').css( 'background-image', 'url("/img/nfl/teams/left/3.png")');
//HOME-CLE
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/4.png"]').css( 'background-image', 'url("/img/nfl/teams/left/4.png")');
//HOME-TB
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/5.png"]').css( 'background-image', 'url("/img/nfl/teams/left/5.png")');
//HOME-ARI
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/6.png"]').css( 'background-image', 'url("/img/nfl/teams/left/6.png")');
//HOME-LAC
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/7.png"]').css( 'background-image', 'url("/img/nfl/teams/left/7.png")');
//HOME-KC
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/8.png"]').css( 'background-image', 'url("/img/nfl/teams/left/8.png")');
//HOME-IND
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/9.png"]').css( 'background-image', 'url("/img/nfl/teams/left/9.png")');
//HOME-DAL
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/10.png"]').css( 'background-image', 'url("/img/nfl/teams/left/10.png")');
//HOME-MIA
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/11.png"]').css( 'background-image', 'url("/img/nfl/teams/left/11.png")');
//HOME-PHI
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/12.png"]').css( 'background-image', 'url("/img/nfl/teams/left/12.png")');
//HOME-ATL
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/13.png"]').css( 'background-image', 'url("/img/nfl/teams/left/13.png")');
//HOME-SF
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/14.png"]').css( 'background-image', 'url("/img/nfl/teams/left/14.png")');
//HOME-NYG
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/15.png"]').css( 'background-image', 'url("/img/nfl/teams/left/15.png")');
//HOME-JAC
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/16.png"]').css( 'background-image', 'url("/img/nfl/teams/left/16.png")');
//HOME-NYJ
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/17.png"]').css( 'background-image', 'url("/img/nfl/teams/left/17.png")');
//HOME-DET
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/18.png"]').css( 'background-image', 'url("/img/nfl/teams/left/18.png")');
//HOME-GB
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/19.png"]').css( 'background-image', 'url("/img/nfl/teams/left/19.png")');
//HOME-CAR
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/20.png"]').css( 'background-image', 'url("/img/nfl/teams/left/20.png")');
//HOME-NE
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/21.png"]').css( 'background-image', 'url("/img/nfl/teams/left/21.png")');
//HOME-OAK
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/22.png"]').css( 'background-image', 'url("/img/nfl/teams/left/22.png")');
//HOME-LAR
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/23.png"]').css( 'background-image', 'url("/img/nfl/teams/left/23.png")');
//HOME-BAL
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/24.png"]').css( 'background-image', 'url("/img/nfl/teams/left/24.png")');
//HOME-WAS
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/25.png"]').css( 'background-image', 'url("/img/nfl/teams/left/25.png")');
//HOME-NO
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/26.png"]').css( 'background-image', 'url("/img/nfl/teams/left/26.png")');
//HOME-SEA
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/27.png"]').css( 'background-image', 'url("/img/nfl/teams/left/27.png")');
//HOME-PIT
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/28.png"]').css( 'background-image', 'url("/img/nfl/teams/left/28.png")');
//HOME-TEN
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/29.png"]').css( 'background-image', 'url("/img/nfl/teams/left/29.png")');
//HOME-MIN
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/30.png"]').css( 'background-image', 'url("/img/nfl/teams/left/30.png")');
//HOME-HOU
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/31.png"]').css( 'background-image', 'url("/img/nfl/teams/left/31.png")');

/*blog page*******/
$('img.img-responsive').attr('class', 'blogpostimage');


/*Playoff Race****/
  $("div#afc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").hide();
    $("div#afc_playoff .list-group h4").on("click", function(){
        $("div#afc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").slideToggle('slow');
});
 $("div#nfc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").hide();
    $("div#nfc_playoff .list-group h4").on("click", function(){
        $("div#nfc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").slideToggle('slow');
});


 $('div#afc_playoff h4, div#nfc_playoff h4').attr('class',  'btn btn-primary div#afc_playoff h4 ');
