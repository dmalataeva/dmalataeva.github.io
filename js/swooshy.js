var titles = [
  "UI/UX Developer",
  "Tea Enthusiast",
  "Android Programmer",
  "Coffee-powered Creativity Machine",
  "Javascript Developer",
  "Hackathon Athlete",
  "QA Specialist",
  "Paper-cup Doodler",
  "Concept Artist",
  "Proud CE"
]; // This list is unused because it is too long and cheesy

var blinkingArrow = function(){
  $("#introArrow").delay(400).fadeTo(200,1);
  $("#introArrow").delay(400).fadeTo(200,0);
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

var goToInternships = function(){
  $('html,body').animate({scrollTop:
  $("#internships").offset().top},'slow');
};

var goToSkills = function(){
  $('html,body').animate({scrollTop:
  $("#interests").offset().top},'slow');
};

var goToProjects = function(){
  $('html,body').animate({scrollTop:
  $("#projects").offset().top},'slow');
};

var goToGrid = function(){
  $('html,body').animate({scrollTop:
  $("#grid").offset().top},'slow');
};

var loadComplete = function(){
  $('body').css("overflow","visible");
  $(".loadingScreen").fadeOut(2000);
  $('html,body').animate({scrollTop: 0},500);
  $("#introArrow").delay(500).fadeTo(200,1);
  setInterval(blinkingArrow,200);
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
	$("#internships").offset().top},1000);
});

$(window).on('scroll resize',checkView);
