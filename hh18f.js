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
$('a:contains("New Orleans Saints")').replaceWith('<a href="http://daddyleagues.com/hh18/team/no"><img src="/img/nfl/teams/left/26.png"  class="teamlogo">New Orleans Saints</a>');
$('a:contains("New York Jets")').replaceWith('<a href="http://daddyleagues.com/hh18/team/nyj"> <img src="/img/nfl/teams/left/17.png"  class="teamlogo">New York Jets</a>');
$('a:contains("Miami Dolphins")').replaceWith('<a href="http://daddyleagues.com/hh18/team/mia"><img src="/img/nfl/teams/left/11.png"  class="teamlogo"> Miami Dolphins</a>');
$('a:contains("Cleveland Browns")').replaceWith('<a href="http://daddyleagues.com/hh18/team/cle"><img src="/img/nfl/teams/left/4.png"  class="teamlogo"> Cleveland Browns</a>');
$('a:contains("Cincinnati Bengals")').replaceWith('<a href="http://daddyleagues.com/hh18/team/cin"> <img src="/img/nfl/teams/left/1.png"  class="teamlogo">Cincinnati Bengals</a>');
$('a:contains("Baltimore Ravens")').replaceWith('<a href="http://daddyleagues.com/hh18/team/bal"><img src="/img/nfl/teams/left/24.png"  class="teamlogo">Baltimore Ravens</a>');
$('a:contains("Tennessee Titans")').replaceWith('<a href="http://daddyleagues.com/hh18/team/ten"><img src="/img/nfl/teams/left/29.png"  class="teamlogo"> Tennessee Titans</a>');
$('a:contains("Indianapolis Colts")').replaceWith('<a href="http://daddyleagues.com/hh18/team/ind"><img src="/img/nfl/teams/left/9.png"  class="teamlogo"> Indianapolis Colts</a>');
$('a:contains("Houston Texans")').replaceWith('<a href="http://daddyleagues.com/hh18/team/hou"> <img src="/img/nfl/teams/left/31.png"  class="teamlogo">Houston Texans</a>');
$('a:contains("Oakland Raiders")').replaceWith('<a href="http://daddyleagues.com/hh18/team/oak"><img src="/img/nfl/teams/left/22.png"  class="teamlogo"> Oakland Raiders</a>');
$('a:contains("Denver Broncos")').replaceWith('<a href="http://daddyleagues.com/hh18/team/den"><img src="/img/nfl/teams/left/3.png"  class="teamlogo">Denver Broncos</a>');
$('a:contains("Kansas City Chiefs")').replaceWith('<a href="http://daddyleagues.com/hh18/team/kc"> <img src="/img/nfl/teams/left/8.png"  class="teamlogo">Kansas City Chiefs</a>');
$('a:contains("Dallas Cowboys")').replaceWith('<a href="http://daddyleagues.com/hh18/team/dal"> <img src="/img/nfl/teams/left/10.png"  class="teamlogo">Dallas Cowboys</a>');
$('a:contains("New York Giants")').replaceWith('<a href="http://daddyleagues.com/hh18/team/nyg"> <img src="/img/nfl/teams/left/15.png"  class="teamlogo">New York Giants</a>');
$('a:contains("Detroit Lions")').replaceWith('<a href="http://daddyleagues.com/hh18/team/det"> <img src="/img/nfl/teams/left/18.png"  class="teamlogo">Detroit Lions</a>');
$('a:contains("Green Bay Packers")').replaceWith('<a href="http://daddyleagues.com/hh18/team/GB"> <img src="/img/nfl/teams/left/19.png"  class="teamlogo">Green Bay Packers</a>');
$('a:contains("Minnesota Vikings")').replaceWith('<a href="http://daddyleagues.com/hh18/team/min"><img src="/img/nfl/teams/left/30.png"  class="teamlogo">Minnesota Vikings</a>');
$('a:contains("Chicago Bears")').replaceWith('<a href="http://daddyleagues.com/hh18/team/chi"> <img src="/img/nfl/teams/left/0.png"  class="teamlogo">Chicago Bears</a>');
$('a:contains("Carolina Panthers")').replaceWith('<a href="http://daddyleagues.com/hh18/team/car"> <img src="/img/nfl/teams/left/20.png"  class="teamlogo">Carolina Panthers</a>');
$('a:contains("Atlanta Falcons")').replaceWith('<a href="http://daddyleagues.com/hh18/team/atl"> <img src="/img/nfl/teams/left/13.png"  class="teamlogo">Atlanta Falcons</a>');
$('a:contains("Los Angeles Rams")').replaceWith('<a href="http://daddyleagues.com/hh18/team/lar"> <img src="/img/nfl/teams/left/23.png"  class="teamlogo">Los Angeles Rams</a>');
$('a:contains("Seattle Seahawks")').replaceWith('<a href="http://daddyleagues.com/hh18/team/sea"> <img src="/img/nfl/teams/left/27.png"  class="teamlogo">Seattle Seahawks</a>');
$('a:contains("Arizona Cardinals")').replaceWith('<a href="http://daddyleagues.com/hh18/team/ari"> <img src="/img/nfl/teams/left/6.png"  class="teamlogo">Arizona Cardinals</a>');
$('a:contains("Buffalo Bills")').replaceWith('<a href="http://daddyleagues.com/hh18/team/buf"> <img src="/img/nfl/teams/left/2.png"  class="teamlogo">Buffalo Bills</a>');
$('a:contains("Pittsburgh Steelers")').replaceWith('<a href="http://daddyleagues.com/hh18/team/pit"> <img src="/img/nfl/teams/left/28.png"  class="teamlogo">Pittsburgh Steelers</a>');
$('a:contains("San Francisco 49ers")').replaceWith('<a href="http://daddyleagues.com/hh18/team/sf"> <img src="/img/nfl/teams/left/14.png"  class="teamlogo">San Francisco 49ers</a>');
$('a:contains("Washington Redskins")').replaceWith('<a href="http://daddyleagues.com/hh18/team/was"> <img src="/img/nfl/teams/left/25.png"  class="teamlogo">Washington Redskins</a>');
$('a:contains("Los Angeles Chargers")').replaceWith('<a href="http://daddyleagues.com/hh18/team/lac"> <img src="/img/nfl/teams/left/7.png"  class="teamlogo">Los Angeles Chargers</a>');
$('a:contains("Jacksonville Jaguars")').replaceWith('<a href="http://daddyleagues.com/hh18/team/jax"> <img src="/img/nfl/teams/left/16.png"  class="teamlogo">Jacksonville Jaguars</a>');
$('a:contains("New England Patriots")').replaceWith('<a href="http://daddyleagues.com/hh18/team/ne"> <img src="/img/nfl/teams/left/21.png"  class="teamlogo">New England Patriots</a>');
$('a:contains("Tampa Bay Buccaneers")').replaceWith('<a href="http://daddyleagues.com/hh18/team/tb"> <img src="/img/nfl/teams/left/5.png"  class="teamlogo">Tampa Bay Buccaneers</a>');
$('a:contains("Philadelphia Eagles")').replaceWith('<a href="http://daddyleagues.com/hh18/team/phi"> <img src="/img/nfl/teams/left/12.png"  class="teamlogo">Philadelphia Eagles</a>');
$('a:contains("Salt Lake City Flyers")').replaceWith('<a href="http://daddyleagues.com/hh18/team/slc"> <img src="/img/nfl/teams/left/158.png"  class="teamlogo">Salt Lake City Flyers</a>');
$('a:contains("Mexico City Diablos")').replaceWith('<a href="http://daddyleagues.com/hh18/team/mex"> <img src="/img/nfl/teams/left/152.png"  class="teamlogo">Mexico City Diablos</a>');
$('a:contains("San Antonio Marshalls")').replaceWith('<a href="http://daddyleagues.com/hh18/team/sat"> <img src="/img/nfl/teams/left/165.png"  class="teamlogo">San Antonio Express</a>');
$('a:contains("San Diego Aftershocks")').replaceWith('<a href="http://daddyleagues.com/hh18/team/sdg"> <img src="/img/nfl/teams/left/136.png"  class="teamlogo">San Diego Aftershocks</a>');
$('a:contains("Memphis Steamers")').replaceWith('<a href="http://daddyleagues.com/hh18/team/mem"> <img src="/img/nfl/teams/left/181.png"  class="teamlogo">Memphis Steamers</a>');
$('a:contains("Toronto Thunderbirds")').replaceWith('<a href="http://daddyleagues.com/hh18/team/tor"> <img src="/img/nfl/teams/left/182.png"  class="teamlogo">Toronto Thunderbirds</a>');
$('a:contains("Chicago Tigers")').replaceWith('<a href="http://daddyleagues.com/hh18/team/cho"> <img src="/img/nfl/teams/left/183.png"  class="teamlogo">Chicago Tigers</a>');
$('a:contains("Brooklyn Beats")').replaceWith('<a href="http://daddyleagues.com/hh18/team/bkn"> <img src="/img/nfl/teams/left/141.png"  class="teamlogo">Brooklyn Beats</a>');
$('a:contains("London Black Knights")').replaceWith('<a href="http://daddyleagues.com/hh18/team/ldn"> <img src="/img/nfl/teams/left/163.png"  class="teamlogo">London Black Knights</a>');


/***scorelist***/
$('a>span:contains("SLC")').replaceWith('<img src="/img/nfl/teams/left/158.png" width="35" height="25"" class="scoreboard"> Salt Lake City </span>');
$('a>span:contains("MEX")').replaceWith('<img src="/img/nfl/teams/left/152.png" width="35" height="25"" class="scoreboard"> Mexico City </span>');
$('a>span:contains("SAT")').replaceWith('<img src="/img/nfl/teams/left/165.png" width="35" height="25"" class="scoreboard"> San Antonio </span>');
$('a>span:contains("SDG")').replaceWith('<img src="/img/nfl/teams/left/136.png" width="35" height="25"" class="scoreboard"> San Diego </span>');
$('a>span:contains("MEM")').replaceWith('<img src="/img/nfl/teams/left/181.png" width="35" height="25"" class="scoreboard"> Memphis </span>');
$('a>span:contains("TOR")').replaceWith('<img src="/img/nfl/teams/left/182.png" width="35" height="25"" class="scoreboard"> Toronto </span>');
$('a>span:contains("ARI")').replaceWith('<img src="/img/nfl/teams/left/6.png" width="35" height="25"" class="scoreboard">Arizona</span>');
$('a>span:contains("ATL")').replaceWith('<img src="/img/nfl/teams/left/13.png" width="35" height="25"" class="scoreboard">Atlanta</span>');
$('a>span:contains("BAL")').replaceWith('<img src="/img/nfl/teams/left/24.png" width="35" height="25"" class="scoreboard"> Baltimore </span>');
$('a>span:contains("BUF")').replaceWith('<img src="/img/nfl/teams/left/2.png" width="35" height="25"" class="scoreboard"> Buffalo </span>');
$('a>span:contains("CAR")').replaceWith('<img src="/img/nfl/teams/left/20.png" width="35" height="25"" class="scoreboard"> Carolina </span>');
$('a>span:contains("CHI")').replaceWith('<img src="/img/nfl/teams/left/0.png" width="35" height="25"" class="scoreboard"> Chicago </span>');
$('a>span:contains("CIN")').replaceWith('<img src="/img/nfl/teams/left/1.png" width="35" height="25"" class="scoreboard"> Cincinnatti </span>');
$('a >span:contains("CLE")').replaceWith('<img src="/img/nfl/teams/left/4.png" width="35" height="25""" class="scoreboard"> Cleveland </span>');
$('a>span:contains("DAL")').replaceWith('<img src="/img/nfl/teams/left/10.png" width="35" height="25"" class="scoreboard"> Dallas </span>');
$('a>span:contains("DEN")').replaceWith('<img src="/img/nfl/teams/left/3.png" width="35" height="25"" class="scoreboard"> Denver </span>');
$('a>span:contains("DET")').replaceWith('<img src="/img/nfl/teams/left/18.png" width="35" height="25"" class="scoreboard"> Detroit </span>');
$('a>span:contains("GB")').replaceWith('<img src="/img/nfl/teams/left/19.png" width="35" height="25"" class="scoreboard"> Green Bay </span>');
$('a>span:contains("HOU")').replaceWith('<img src="/img/nfl/teams/left/31.png" width="35" height="25"" class="scoreboard"> Houston </span>');
$('a>span:contains("IND")').replaceWith('<img src="/img/nfl/teams/left/9.png" width="35" height="25"" class="scoreboard"> Indianapolis </span>');
$('a>span:contains("JAX")').replaceWith('<img src="/img/nfl/teams/left/16.png" width="35" height="25"" class="scoreboard"> Jacksonville </span>');
$('a>span:contains("KC")').replaceWith('<img src="/img/nfl/teams/left/8.png" width="35" height="25"" class="scoreboard"> Kansas City </span>');
$('a>span:contains("MIA")').replaceWith('<img src="/img/nfl/teams/left/11.png" width="35" height="25"" class="scoreboard"> Miami </span>');
$('a>span:contains("MIN")').replaceWith('<img src="/img/nfl/teams/left/30.png" width="35" height="25"" class="scoreboard"> Minnesota </span>');
$('a>span:contains("NE")').replaceWith('<img src="/img/nfl/teams/left/21.png"width="35" height="25"" class="scoreboard"> New England </span>');
$('a>span:contains("NO")').replaceWith('<img src="/img/nfl/teams/left/26.png" width="35" height="25"" class="scoreboard"> New Orleans </span>');
$('a>span:contains("NYG")').replaceWith('<img src="/img/nfl/teams/left/15.png" width="35" height="25"" class="scoreboard"> New York </span>');
$('a>span:contains("NYJ")').replaceWith('<img src="/img/nfl/teams/left/17.png" width="35" height="25"" class="scoreboard"> New York </span>');
$('a>span:contains("OAK")').replaceWith('<img src="/img/nfl/teams/left/22.png" width="35" height="25"" class="scoreboard"> Oakland </span>');
$('a>span:contains("PHI")').replaceWith('<img src="/img/nfl/teams/left/12.png" width="35" height="25"" class="scoreboard"> Philadelphia </span>');
$('a>span:contains("PIT")').replaceWith('<img src="/img/nfl/teams/left/28.png" width="35" height="25"" class="scoreboard"> Pittsburgh </span>');
$('a>span:contains("SD")').replaceWith('<img src="/img/nfl/teams/left/181.png" width="35" height="25"" class="scoreboard"> San Diego </span>');
$('a>span:contains("SF")').replaceWith('<img src="/img/nfl/teams/left/14.png" width="35" height="25"" class="scoreboard"> San Francisco </span>');
$('a>span:contains("SEA")').replaceWith('<img src="/img/nfl/teams/left/27.png" width="35" height="25"" class="scoreboard"> Seattle </span>');
$('a>span:contains("LAR")').replaceWith('<img src="/img/nfl/teams/left/23.png" width="35" height="25"" class="scoreboard"> Los Angeles </span>');
$('a>span:contains("LAC")').replaceWith('<img src="/img/nfl/teams/left/7.png" width="35" height="25"" class="scoreboard"> Los Angeles </span>');
$('a>span:contains("TB")').replaceWith('<img src="/img/nfl/teams/left/5.png" width="35" height="25"" class="scoreboard"> Tampa Bay </span>');
$('a>span:contains("TEN")').replaceWith('<img src="/img/nfl/teams/left/29.png" width="35" height="25"" class="scoreboard"> Tennessee </span>');
$('a>span:contains("WAS")').replaceWith('<img src="/img/nfl/teams/left/25.png" width="35" height="25"" class="scoreboard"> Washington </span>');
$('a>span:contains("CHO")').replaceWith('<img src="http://www.daddyleagues.com/img/nfl/teams/left/183.png" width="35" height="25"" class="scoreboard">Chicago</span>');
$('a>span:contains("LDN")').replaceWith('<img src="http://www.daddyleagues.com/img/nfl/teams/left/163.png" width="35" height="25"" class="scoreboard">London</span>');
$('a>span:contains("BKN")').replaceWith('<img src="http://www.daddyleagues.com/img/nfl/teams/left/141.png" width="35" height="25"" class="scoreboard">Brooklyn</span>');
