$( ".table-responsive" ).wrap( "<div class='col-xl-12'></div>" );
$( "table.dl-table1.madden-team-table" ).wrap( "<div class='col-xl-12'></div>" );

$('.row .col-xl-12 .card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors').attr('id', 'playerpage');

$('.col-md-9.col-xs-9.col-sm-9').attr('class', 'col-md-12 col-xs-12 col-sm-12 sl');
 $('.col-md-10.col-xs-10.col-sm-10').attr('class', 'col-md-12 col-xs-12 col-sm-12 sl');
 $('span.cfm-score-vts.cfm-score-visitor.cfm-score-score').attr('class', 'col-2 cfm-score-vts cfm-score-visitor cfm-score-score');	
 $('span.cfm-score-vta.cfm-score-visitor.cfm-score-abbr').attr('class', 'col-12 cfm-score-vta cfm-score-visitor cfm-score-abbr');	
$('span.cfm-score-hts.cfm-score-home.cfm-score-score').attr('class', 'col-2 cfm-score-hts cfm-score-home cfm-score-score');	
$('span.cfm-score-hta.cfm-score-home.cfm-score-abbr').attr('class', 'col-12 cfm-score-hta cfm-score-home cfm-score-abbr');	


	
/***scoreboard**********************/
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



/*Playoff Race****/
  $("div#afc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").hide();
    $("div#afc_playoff .list-group h4").on("click", function(){
        $("div#afc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").slideToggle('slow');
});
 $("div#nfc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").hide();
    $("div#nfc_playoff .list-group h4").on("click", function(){
        $("div#nfc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").slideToggle('slow');
});


/*Standings tab***/
$(".col-xl-10.teams .row .col-xl-6").attr("class","col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12");

/*Game Recap Page***/
$( ".card.b" ).wrap( "<div class='col-xl-12'></div>" );
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

	/*Schedules***/ 
	$('.row.row-flush.cfm-team-schedule .col-1.text-center.d-flex.align-items-center.justify-content-center.rounded-left').attr('class', 'col-1 text-center d-flex align-items-center justify-content-center rounded-left'); 
	$('.row.row-flush.cfm-team-schedule .col-2.d-flex.justify-content-start').attr('class', 'col-4 d-flex justify-content-start'); 
	$('.row.row-flush.cfm-team-schedule .col-6').attr('class', 'col-2'); 
	$('.row.row-flush.cfm-team-schedule .col-3.text-center.d-flex.align-items-end.justify-content-end.rounded-right').attr('class', 'col-4 d-flex justify-content-start'); 
	$('.col-1.text-center.d-flex.align-items-center.justify-content-center.rounded-left').detach( ); 
	$('.col-4.d-flex.justify-content-start').attr('class', 'col-5 d-flex justify-content-start'); 


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
$(".col-4.d-flex.align-items-left.justify-content-center.cfm-player-logo img.rounded-circle.thumb128").unwrap();


/*Team Page****/
$( '.col-10.py-3.rounded-right.cfm-team-info').attr('class', 'col-12 py-3 rounded-right cfm-team-info');
$(' .col-2.d-flex.align-items-left.justify-content-center.cfm-team-logo').attr('class', 'col-12 d-flex align-items-left justify-content-center cfm-team-logo  ');
$(' .col-xl-10.col-lg-6.col-md-12.pt-2').attr('class', 'col-xl-12 col-lg-12 col-md-12 pt-2 ');
$('.col-xl-12.col-lg-6.col-md-12').attr('class', 'col-xl-12 col-lg-12 col-md-12 ');
$('.col-xl-12.col-lg-12.col-md-12 .card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors').attr('id', 'tmpg');
$(" ul.nav.nav-tabs").appendTo(".col-12.py-3.rounded-right.cfm-team-info  ");
$(" .col-md-6.col-xs-6.col-sm-6 .card").appendTo(".col-12.py-3.rounded-right.cfm-team-info");
$(".card.card-madden-team").appendTo(".col-12.py-3.rounded-right.cfm-team-info");
 $('table.dl-table1.madden-team-table').appendTo(".col-12.py-3.rounded-right.cfm-team-info");
$(" .col-xl-12.col-lg-12.col-md-12.pt-2").appendTo("div#tmpg .col-12.py-3.rounded-right.cfm-team-info");

/*front-office***/
$("div#frontoffice_wrapper").attr('class', 'col-12 frontoffice_wrapper');

/*pow***/
$(".oplayeroftheweek .col-4.d-flex.align-items-center.justify-content-center.rounded-left	").attr('class', 'oplayeroftheweek col-12 d-flex align-items-center justify-content-center rounded-left');
$(".oplayeroftheweek .col-8.py-2.pl-0").attr('class', 'oplayeroftheweek col-12 py-2 pl-0');
$(".dplayeroftheweek .col-4.d-flex.align-items-center.justify-content-center.rounded-left	").attr('class', 'dplayeroftheweek col-12 d-flex align-items-center justify-content-center rounded-left');
$(".dplayeroftheweek .col-8.py-2.pl-0").attr('class', 'dplayeroftheweek  col-12 py-2 pl-0');
$("img.rounded-circle.thumb24").unwrap();

/*Player search page***/
$( ".row" ).wrap( "<div class='col-xl-10'></div>" );
$('ul.players-add-filter.dropdown-menu.show').attr('class', 'dropdown-menu');
$("legend").appendTo(".col-xl-10 .row .col-12 .card.card-default .card-body");
$( "legend" ).wrap( "<div class='legendtwo'>Player Search <em class='fa fa-chevron-circle-down'></em></div>" );
$("form.form-horizontal").hide();
    $(".legendtwo").on("click", function(){
        $("form.form-horizontal").fadeToggle('slow');
});
