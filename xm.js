
$(document).ready(function(){document.title='XM';if($('.nav.pull-right li a:contains("Register")').length>0){if(document.URL.toLowerCase().indexOf("daddyleagues.com/xm/coaches")>=0){$('.data-table1').remove();}}
$('.maincontent').addClass('clearfix');

$(function () {
  "use strict";

  var          hl,
         newsList = $('.news-headlines'),
    newsListItems = $('.news-headlines li'),
    firstNewsItem = $('.news-headlines li:nth-child(1)'),
      newsPreview = $('.news-preview'),
          elCount = $('.news-headlines').children(':not(.highlight)').index(),
         vPadding = (parseInt(firstNewsItem.css('padding-top').replace('px', ''), 10)) +
                    (parseInt(firstNewsItem.css('padding-bottom').replace('px', ''), 10)),
          vMargin = (parseInt(firstNewsItem.css('margin-top').replace('px', ''), 10)) +
                    (parseInt(firstNewsItem.css('margin-bottom').replace('px', ''), 10)),
         cPadding = (parseInt($('.news-content').css('padding-top').replace('px', ''), 10)) +
                    (parseInt($('.news-content').css('padding-bottom').replace('px', ''), 10)),
            speed = 10000, // this is the speed of the switch
          myTimer = null,
         siblings = null,
      totalHeight = null,
          indexEl = 1,
                i = null;

  // the css animation gets added dynamicallly so 
  // that the news item sizes are measured correctly
  // (i.e. not in mid-animation)
  // Also, appending the highlight item to keep HTML clean
  newsList.append('<li class="highlight nh-anim"></li>');
  hl = $('.highlight');
  newsListItems.addClass('nh-anim');

  function doEqualHeight(c) {

    if (newsPreview.height() < newsList.height()) {
      newsPreview.height(newsList.height());
    } else if ((newsList.height() < newsPreview.height()) && (newsList.height() > parseInt(newsPreview.css('min-height').replace('px', ''), 10))) {
      newsPreview.height(newsList.height());
    }

    if ($('.news-content:nth-child(' + c + ')').height() > newsPreview.height()) {
      newsPreview.height($('.news-content:nth-child(' + c + ')').height() + cPadding);
    }
  }

  function doTimedSwitch() {

    myTimer = setInterval(function () {
      if (($('.selected').prev().index() + 1) === elCount) {
        firstNewsItem.trigger('click');
      } else {
        $('.selected').next(':not(.highlight)').trigger('click');
      }
    }, speed);

  }

  $('.news-content').on('mouseover', function () {
    clearInterval(myTimer);
  });

  $('.news-content').on('mouseout', function () {
      doTimedSwitch();
  });

  function doClickItem() {

    newsListItems.on('click', function () {

      newsListItems.removeClass('selected');
      $(this).addClass('selected');

      siblings = $(this).prevAll();
      totalHeight = 0;

      // this loop calculates the height of individual elements, including margins/padding
      for (i = 0; i < siblings.length; i += 1) {
          totalHeight += $(siblings[i]).height();
          totalHeight += vPadding;
          totalHeight += vMargin;
      }

      // this moves the highlight vertically the distance calculated in the previous loop
      // and also corrects the height of the highlight to match the current selection
      hl.css({
        top: totalHeight,
        height: $(this).height() + vPadding
      });

      indexEl = $(this).index() + 1;

      $('.news-content:nth-child(' + indexEl + ')').siblings().removeClass('top-content');
      $('.news-content:nth-child(' + indexEl + ')').addClass('top-content');
      clearInterval(myTimer);
      doTimedSwitch();
      doEqualHeight(indexEl);
    });
  }

  function doWindowResize() {
    $(window).resize(function () {
      clearInterval(myTimer);
      // click is triggered to recalculate and fix the highlight position
      $('.selected').trigger('click');
    });
  }

  doClickItem();
  doWindowResize();
  $('.selected').trigger('click');
});
			     
			     
			     $('a>span:contains("ARI")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ari.png" width="20" height="15"" class="scoreboard"> ARI</span>');
$('a>span:contains("ATL")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/atl.png" width="20" height="15"" class="scoreboard"> ATL</span>');
$('a>span:contains("BAL")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/bal.png" width="20" height="15"" class="scoreboard"> BAL</span>');
$('a>span:contains("BUF")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/buf.png" width="20" height="15"" class="scoreboard"> BUF</span>');
$('a>span:contains("CAR")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/car.png" width="20" height="15"" class="scoreboard"> CAR</span>');
$('a>span:contains("CHI")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/chi.png" width="20" height="15"" class="scoreboard"> CHI</span>');
$('a>span:contains("CIN")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/cin.png" width="20" height="15"" class="scoreboard"> CIN</span>');
$('a >span:contains("CLE")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/cle.png" width="20" height="15""" class="scoreboard"> CLE</span>');
$('a>span:contains("DAL")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/dal.png" width="20" height="15"" class="scoreboard"> DAL</span>');
$('a>span:contains("DEN")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/den.png" width="20" height="15"" class="scoreboard"> DEN</span>');
$('a>span:contains("DET")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/det.png" width="20" height="15"" class="scoreboard"> DET</span>');
$('a>span:contains("GB")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/gb.png" width="20" height="15"" class="scoreboard"> GB</span>');
$('a>span:contains("HOU")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/hou.png" width="20" height="15"" class="scoreboard"> HOU</span>');
$('a>span:contains("IND")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ind.png" width="20" height="15"" class="scoreboard"> IND</span>');
$('a>span:contains("JAX")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/jac.png" width="20" height="15"" class="scoreboard"> JAC</span>');
$('a>span:contains("KC")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/kc.png" width="20" height="15"" class="scoreboard"> KC</span>');
$('a>span:contains("MIA")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/mia.png" width="20" height="15"" class="scoreboard"> MIA</span>');
$('a>span:contains("MIN")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/min.png" width="20" height="15"" class="scoreboard"> MIN</span>');
$('a>span:contains("NE")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ne.png"width="20" height="15"" class="scoreboard"> NE</span>');
$('a>span:contains("NO")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/no.png" width="20" height="15"" class="scoreboard"> NO</span>');
$('a>span:contains("NYG")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/nyg.png" width="20" height="15"" class="scoreboard"> NYG</span>');
$('a>span:contains("NYJ")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/nyj.png" width="20" height="15"" class="scoreboard"> NYJ</span>');
$('a>span:contains("OAK")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/oak.png" width="20" height="15"" class="scoreboard"> OAK</span>');
$('a>span:contains("PHI")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/phi.png" width="20" height="15"" class="scoreboard"> PHI</span>');
$('a>span:contains("PIT")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/pit.png" width="20" height="15"" class="scoreboard"> PIT</span>');
$('a>span:contains("SD")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/sd.png" width="20" height="15"" class="scoreboard"> SD</span>');
$('a>span:contains("SF")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/sf.png" width="20" height="15"" class="scoreboard"> SF</span>');
$('a>span:contains("SEA")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/sea.png" width="20" height="15"" class="scoreboard"> SEA</span>');
$('a>span:contains("LA")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/stl.png" width="20" height="15"" class="scoreboard"> LA</span>');
$('a>span:contains("TB")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/tb.png" width="20" height="15"" class="scoreboard"> TB</span>');
$('a>span:contains("TEN")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ten.png" width="20" height="15"" class="scoreboard"> TEN</span>');
$('a>span:contains("WAS")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/was.png" width="20" height="15"" class="scoreboard"> WAS</span>');




	
$('.data-table1 td:contains("Cardinals")').prepend('<img src="http://www.mghelmets.com/logos/az-cardinals.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("arz");

$('.data-table1 td:contains("Falcons")').prepend('<img src="http://www.mghelmets.com/logos/atl-falcons.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("atl");

$('.data-table1 td:contains("Ravens")').prepend('<img src="http://www.mghelmets.com/logos/blt-ravens.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("bal");

$('.data-table1 td:contains("Bills")').prepend('<img src="http://www.mghelmets.com/logos/buf-bills.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("buf");

$('.data-table1 td:contains("Panthers")').prepend('<img src="http://www.mghelmets.com/logos/ca-panthers.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("car");

$('.data-table1 td:contains("Bears")').prepend('<img src="http://www.mghelmets.com/logos/chi-bears.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("chi");

$('.data-table1 td:contains("Bengals")').prepend('<img src="http://www.mghelmets.com/logos/cin-bengals.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("cin");

$('.data-table1 td:contains("Browns")').prepend('<img src="http://www.mghelmets.com/logos/clv-browns.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("cle");

$('.data-table1 td:contains("Cowboys")').prepend('<img src="http://www.mghelmets.com/logos/dal-cowboys.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("dal");

$('.data-table1 td:contains("Broncos")').prepend('<img src="http://www.mghelmets.com/logos/den-broncos.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("den");

$('.data-table1 td:contains("Lions")').prepend('<img src="http://www.mghelmets.com/logos/det-lions.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("det");

$('.data-table1 td:contains("Packers")').prepend('<img src="http://www.mghelmets.com/logos/gb-packers.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("gb");

$('.data-table1 td:contains("Texans")').prepend('<img src="http://www.mghelmets.com/logos/hou-texans.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("hou");

$('.data-table1 td:contains("Colts")').prepend('<img src="http://www.mghelmets.com/logos/ind-colts.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("ind");

$('.data-table1 td:contains("Jaguars")').prepend('<img src="http://www.mghelmets.com/logos/jax-jaguars.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("jac");

$('.data-table1 td:contains("Chiefs")').prepend('<img src="http://www.mghelmets.com/logos/kc-chiefs.png" width="25" height="19" border="0" alt="Team logo" class="teamLogo">').addClass("kc");

$('.data-table1 td:contains("Dolphins")').prepend('<img src="http://www.mghelmets.com/logos/miami-dolphins.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("mia");

$('.data-table1 td:contains("Vikings")').prepend('<img src="http://www.mghelmets.com/logos/min-vikings.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("min");

$('.data-table1 td:contains("Patriots")').prepend('<img src="http://www.mghelmets.com/logos/ne-patriots.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("ne");

$('.data-table1 td:contains("Saints")').prepend('<img src="http://www.mghelmets.com/logos/no-saints.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("no");

$('.data-table1 td:contains("Giants")').prepend('<img src="http://www.mghelmets.com/logos/ny-giants.png" width="20" height="16" border="0" alt="Team logo" class="teamLogo">').addClass("nyg");

$('.data-table1 td:contains("Jets")').prepend('<img src="http://www.mghelmets.com/logos/ny-jets.png" width="25" height="21"border="0" alt="Team logo" class="teamLogo">').addClass("nyj");

$('.data-table1 td:contains("Raiders")').prepend('<img src="http://www.mghelmets.com/logos/oak-raiders.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("oak");

$('.data-table1 td:contains("Eagles")').prepend('<img src="http://www.mghelmets.com/logos/phi-eagles.png" width="19" height="15" border="0" alt="Team logo" class="teamLogo">').addClass("phi");


$('.data-table1 td:contains("Steelers")').prepend('<img src="http://www.mghelmets.com/logos/pit-steelers.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("pit");

$('.data-table1 td:contains("Chargers")').prepend('<img src="http://www.mghelmets.com/logos/sd-chargers.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("sd");

$('.data-table1 td:contains("49ers")').prepend('<img src="http://www.mghelmets.com/logos/sf-49ers.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("sf");

$('.data-table1 td:contains("Seahawks")').prepend('<img src="http://www.mghelmets.com/logos/sea-seahawks.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("sea");

$('.data-table1 td:contains("Rams")').prepend('<img src="http://www.mghelmets.com/logos/stl-rams.png" width="25" height="21"border="0" alt="Team logo" class="teamLogo">').addClass("stl");

$('.data-table1 td:contains("Buccaneers")').prepend('<img src="http://www.mghelmets.com/logos/tb-bucs.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("tb");

$('.data-table1 td:contains("Titans")').prepend('<img src="http://www.mghelmets.com/logos/ten-titans.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("ten");

$('.data-table1 td:contains("Redskins")').prepend('<img src="http://www.mghelmets.com/logos/wash-redskins.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("was");

$('.data-table1 td:contains("Explorers")').prepend('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/Heavy%20Hitters/explorer-logo3_zpspjzfxuvo.png" width="25" height="19" border="0" alt="Team logo" class="teamLogo">').addClass("kc");



	// Twitch.tv Include
    $('#twitchList li').each(function () {
        var twitch = $(this).data('twitch');
        var team = $(this).data('team');
        var user = $(this);
        var imgUrl = "http://i.nflcdn.com/static/site/6.2/img/logos/teams-matte-80x53/";
        $.getJSON("https://api.twitch.tv/kraken/streams/"+twitch+".json?callback=?", function(c) {
            if (c.stream == null) {
                user.remove();
                if ( ! $('#twitchList li').length ){
                   $('#twitchList').html('<li class="online">No x, games are currently being broadcasted...a link with each team logo will appear when a user is broadcasting</li>');
                }   
            } else {
                user.addClass("online");
                user.append( '<a href="http://www.twitch.tv/'+twitch+'"><img src="'+imgUrl+team+'.png"/><i>'+twitch+'</i></a>' );                
            }
        });
    });
    
    
	$('.maincontent>h1:contains("Arizona Cardinals")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/heavy%20%20hitters/ari_zpsqxdecnln.png" class="subheader" />');
	$('.maincontent>h1:contains("Atlanta Falcons")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/atl_zpsvuty4rfu.png" class="subheader" />');
	$('.maincontent>h1:contains("Baltimore Ravens")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/bal_zpsguktbprk.png" class="subheader" />');
	$('.maincontent>h1:contains("Buffalo Bills")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/buf_zpspeveubfm.png" class="subheader" />');
	$('.maincontent>h1:contains("Carolina Panthers")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/car_zpsneafitpm.png" class="subheader" />');
	$('.maincontent>h1:contains("Chicago Bears")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/chi_zpsagz07bdb.png" class="subheader" />');
	$('.maincontent>h1:contains("Cincinnati Bengals")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/cin_zpsawplo8l4.png" class="subheader" />');
	$('.maincontent>h1:contains("Cleveland Browns")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/CLE_zpstm82caoo.png" class="subheader" />');
	$('.maincontent>h1:contains("Dallas Cowboys")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/dal_zpsywupoc7m.png" class="subheader" />');
	$('.maincontent>h1:contains("Denver Broncos")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/den_zps12nju3h5.png" class="subheader" />');
	$('.maincontent>h1:contains("Detroit Lions")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/det_zpsqxlm6cs8.png" class="subheader">');
	$('.maincontent>h1:contains("Green Bay Packers")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/gb_zps7cbxjjdi.png" class="subheader" />');
	$('.maincontent>h1:contains("Houston Texans")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/hou_zpsiy2kijoi.png" class="subheader" />');
	$('.maincontent>h1:contains("Indianapolis Colts")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/ind_zpsyypaj8um.png" class="subheader" />');
	$('.maincontent>h1:contains("Jacksonville Jaguars")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/jac_zpsz5sigr4v.png" class="subheader" />');
	$('.maincontent>h1:contains("Kansas City Chiefs")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/kc_zpsnjlezaze.png" class="subheader" />');
	$('.maincontent>h1:contains("Miami Dolphins")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/mia_zpsxe7tnbbh.png" class="subheader" />');
	$('.maincontent>h1:contains("Minnesota Vikings")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/min_zpszqagugvk.png" class="subheader" />');
	$('.maincontent>h1:contains("New England Patriots")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/ne_zpsff9kqa9z.png" class="subheader" />');
	$('.maincontent>h1:contains("New Orleans Saints")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/no_zpsrmian1ra.png" class="subheader" />');
	$('.maincontent>h1:contains("New York Giants")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/nyg_zpslemqgrlt.png" class="subheader" />');
	$('.maincontent>h1:contains("New York Jets")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/nyj_zps4c5ku4zn.png" class="subheader" />');
	$('.maincontent>h1:contains("Oakland Raiders")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/oak_zpsgswdxbdx.png" class="subheader" />');
	$('.maincontent>h1:contains("Philadelphia Eagles")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/phi_zpslda1w88z.png" class="subheader" />');
	$('.maincontent>h1:contains("Pittsburgh Steelers")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/pit_zps79en13dv.png" class="subheader" />');
	$('.maincontent>h1:contains("San Diego Chargers")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/sd_zpskezey5ve.png" class="subheader" />');
	$('.maincontent>h1:contains("San Francisco 49ers")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/sf_zpstefuvye1.png" class="subheader" />');
	$('.maincontent>h1:contains("Seattle Seahawks")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/sea_zpsjtl1qfzd.png" class="subheader" />');
	$('.maincontent>h1:contains("Los Angeles Rams")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/la_zpskxn9xkh2.png" class="subheader" />');
	$('.maincontent>h1:contains("Tampa Bay Buccaneers")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/bucs_zpstauvgohg.png" class="subheader" />');
	$('.maincontent>h1:contains("Tennessee Titans")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/ten_zpsw9yhnkbv.png" class="subheader" />');
	$('.maincontent>h1:contains("Washington Redskins")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/was_zpsaf9zaual.png" class="subheader" />');
	$('.maincontent>h1:contains("Columbus Explorers")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/Heavy%20Hitters/explorers-logo6_zpswsxuqobf.png" class="subheader" />');

$('.no>a:contains("New Orleans Saints")').replaceWith('<a href="http://daddyleagues.com/xm/team/no"> N.O.</a>');
$('.nyj>a:contains("New York Jets")').replaceWith('<a href="http://daddyleagues.com/xm/team/nyj"> NYJ</a>');
$('.mia>a:contains("Miami Dolphins")').replaceWith('<a href="http://daddyleagues.com/xm/team/mia"> MIA</a>');
$('.cle>a:contains("Cleveland Browns")').replaceWith('<a href="http://daddyleagues.com/xm/team/cle"> CLE</a>');
$('.cin>a:contains("Cincinnati Bengals")').replaceWith('<a href="http://daddyleagues.com/xm/team/cin"> CIN</a>');
$('.bal>a:contains("Baltimore Ravens")').replaceWith('<a href="http://daddyleagues.com/xm/team/bal">BAL</a>');
$('.ten>a:contains("Tennessee Titans")').replaceWith('<a href="http://daddyleagues.com/xm/team/ten"> TENN</a>');
$('.ind>a:contains("Indianapolis Colts")').replaceWith('<a href="http://daddyleagues.com/xm/team/ind"> IND</a>');
$('.hou>a:contains("Houston Texans")').replaceWith('<a href="http://daddyleagues.com/xm/team/hou"> HOU</a>');
$('.oak>a:contains("Oakland Raiders")').replaceWith('<a href="http://daddyleagues.com/xm/team/oak"> OAK</a>');
$('.den>a:contains("Denver Broncos")').replaceWith('<a href="http://daddyleagues.com/xm/team/den">DEN</a>');
$('.kc>a:contains("Kansas City Chiefs")').replaceWith('<a href="http://daddyleagues.com/xm/team/kc"> KC</a>');
$('.dal>a:contains("Dallas Cowboys")').replaceWith('<a href="http://daddyleagues.com/xm/team/dal"> DAL</a>');
$('.nyg>a:contains("New York Giants")').replaceWith('<a href="http://daddyleagues.com/xm/team/nyg"> NYG</a>');
$('.det>a:contains("Detroit Lions")').replaceWith('<a href="http://daddyleagues.com/xm/team/det"> DET</a>');
$('.gb>a:contains("Green Bay Packers")').replaceWith('<a href="http://daddyleagues.com/xm/team/GB"> GB</a>');
$('.min>a:contains("Minnesota Vikings")').replaceWith('<a href="http://daddyleagues.com/xm/team/min">MIN</a>');
$('.chi>a:contains("Chicago Bears")').replaceWith('<a href="http://daddyleagues.com/xm/team/chi"> CHI</a>');
$('.car>a:contains("Carolina Panthers")').replaceWith('<a href="http://daddyleagues.com/xm/team/car"> CAR</a>');
$('.atl>a:contains("Atlanta Falcons")').replaceWith('<a href="http://daddyleagues.com/xm/team/atl"> ATL</a>');
$('.stl>a:contains("Los Angeles Rams")').replaceWith('<a href="http://daddyleagues.com/xm/team/stl"> LA</a>');
$('.sea>a:contains("Seattle Seahawks")').replaceWith('<a href="http://daddyleagues.com/xm/team/sea"> SEA</a>');
$('.arz>a:contains("Arizona Cardinals")').replaceWith('<a href="http://daddyleagues.com/xm/team/ari"> ARI</a>');
$('.buf>a:contains("Buffalo Bills")').replaceWith('<a href="http://daddyleagues.com/xm/team/buf"> BUF</a>');
$('.pit>a:contains("Pittsburgh Steelers")').replaceWith('<a href="http://daddyleagues.com/xm/team/pit"> PIT</a>');
$('.sf>a:contains("San Francisco 49ers")').replaceWith('<a href="http://daddyleagues.com/xm/team/sf"> SF</a>');
$('.was>a:contains("Washington Redskins")').replaceWith('<a href="http://daddyleagues.com/xm/team/was"> WAS</a>');
$('.sd>a:contains("San Diego Chargers")').replaceWith('<a href="http://daddyleagues.com/xm/team/sd"> SD</a>');
$('.jac>a:contains("Jacksonville Jaguars")').replaceWith('<a href="http://daddyleagues.com/xm/team/jac"> JAC</a>');
$('.ne>a:contains("New England Patriots")').replaceWith('<a href="http://daddyleagues.com/xm/team/ne"> NE</a>');
$('.tb>a:contains("Tampa Bay Buccaneers")').replaceWith('<a href="http://daddyleagues.com/xm/team/tb"> TB</a>');
$('.phi>a:contains("Philadelphia Eagles")').replaceWith('<a href="http://daddyleagues.com/xm/team/phi"> PHI</a>');



jQuery({ Counter: 0 }).animate({ Counter: $('.Single').text() }, {
  duration: 6000,
  step: function () {
    $('.Single').text(Math.ceil(this.Counter));
  }
});


$('.Count').each(function () {
  jQuery({ Counter: 0 }).animate({ Counter: $(this).text() }, {
    duration: 7000,
    step: function () {
      $(this).text(Math.ceil(this.Counter));
    }
  });
});

jQuery({ Counter: 0 }).animate({ Counter: $('.test').text() }, {
  duration: 10000,
  step: function () {
    $('.test').text(Math.ceil(this.Counter));
  }
});


$('.Count').each(function () {
  jQuery({ Counter: 0 }).animate({ Counter: $(this).text() }, {
    duration: 8000,
    step: function () {
      $(this).text(Math.ceil(this.Counter));
    }
  });
});

$('.oplayeroftheweek .playeroftheweek-name').prependTo('.oplayeroftheweek .text');
	$('.dplayeroftheweek .playeroftheweek-name').prependTo('.dplayeroftheweek .text');

	$('.playeroftheweek .avatar[style*="ari.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/ARI.svg" alt="">').addClass("ari");
	$('.playeroftheweek .avatar[style*="atl.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/ATL.svg" alt="">').addClass("atl");
	$('.playeroftheweek .avatar[style*="bal.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/BAL.svg" alt="">').addClass("bal");
	$('.playeroftheweek .avatar[style*="buf.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/BUF.svg" alt="">').addClass("buf");
	$('.playeroftheweek .avatar[style*="car.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/CAR.svg" alt="">').addClass("car");
	$('.playeroftheweek .avatar[style*="chi.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/CHI.svg" alt="">').addClass("chi");
	$('.playeroftheweek .avatar[style*="cin.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/CIN.svg" alt="">').addClass("cin");
	$('.playeroftheweek .avatar[style*="cle.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/CLE.svg" alt="">').addClass("cle");
	$('.playeroftheweek .avatar[style*="dal.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/DAL.svg" alt="">').addClass("dal");
	$('.playeroftheweek .avatar[style*="den.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/DEN.svg" alt="">').addClass("den");
	$('.playeroftheweek .avatar[style*="det.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/DET.svg" alt="">').addClass("det");
	$('.playeroftheweek .avatar[style*="gb.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/GB.svg" alt="">').addClass("gb");
	$('.playeroftheweek .avatar[style*="hou.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/HOU.svg" alt="">').addClass("hou");
	$('.playeroftheweek .avatar[style*="ind.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/IND.svg" alt="">').addClass("ind");
    $('.playeroftheweek .avatar[style*="jac.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/JAC.svg" alt="">').addClass("jac");
	$('.playeroftheweek .avatar[style*="kc.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/KC.svg" alt="">').addClass("kc");
	$('.playeroftheweek .avatar[style*="mia.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/MIA.svg" alt="">').addClass("mia");
	$('.playeroftheweek .avatar[style*="min.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/MIN.svg" alt="">').addClass("min");
	$('.playeroftheweek .avatar[style*="ne.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NE.svg" alt="">').addClass("ne");
	$('.playeroftheweek .avatar[style*="no.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NO.svg" alt="">').addClass("no");
	$('.playeroftheweek .avatar[style*="nyg.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NYG.svg" alt="">').addClass("nyg");
	$('.playeroftheweek .avatar[style*="nyj.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NYJ.svg" alt="">').addClass("nyj");
	$('.playeroftheweek .avatar[style*="oak.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/OAK.svg" alt="">').addClass("oak");
	$('.playeroftheweek .avatar[style*="phi.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/PHI.svg" alt="">').addClass("phi");
	$('.playeroftheweek .avatar[style*="pit.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/PIT.svg" alt="">').addClass("pit");
	$('.playeroftheweek .avatar[style*="sd.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/SD.svg" alt="">').addClass("sd");
	$('.playeroftheweek .avatar[style*="sf.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/SF.svg" alt="">').addClass("sf");
	$('.playeroftheweek .avatar[style*="sea.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/SEA.svg" alt="">').addClass("sea");
	$('.playeroftheweek .avatar[style*="stl.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/STL.svg" alt="">').addClass("stl");
	$('.playeroftheweek .avatar[style*="tb.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/TB.svg" alt="">').addClass("tb");
	$('.playeroftheweek .avatar[style*="ten.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/TEN.svg" alt="">').addClass("ten");
	$('.playeroftheweek .avatar[style*="was.png"]').attr( "style", "" ).prepend('<img class="teamLogo" src="http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/WAS.svg" alt="">').addClass("was");





$(document).ready(function() {
	 
	$('.acc-btn').click(function() {
	 	$('.acc-content').slideUp('normal');
      if($(this).next().is(':hidden') == true) {
		  	$(this).next().slideDown('normal');
  		 } 
	 });
	 $('.acc-content').hide();

});




(function($) {
	$.fn.dropdown = function(opts) {
		// default configuration
		var config = $.extend({}, { 
            fadeInTime: 1100,
            fadeOutTime: 1100,
            interval: 8600
        }, opts);
		// main function
		function init(obj) {
            var dNewsticker = obj;
            var dFrame = dNewsticker.find('.js-frame');
            var dItem = dFrame.find('.js-item');
            var dCurrent;
            var stop = false;

            dItem.eq(0).addClass('current');
            dItem.eq(0).show();
            
            var move = setInterval(function(){
                if(!stop){
                    dCurrent = dFrame.find('.current');
                    dCurrent.fadeOut(config.fadeOutTime, function(){
                        if(dCurrent.next().length !== 0){
                            dCurrent.removeClass('current');
                            dCurrent.next().addClass('current');
                            dCurrent.next().fadeIn(config.fadeInTime);
                        }
                        else{
                            dCurrent.removeClass('current');
                            dItem.eq(0).addClass('current');
                            dItem.eq(0).fadeIn(config.fadeInTime);
                        }
                    });
                }
            }, config.interval);
            
            dNewsticker.on('mouseover mouseout', function(e){
                if(e.type == 'mouseover'){
                    stop = true;
                }
                else{
                    stop = false;
                }
            });
        }
		// initialize every element
		this.each(function() {
			init($(this));
		});
		return this;
	};
	// start
	$(function() {
		$('.js-newsticker').dropdown();
	});
})(jQuery);


$("#slideshow > div:gt(0)").hide();setInterval(function() {
$('#slideshow > div:first')
.fadeOut(3000)
.next()
.fadeIn(2500)
.end()
.appendTo('#slideshow');
}, 19000);


function tickOut(){
        $('#ticker li:first').animate({'opacity':0}, 1000, function () {
            //$(this).hide()
            $(this).appendTo($('#ticker'))
            $('#ticker li:first').hide()
            $('#ticker li:first').fadeIn(1000)
              $('#ticker li:not(:first)').css('opacity', '3')
        });
    }

setInterval(function(){ tickOut () }, 7500);



;$('.standings .data-table1 tbody td:nth-child(5n)').remove();
$( ".tabs" ).tabs();});
