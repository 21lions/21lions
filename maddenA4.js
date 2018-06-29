$('div.scorelist').attr('id', 'scorelist');
$( "div" ).removeClass( "scorelist" );

$(document).ready(function(){
    $("#flip").click(function(){
        $("div#scorelist").slideDown("slow");
    });
});
$(document).ready(function(){
    $("div#scorelist").click(function(){
        $("div#scorelist").slideUp("slow");
    });
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
$('a>span:contains("ARI")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/ARI.svg" width="35" height="25"" class="scoreboard"><div class="teamname">Arizona</div>');
$('a>span:contains("ATL")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/ATL.svg" width="35" height="25"" class="scoreboard"><div class="teamname">Atlanta</div>');
$('a>span:contains("BAL")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/BAL.svg" width="35" height="25"" class="scoreboard"><div class="teamname"> Baltimore </div>');
$('a>span:contains("BUF")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/BUF.svg" width="35" height="25"" class="scoreboard"><div class="teamname"> Buffalo </div>');
$('a>span:contains("CAR")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/CAR.svg" width="35" height="25"" class="scoreboard"><div class="teamname">Carolina </div>');
$('a>span:contains("CHI")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/CHI.svg" width="35" height="25"" class="scoreboard"> <div class="teamname">Chicago </div>');
$('a>span:contains("CIN")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/CIN.svg" width="35" height="25"" class="scoreboard"><div class="teamname">Cincinnatti </div>');
$('a >span:contains("CLE")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/CLE.svg" width="35" height="25""" class="scoreboard"><div class="teamname"> Cleveland </div>');
$('a>span:contains("DAL")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/DAL.svg" width="35" height="25"" class="scoreboard"><div class="teamname"> Dallas </div>');
$('a>span:contains("DEN")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/DEN.svg" width="35" height="25"" class="scoreboard"><div class="teamname">Denver </div>');
$('a>span:contains("DET")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/DET.svg" width="35" height="25"" class="scoreboard"><div class="teamname"> Detroit </div>');
$('a>span:contains("GB")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/GB.svg" width="35" height="25"" class="scoreboard"><div class="teamname">Green Bay </div>');
$('a>span:contains("HOU")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/HOU.svg" width="35" height="25"" class="scoreboard"><div class="teamname"> Houston </div>');
$('a>span:contains("IND")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/IND.svg" width="35" height="25"" class="scoreboard"><div class="teamname"> Indianapolis </div>');
$('a>span:contains("JAX")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/JAC.svg" width="35" height="25"" class="scoreboard"><div class="teamname">Jacksonville </div>');
$('a>span:contains("KC")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/KC.svg" width="35" height="25"" class="scoreboard"> <div class="teamname">Kansas City </div>');
$('a>span:contains("MIA")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/MIA.svg" width="35" height="25"" class="scoreboard"><div class="teamname">Miami </div>');
$('a>span:contains("MIN")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/MIN.svg" width="35" height="25"" class="scoreboard"> <div class="teamname">Minnesota </div>');
$('a>span:contains("NE")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/NE.svg"width="35" height="25"" class="scoreboard"><div class="teamname"> New England </div>');
$('a>span:contains("NO")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/NO.svg" width="35" height="25"" class="scoreboard"><div class="teamname"> New Orleans </div>');
$('a>span:contains("NYG")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/NYG.svg" width="35" height="25"" class="scoreboard"><div class="teamname">New York </div>');
$('a>span:contains("NYJ")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/NYJ.svg" width="35" height="25"" class="scoreboard"><div class="teamname">New York </div>');
$('a>span:contains("OAK")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/OAK.svg" width="35" height="25"" class="scoreboard"> <div class="teamname">Oakland </div>');
$('a>span:contains("PHI")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/PHI.svg" width="35" height="25"" class="scoreboard"> <div class="teamname">Philadelphia </div>');
$('a>span:contains("PIT")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/PIT.svg" width="35" height="25"" class="scoreboard"> <div class="teamname">Pittsburgh </div>');
$('a>span:contains("SD")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/SD.svg" width="35" height="25"" class="scoreboard"> <div class="teamname">San Diego </div>');
$('a>span:contains("SF")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/SF.svg" width="35" height="25"" class="scoreboard"><div class="teamname">San Francisco </div>');
$('a>span:contains("SEA")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/SEA.svg" width="35" height="25"" class="scoreboard"><div class="teamname"> Seattle </div>');
$('a>span:contains("LAR")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/LA.svg" width="35" height="25"" class="scoreboard"><div class="teamname">Los Angeles </div>');
$('a>span:contains("LAC")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/LAC.svg" width="35" height="25"" class="scoreboard"> <div class="teamname">Los Angeles </div>');
$('a>span:contains("TB")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/TB.svg" width="35" height="25"" class="scoreboard"> <div class="teamname">Tampa Bay </div>');
$('a>span:contains("TEN")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/TEN.svg" width="35" height="25"" class="scoreboard"><div class="teamname">Tennessee </div>');
$('a>span:contains("WAS")').replaceWith('<img src="https://static.nfl.com/static/site/img/logos/svg/teams/WAS.svg" width="35" height="25"" class="scoreboard"><div class="teamname"> Washington </div>');

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
