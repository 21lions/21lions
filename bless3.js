$(function () {
	    setInterval(function () {
		    $('.star-1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
	        $('.star-2').fadeOut(300).fadeIn(200).fadeOut(200).delay(1920);
	        $('.star-3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
	        $('.star-4').fadeOut(700).fadeIn(300).fadeOut(200).delay(1350);
		$('.star-5').fadeOut(900).fadeIn(500).fadeOut(360).delay(1550);
 $('.star-6').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
	        $('.star-7').fadeOut(700).fadeIn(300).fadeOut(200).delay(1350);
	    }, 1);
    });

/*TABS*/
 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");
	



/***scorelist***/
$('a>span:contains("ARI")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/ARI.svg" width="35" height="25"" class="scoreboard">Arizona</span>');
$('a>span:contains("ATL")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/ATL.svg" width="35" height="25"" class="scoreboard">Atlanta</span>');
$('a>span:contains("BAL")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/BAL.svg" width="35" height="25"" class="scoreboard"> Baltimore </span>');
$('a>span:contains("BUF")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/BUF.svg" width="35" height="25"" class="scoreboard"> Buffalo </span>');
$('a>span:contains("CAR")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/CAR.svg" width="35" height="25"" class="scoreboard"> Carolina </span>');
$('a>span:contains("CHI")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/CHI.svg" width="35" height="25"" class="scoreboard"> Chicago </span>');
$('a>span:contains("CIN")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/CIN.svg" width="35" height="25"" class="scoreboard"> Cincinnatti </span>');
$('a >span:contains("CLE")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/CLE.svg" width="35" height="25""" class="scoreboard"> Cleveland </span>');
$('a>span:contains("DAL")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/DAL.svg" width="35" height="25"" class="scoreboard"> Dallas </span>');
$('a>span:contains("DEN")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/DEN.svg" width="35" height="25"" class="scoreboard"> Denver </span>');
$('a>span:contains("DET")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/DET.svg" width="35" height="25"" class="scoreboard"> Detroit </span>');
$('a>span:contains("GB")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/GB.svg" width="35" height="25"" class="scoreboard"> Green Bay </span>');
$('a>span:contains("HOU")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/HOU.svg" width="35" height="25"" class="scoreboard"> Houston </span>');
$('a>span:contains("IND")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/IND.svg" width="35" height="25"" class="scoreboard"> Indianapolis </span>');
$('a>span:contains("JAX")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/JAC.svg" width="35" height="25"" class="scoreboard"> Jacksonville </span>');
$('a>span:contains("KC")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/KC.svg" width="35" height="25"" class="scoreboard"> Kansas City </span>');
$('a>span:contains("MIA")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/MIA.svg" width="35" height="25"" class="scoreboard"> Miami </span>');
$('a>span:contains("MIN")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/MIN.svg" width="35" height="25"" class="scoreboard"> Minnesota </span>');
$('a>span:contains("NE")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/NE.svg"width="35" height="25"" class="scoreboard"> New England </span>');
$('a>span:contains("NO")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/NO.svg" width="35" height="25"" class="scoreboard"> New Orleans </span>');
$('a>span:contains("NYG")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/NYG.svg" width="35" height="25"" class="scoreboard"> New York </span>');
$('a>span:contains("NYJ")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/NYJ.svg" width="35" height="25"" class="scoreboard"> New York </span>');
$('a>span:contains("OAK")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/OAK.svg" width="35" height="25"" class="scoreboard"> Oakland </span>');
$('a>span:contains("PHI")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/PHI.svg" width="35" height="25"" class="scoreboard"> Philadelphia </span>');
$('a>span:contains("PIT")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/PIT.svg" width="35" height="25"" class="scoreboard"> Pittsburgh </span>');
$('a>span:contains("SD")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/SD.svg" width="35" height="25"" class="scoreboard"> San Diego </span>');
$('a>span:contains("SF")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/SF.svg" width="35" height="25"" class="scoreboard"> San Francisco</span>');
$('a>span:contains("SEA")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/SEA.svg" width="35" height="25"" class="scoreboard">  Seattle</span>');
$('a>span:contains("LAR")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/LA.svg" width="35" height="25"" class="scoreboard"> Los Angeles </span>');
$('a>span:contains("LAC")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/LAC.svg" width="35" height="25"" class="scoreboard"> Los Angeles </span>');
$('a>span:contains("TB")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/TB.svg" width="35" height="25"" class="scoreboard"> Tampa Bay </span>');
$('a>span:contains("TEN")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/TEN.svg" width="35" height="25"" class="scoreboard"> Tennessee </span>');
$('a>span:contains("WAS")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/WAS.svg" width="35" height="25"" class="scoreboard"> Washington </span>');

$.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (
    ($(window).height() - $(this).outerHeight()) / 2) + 
     $(window).scrollTop()) + "px"
  );
  this.css("left", Math.max(0, (
    ($(window).width() - $(this).outerWidth()) / 2) + 
     $(window).scrollLeft()) + "px"
  );
  return this;
}


$("#overlay").show();
$("#overlay-content").show().center();

setTimeout(function(){    
  $("#overlay").fadeOut();
}, 5000);
