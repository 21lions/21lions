$(document).ready(function() {
 $('.col-4.d-flex.align-items-center.justify-content-center.rounded-left').attr('class',  'fade col-4 d-flex align-items-center justify-content-center rounded-left');
 $('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right').attr('class',  'fade  col-4 bg-inverse d-flex align-items-center justify-content-center rounded-right');

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

});

/***Splash page***/
$('.Splash.col-lg-12.col-md-12.col-sm-12.col-xs-12').fadeIn('slow').delay(3000).fadeOut('slow');

$(function () {
	    setInterval(function () {
		    $('.star-1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
	        $('.star-2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
	        $('.star-3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
	        $('.star-4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
	    }, 1);
    });

/*Menu*/
$('a.navbar-brand.text-uppercase.d-lg-none.text-expanded-2').attr('class',  'shimmer navbar-brand text-uppercase d-lg-none text-expanded-2');
$('a.navbar-brand.text-uppercase.d-lg-none.text-expanded').attr('class',  'shimmer navbar-brand text-uppercase d-lg-none text-expanded');
$( "div#mem").load( "/Heavyhitters/admin ul.navbar-nav.flex-row.mr-3 " );

/*storylines***/
 $( ".storylines.container ul li:nth-child(1) .slide .content h2" ).load( '/heavyhitters/blog .blogpost:nth-child(1) .blogpostheader h3 strong a:nth-child(1)' );
 $( ".storylines.container ul li:nth-child(1) .slide .content p" ).load( '/heavyhitters/blog  .blogpost:nth-child(1) .blogpostfooter p:nth-child(1)' );
 $( ".storylines.container ul li:nth-child(1) .slide .image " ).load( '/heavyhitters/blog  .blogpost:nth-child(1) img.blogpostimage' );
 $( ".storylines.container ul li:nth-child(2) .slide .content h2" ).load( '/heavyhitters/blog .blogpost:nth-child(2) .blogpostheader h3 strong a:nth-child(1)' );
 $( ".storylines.container ul li:nth-child(2) .slide .content p" ).load( '/heavyhitters/blog  .blogpost:nth-child(2) .blogpostfooter p:nth-child(1)' );
$( ".storylines.container ul li:nth-child(2) .slide .image " ).load( '/heavyhitters/blog  .blogpost:nth-child(2) img.blogpostimage' );
 $( ".storylines.container ul li:nth-child(3) .slide .content h2" ).load( '/heavyhitters/blog .blogpost:nth-child(3) .blogpostheader h3 strong a:nth-child(1)' );
 $( ".storylines.container ul li:nth-child(3) .slide .content p" ).load( '/heavyhitters/blog  .blogpost:nth-child(3) .blogpostfooter p:nth-child(1)' );
$( ".storylines.container ul li:nth-child(3) .slide .image " ).load( '/heavyhitters/blog  .blogpost:nth-child(3) img.blogpostimage' );
 $( ".storylines.container ul li:nth-child(4) .slide .content h2" ).load( '/heavyhitters/blog .blogpost:nth-child(4) .blogpostheader h3 strong a:nth-child(1)' );
 $( ".storylines.container ul li:nth-child(4) .slide .content p" ).load( '/heavyhitters/blog  .blogpost:nth-child(4) .blogpostfooter p:nth-child(1)' );
$( ".storylines.container ul li:nth-child(4) .slide .image " ).load( '/heavyhitters/blog  .blogpost:nth-child(4) img.blogpostimage' );

/*menu-usernames*/
  $("p.user-buf").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(2) tr.tbdy1:nth-child(1) td:nth-child(2)" );
$("p.user-mia").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(2) tr.tbdy1:nth-child(2) td:nth-child(2)" );
$("p.user-nyj").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(2) tr.tbdy1:nth-child(3) td:nth-child(2)" );
$("p.user-ne").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(2) tr.tbdy1:nth-child(4) td:nth-child(2)" );
$("p.user-den").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(3) tr.tbdy1:nth-child(1) td:nth-child(2)" );
$("p.user-lac").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(3) tr.tbdy1:nth-child(2) td:nth-child(2)" );
$("p.user-kc").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(3) tr.tbdy1:nth-child(3) td:nth-child(2)" );
$("p.user-oak").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(3) tr.tbdy1:nth-child(4) td:nth-child(2)" );
$("p.user-cin").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(4) tr.tbdy1:nth-child(1) td:nth-child(2)" );
$("p.user-cle").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(4) tr.tbdy1:nth-child(2) td:nth-child(2)" );
$("p.user-bal").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(4) tr.tbdy1:nth-child(3) td:nth-child(2)" );
$("p.user-pit").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(4) tr.tbdy1:nth-child(4) td:nth-child(2)" );
$("p.user-ind").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(5) tr.tbdy1:nth-child(1) td:nth-child(2)" );
$("p.user-jac").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(5) tr.tbdy1:nth-child(2) td:nth-child(2)" );
$("p.user-hou").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(5) tr.tbdy1:nth-child(3) td:nth-child(2)" );
$("p.user-ten").load( "/Heavyhitters/coaches .card.card-default:nth-child(2) table.table.table-striped tbody:nth-child(5) tr.tbdy1:nth-child(4) td:nth-child(2)" );
$("p.user-dal").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(2) tr.tbdy1:nth-child(1) td:nth-child(2)" );
$("p.user-phi").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(2) tr.tbdy1:nth-child(2) td:nth-child(2)" );
$("p.user-nyg").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(2) tr.tbdy1:nth-child(3) td:nth-child(2)" );
$("p.user-was").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(2) tr.tbdy1:nth-child(4) td:nth-child(2)" );
$("p.user-sf").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(3) tr.tbdy1:nth-child(1) td:nth-child(2)" );
$("p.user-ari").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(3) tr.tbdy1:nth-child(2) td:nth-child(2)" );
$("p.user-lar").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(3) tr.tbdy1:nth-child(3) td:nth-child(2)" );
$("p.user-sea").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(3) tr.tbdy1:nth-child(4) td:nth-child(2)" );
$("p.user-chi").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(4) tr.tbdy1:nth-child(1) td:nth-child(2)" );
$("p.user-det").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(4) tr.tbdy1:nth-child(2) td:nth-child(2)" );
$("p.user-gb").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(4) tr.tbdy1:nth-child(3) td:nth-child(2)" );
$("p.user-min").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(4) tr.tbdy1:nth-child(4) td:nth-child(2)" );
$("p.user-tb").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(5) tr.tbdy1:nth-child(1) td:nth-child(2)" );
$("p.user-atl").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(5) tr.tbdy1:nth-child(2) td:nth-child(2)" );
$("p.user-car").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(5) tr.tbdy1:nth-child(3) td:nth-child(2)" );
$("p.user-no").load( "/Heavyhitters/coaches .card.card-default:nth-child(3) table.table.table-striped tbody:nth-child(5) tr.tbdy1:nth-child(4) td:nth-child(2)" );



/*GOW************************************************************************************************************/
//Rename 
$('.col-3.d-flex.align-items-center.justify-content-center.rounded-left').attr('class', ' col-4 d-flex align-items-center justify-content-center rounded-left');
 $('.col-3.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right').attr('class', ' col-4 bg-inverse d-flex align-items-center justify-content-center rounded-right');

//AWAY-CHI
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/0.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//AWAY-CIN
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/1.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//AWAY-BUF
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/2.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//AWAY-DEN
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/3.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//AWAY-CLE
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/4.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//AWAY-TB
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/5.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//AWAY-ARI
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/6.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//AWAY-LAC
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/7.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//AWAY-KC
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/8.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );
//AWAY-IND
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/9.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//AWAY-DAL
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/10.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//AWAY-MIA
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/11.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//AWAY-PHI
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/12.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//AWAY-ATL
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/13.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//AWAY-SF
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/14.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//AWAY-NYG
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/15.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );
//AWAY-JAC
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/16.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//AWAY-NYJ
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/17.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );
//AWAY-DET
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/18.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//AWAY-GB
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/19.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );
//AWAY-CAR
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/20.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );
//AWAY-NE
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/21.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//AWAY-OAK
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/22.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//AWAY-LAR
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/23.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );
//AWAY-BAL
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/24.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );
//AWAY-WAS
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/25.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//AWAY-NO
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/26.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//AWAY-SEA
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/27.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//AWAY-PIT
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/28.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//AWAY-TEN
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/29.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//AWAY-MIN
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/30.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//AWAY-HOU
$('.col-4.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/31.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );


//HOME-CHI
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/0.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//HOME-CIN
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/1.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//HOME-BUF
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/2.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//HOME-DEN
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/3.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//HOME-CLE
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/4.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//HOME-TB
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/5.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//HOME-ARI
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/6.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//HOME-LAC
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/7.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//HOME-KC
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/8.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );
//HOME-IND
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/9.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//HOME-DAL
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/10.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//HOME-MIA
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/11.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//HOME-PHI
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/12.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//HOME-ATL
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/13.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//HOME-SF
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/14.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(1) .media span.fa-stack img, .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1 a" );
//HOME-NYG
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/15.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );
//HOME-JAC
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/16.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//HOME-NYJ
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/17.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );
//HOME-DET
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/18.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(2) .media span.fa-stack img, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1 a" );
//HOME-GB
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/19.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );
//HOME-CAR
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/20.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );
//HOME-NE
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/21.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//HOME-OAK
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/22.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//HOME-LAR
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/23.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );
//HOME-BAL
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/24.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );
//HOME-WAS
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/25.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//HOME-NO
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/26.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//HOME-SEA
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/27.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//HOME-PIT
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/28.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//HOME-TEN
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/29.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//HOME-MIN
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/30.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(4) .media span.fa-stack img, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1 a" );
//HOME-HOU
$('.col-4.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/31.png"]').attr( "style", "" ).load( "/Heavyhitters/teams .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(3) .media span.fa-stack img, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1 a" );



 $('.row.row-flush .col-3:nth-child(2)').attr('class', ' col-2 gow away score');
$('.row.row-flush .col-3:nth-child(3)').attr('class', '  col-2 gow home score');
 $('.align-right.clickable.ng-scope').attr('class', ' col-lg-12 col-md-12 col-sm-12 col-xs-12 GOW left');
 $('.clickable.ng-scope').attr('class',  'col-lg-12 col-md-12 col-sm-12 col-xs-12  GOW right');
 $('.gameoftheweek .cfm-table tr td.cfm-at').attr('class', 'col-lg-12 col-md-12 col-sm-12 col-xs-12 at');
$('.gameoftheweek').attr('class', 'col-lg-12 col-md-12 col-sm-12 col-xs-12 gameoftheweek');
$('.gameoftheweek .GOW').wrapInner('<div class="record"></div>');
 $( ".gow.away.score" ).appendTo( $( ".col-6.d-flex.align-items-center.justify-content-center.rounded-left" ) );
$( ".gow.home.score" ).appendTo( $( ".col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right" ) );



    $(function(){
$('ul>li:contains("FrontOffice")').load("/Heavyhitters div#dlmaddenmenu li.nav-item:nth-child(1)" );
$('ul>li:contains("owners")').load("/Heavyhitters div#dlmaddenmenu li.nav-item:nth-child(2)" );
$('ul>li:contains("stats")').load("/Heavyhitters div#dlmaddenmenu li.nav-item:nth-child(3)" );
$('ul>li:contains("players")').load("/Heavyhitters div#dlmaddenmenu li.nav-item:nth-child(4)" );
$('ul>li:contains("schedules")').load("/Heavyhitters div#dlmaddenmenu li.nav-item:nth-child(5)" );
$('ul>li:contains("standings")').load("/Heavyhitters div#dlmaddenmenu li.nav-item:nth-child(8)" );
$("div#leaguestatus").load("/Heavyhitters/standings/league .card.card-default:nth-child(4) .card-header" );
$(".week").load("/Heavyhitters/schedules div#scores .card.b.mb-2:nth-child(1) .col-1.text-center.d-flex.align-items-center.justify-content-center.rounded-left" );




$( ".scorelist" ).wrap( "<div id='scorelistholder' class='col-lg-12 text-white text-justify'>SCORES <em class='fa fa-chevron-circle-down'></em></div>" );
    $(".scorelist").hide();
    $("div#scorelistholder").on("click", function(){
        $(".scorelist").fadeToggle('slow');
    });



/***/


$('a>span:contains("BUF")').load("/Heavyhitters/teams  .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(1) .ml-auto, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(1) .align-self-start.mr-2, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1" ).attr('id', 'buffalo');
$('a>span:contains("MIA")').load( "/Heavyhitters/teams  .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(2) .ml-auto, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(2) .align-self-start.mr-2, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1" ).attr('id', 'miami');
$('a>span:contains("NYJ")').load( "/Heavyhitters/teams  .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(3) .ml-auto, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(3) .align-self-start.mr-2, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1" ).attr('id', 'newyorkj');
$('a>span:contains("NE")').load( "/Heavyhitters/teams  .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(4) .ml-auto, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(4) .align-self-start.mr-2, .col-xl-6:nth-child(1) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1" ).attr('id', 'newengland');

$('a>span:contains("DEN")').load( "/Heavyhitters/teams  .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(1) .ml-auto, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(1) .align-self-start.mr-2, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1" ).attr('id', 'denver');
$('a>span:contains("LAC")').load( "/Heavyhitters/teams  .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(2) .ml-auto, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(2) .align-self-start.mr-2, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1" ).attr('id', 'losangelesc');
$('a>span:contains("KC")').load( "/Heavyhitters/teams  .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(3) .ml-auto, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(3) .align-self-start.mr-2, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1" ).attr('id', 'kansascity');
$('a>span:contains("OAK")').load( "/Heavyhitters/teams  .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(4) .ml-auto, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(4) .align-self-start.mr-2, .col-xl-6:nth-child(3) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1" ).attr('id', 'oakland');

$('a>span:contains("CIN")').load( "/Heavyhitters/teams  .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(1) .ml-auto, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(1) .align-self-start.mr-2, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1" ).attr('id', 'cincy');
$('a>span:contains("CLE")').load( "/Heavyhitters/teams  .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(2) .ml-auto, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(2) .align-self-start.mr-2, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1" ).attr('id', 'cleveland');
$('a>span:contains("BAL")').load( "/Heavyhitters/teams  .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(3) .ml-auto, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(3) .align-self-start.mr-2, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1" ).attr('id', 'baltimore');
$('a>span:contains("PIT")').load( "/Heavyhitters/teams  .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(4) .ml-auto, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(4) .align-self-start.mr-2, .col-xl-6:nth-child(5) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1" ).attr('id', 'pittsburgh');

$('a>span:contains("IND")').load( "/Heavyhitters/teams .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(1) .ml-auto, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(1) .align-self-start.mr-2, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1").attr('id', 'indy');
$('a>span:contains("JAC")').load( "/Heavyhitters/teams .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(2) .ml-auto, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(2) .align-self-start.mr-2, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1").attr('id', 'jacksonville');
$('a>span:contains("HOU")').load( "/Heavyhitters/teams .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(3) .ml-auto, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(3) .align-self-start.mr-2, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1").attr('id', 'houston');
$('a>span:contains("TEN")').load( "/Heavyhitters/teams .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(4) .ml-auto, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(4) .align-self-start.mr-2, .col-xl-6:nth-child(7) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1").attr('id', 'tennessee');

$('a>span:contains("DAL")').load( "/Heavyhitters/teams .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(1) .ml-auto, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(1) .align-self-start.mr-2, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1").attr('id', 'dallas');
$('a>span:contains("PHI")').load( "/Heavyhitters/teams .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(2) .ml-auto, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(2) .align-self-start.mr-2, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1").attr('id', 'philly');
$('a>span:contains("NYG")').load( "/Heavyhitters/teams .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(3) .ml-auto, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(3) .align-self-start.mr-2, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1").attr('id', 'newyorkg');
$('a>span:contains("WAS")').load( "/Heavyhitters/teams .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(4) .ml-auto, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(4) .align-self-start.mr-2, .col-xl-6:nth-child(2) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1").attr('id', 'washington');

$('a>span:contains("SF")').load( "/Heavyhitters/teams .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(1) .ml-auto, .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(1) .align-self-start.mr-2, .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1").attr('id', 'sanfran');
$('a>span:contains("ARI")').load( "/Heavyhitters/teams .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(2) .ml-auto, .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(2) .align-self-start.mr-2, .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1" ).attr('id', 'arizona');
$('a>span:contains("LAR")').load( "/Heavyhitters/teams .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(3) .ml-auto, .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(3) .align-self-start.mr-2, .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1").attr('id', 'losangelesr');
$('a>span:contains("SEA")').load( "/Heavyhitters/teams .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(4) .ml-auto, .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(4) .align-self-start.mr-2, .col-xl-6:nth-child(4) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1").attr('id', 'seattle');

$('a>span:contains("CHI")').load( "/Heavyhitters/teams .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(1) .ml-auto, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(1) .align-self-start.mr-2, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1").attr('id', 'chicago');
$('a>span:contains("DET")').load( "/Heavyhitters/teams .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(2) .ml-auto, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(2) .align-self-start.mr-2, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1").attr('id', 'detroit');
$('a>span:contains("GB")').load( "/Heavyhitters/teams .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(3) .ml-auto, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(3) .align-self-start.mr-2, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1").attr('id', 'greenbay');
$('a>span:contains("MIN")').load( "/Heavyhitters/teams .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(4) .ml-auto, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(4) .align-self-start.mr-2, .col-xl-6:nth-child(6) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1").attr('id', 'minnesota');

$('a>span:contains("TB")').load( "/Heavyhitters/teams .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(1) .ml-auto, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(1) .align-self-start.mr-2, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(1) p.mb-1").attr('id', 'tampabay');
$('a>span:contains("ATL")').load( "/Heavyhitters/teams .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(2) .ml-auto, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(2) .align-self-start.mr-2, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(2) p.mb-1").attr('id', 'atlanta');
$('a>span:contains("CAR")').load( "/Heavyhitters/teams .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(3) .ml-auto, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(3) .align-self-start.mr-2, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(3) p.mb-1").attr('id', 'carolina');
$('a>span:contains("NO")').load( "/Heavyhitters/teams .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(4) .ml-auto, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(4) .align-self-start.mr-2, .col-xl-6:nth-child(8) .list-group-item.cfm-hp-playoffrace:nth-child(4) p.mb-1").attr('id', 'neworleans');



 });     
