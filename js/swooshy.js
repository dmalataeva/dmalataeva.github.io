/*var artTitles = ["Concept Artist","Graphic Designer","Tea Enthusiast","Illustrator","Creative Consultant","Paper-cup Doodler","Sketching Athlete"];*/
var titles = ["UI/UX Developer","Tea Enthusiast","Android Programmer","Coffee-powered Creativity Machine","Javascript Developer","Hackathon Athlete","QA Specialist","Paper-cup Doodler","Concept Artist","Proud CE"];
var a=0;
var t=0;


var iterationTitlesRight = function(){
	$("#flashing").delay(250).fadeTo(500,1);
	$("#flashing").text(titles[t]);
	$("#flashing").delay(1000).fadeTo(500,0);
	t++;
	if (t===titles.length){
		t=0;
	}
};

var blinkingArrow = function(){
  $("#introArrow").fadeTo(500,1);
  $("#introArrow").fadeTo(500,0);
};
//========================FIRST==COPYLINK==LISTENER===============================
var copyEmail1 = document.querySelector('.email1');
copyEmail1.addEventListener('click', function(event) {
  // Select the email link anchor text
  var emailLink = document.querySelector('.email1');
  var range = document.createRange();
  range.selectNode(emailLink);
  window.getSelection().addRange(range);
  try {
    // Now that we've selected the anchor text, execute the copy command
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Email was ' + msg + 'ly copied to clipboard.');
  } catch(err) {
    console.log('Sorry, you will have to manually Ctrl+C that stuff.');
  }

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported
  window.getSelection().removeAllRanges();
});

//======================SECOND==COPYLINK==LISTENER===============================
var copyEmail2 = document.querySelector('.email2');
copyEmail2.addEventListener('click', function(event) {
  // Select the email link anchor text
  var emailLink = document.querySelector('.email2');
  var range = document.createRange();
  range.selectNode(emailLink);
  window.getSelection().addRange(range);
  try {
    // Now that we've selected the anchor text, execute the copy command
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Email was ' + msg + 'ly copied to clipboard.');
  } catch(err) {
    console.log('Sorry, you will have to manually Ctrl+C that stuff.');
  }

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported
  window.getSelection().removeAllRanges();
});

//==============================================================================

var goToTop = function(){
  $('html,body').animate({scrollTop: 0},'slow');
};

var goToDoings = function(){
  $('html,body').animate({scrollTop:
  $("#doings").offset().top},'slow');
};

var goToResume = function(){
  $('html,body').animate({scrollTop:
  $("#skills").offset().top+100},'slow');
};

var goToGrid = function(){
  $('html,body').animate({scrollTop:
  $("#grid").offset().top},'slow');
};

var loadComplete = function(){
  $('body').css("overflow","visible");
  $(".loadingScreen").fadeOut(500);
  $('html,body').animate({scrollTop: 0},1000);
  $("#introName").delay(500).fadeTo(500,1);
  $("#textIntro").delay(1000).fadeTo(1000,1);
  setInterval(iterationTitlesRight,2500);
  $("#introArrow").delay(4500).fadeTo(500,1);
  setInterval(blinkingArrow,1500);
};

var checkView = function(){
  var windowHeight = web_window.height();
  var windowTop = web_window.scrollTop();
  var windowBottom = (windowTop + windowHeight);

  $.each(animation_elements, function(){
    var element = $(this);
    var elementHeight = $(element).outerHeight();
    var elementTop = $(element).offset().top;
    var elementBottom = (elementTop + elementHeight);
  })
}

$(document).ready(function(){
  setTimeout(loadComplete,1000);
});

$("#introArrow").click(function() {
$('html,body').animate({scrollTop:
	$("#doings").offset().top},'slow');
});

$(window).on('scroll resize',checkView);
