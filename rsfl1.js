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
	

/*STANDINGS*/
$('a:contains("New Orleans Saints")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/no"><img src="https://static.nfl.com/static/site/img/logos/svg/teams/NO.svg"  class="teamlogo">New Orleans Saints</a>');
$('a:contains("New York Jets")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/nyj"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/NYJ.svg"  class="teamlogo">New York Jets</a>');
$('a:contains("Miami Dolphins")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/mia"><img src="https://static.nfl.com/static/site/img/logos/svg/teams/MIA.svg"  class="teamlogo"> Miami Dolphins</a>');
$('a:contains("Cleveland Browns")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/cle"><img src="https://static.nfl.com/static/site/img/logos/svg/teams/CLE.svg"  class="teamlogo"> Cleveland Browns</a>');
$('a:contains("Cincinnati Bengals")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/cin"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/CIN.svg"  class="teamlogo">Cincinnati Bengals</a>');
$('a:contains("Baltimore Ravens")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/bal"><img src="https://static.nfl.com/static/site/img/logos/svg/teams/BAL.svg"  class="teamlogo">Baltimore Ravens</a>');
$('a:contains("Tennessee Titans")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/ten"><img src="https://static.nfl.com/static/site/img/logos/svg/teams/TEN.svg"  class="teamlogo"> Tennessee Titans</a>');
$('a:contains("Indianapolis Colts")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/ind"><img src="https://static.nfl.com/static/site/img/logos/svg/teams/IND.svg"  class="teamlogo"> Indianapolis Colts</a>');
$('a:contains("Houston Texans")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/hou"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/HOU.svg"  class="teamlogo">Houston Texans</a>');
$('a:contains("Oakland Raiders")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/oak"><img src="https://static.nfl.com/static/site/img/logos/svg/teams/OAK.svg"  class="teamlogo"> Oakland Raiders</a>');
$('a:contains("Denver Broncos")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/den"><img src="https://static.nfl.com/static/site/img/logos/svg/teams/DEN.svg"  class="teamlogo">Denver Broncos</a>');
$('a:contains("Kansas City Chiefs")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/kc"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/KC.svg"  class="teamlogo">Kansas City Chiefs</a>');
$('a:contains("Dallas Cowboys")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/dal"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/DAL.svg"  class="teamlogo">Dallas Cowboys</a>');
$('a:contains("New York Giants")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/nyg"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/NYG.svg"  class="teamlogo">New York Giants</a>');
$('a:contains("Detroit Lions")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/det"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/DET.svg"  class="teamlogo">Detroit Lions</a>');
$('a:contains("Green Bay Packers")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/GB"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/GB.svg"  class="teamlogo">Green Bay Packers</a>');
$('a:contains("Minnesota Vikings")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/min"><img src="https://static.nfl.com/static/site/img/logos/svg/teams/MIN.svg"  class="teamlogo">Minnesota Vikings</a>');
$('a:contains("Chicago Bears")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/chi"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/CHI.svg"  class="teamlogo">Chicago Bears</a>');
$('a:contains("Carolina Panthers")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/car"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/CAR.svg"  class="teamlogo">Carolina Panthers</a>');
$('a:contains("Atlanta Falcons")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/atl"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/ATL.svg"  class="teamlogo">Atlanta Falcons</a>');
$('a:contains("Los Angeles Rams")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/lar"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/LA.svg"  class="teamlogo">Los Angeles Rams</a>');
$('a:contains("Seattle Seahawks")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/sea"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/SEA.svg"  class="teamlogo">Seattle Seahawks</a>');
$('a:contains("Arizona Cardinals")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/ari"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/ARI.svg"  class="teamlogo">Arizona Cardinals</a>');
$('a:contains("Buffalo Bills")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/buf"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/BUF.svg"  class="teamlogo">Buffalo Bills</a>');
$('a:contains("Pittsburgh Steelers")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/pit"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/PIT.svg"  class="teamlogo">Pittsburgh Steelers</a>');
$('a:contains("San Francisco 49ers")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/sf"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/SF.svg"  class="teamlogo">San Francisco 49ers</a>');
$('a:contains("Washington Redskins")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/was"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/WAS.svg"  class="teamlogo">Washington Redskins</a>');
$('a:contains("Los Angeles Chargers")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/lac"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/LAC.svg"  class="teamlogo">Los Angeles Chargers</a>');
$('a:contains("Jacksonville Jaguars")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/jax"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/JAC.svg"  class="teamlogo">Jacksonville Jaguars</a>');
$('a:contains("New England Patriots")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/ne"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/NE.svg"  class="teamlogo">New England Patriots</a>');
$('a:contains("Tampa Bay Buccaneers")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/tb"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/TB.svg"  class="teamlogo">Tampa Bay Buccaneers</a>');
$('a:contains("Philadelphia Eagles")').replaceWith('<a href="http://daddyleagues.com/rsfl/team/phi"> <img src="https://static.nfl.com/static/site/img/logos/svg/teams/PHI.svg"  class="teamlogo">Philadelphia Eagles</a>');



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
$('a>span:contains("SF")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/SF.svg" width="35" height="25"" class="scoreboard"> San Francisco </span>');
$('a>span:contains("SEA")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/SEA.svg" width="35" height="25"" class="scoreboard"> Seattle </span>');
$('a>span:contains("LAR")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/LA.svg" width="35" height="25"" class="scoreboard"> Los Angeles </span>');
$('a>span:contains("LAC")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/LAC.svg" width="35" height="25"" class="scoreboard"> Los Angeles </span>');
$('a>span:contains("TB")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/TB.svg" width="35" height="25"" class="scoreboard"> Tampa Bay </span>');
$('a>span:contains("TEN")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/TEN.svg" width="35" height="25"" class="scoreboard"> Tennessee </span>');
$('a>span:contains("WAS")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/WAS.svg" width="35" height="25"" class="scoreboard"> Washington </span>');
