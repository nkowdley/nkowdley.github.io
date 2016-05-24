/*
* Author: Neel Kowdley <nkowdley@gmail.com>
* Custom JS for neelkowdley.xyz
*/

/*Verify the Document is ready*/
$( document ).ready(function() {
  /*Functions to load the right content and colors*/
  function get_project() {
    $( "#nav-bar" ).removeClass();
    $( "#nav-bar" ).addClass("deep-purple amber darken-4");
    $( "#content" ).load("projects.html");
    $( "#footer" ).removeClass();
    $( "#footer" ).addClass("page-footer amber darken-4");
  }

  function get_work() {
    $( "#nav-bar" ).removeClass();
    $( "#nav-bar" ).addClass("deep-purple darken-3");
    $( "#content" ).load("work.html");
    $( "#footer" ).removeClass();
    $( "#footer" ).addClass("page-footer deep-purple darken-3");
  }

  function get_contact(){
    $( "#nav-bar" ).removeClass();
    $( "#nav-bar" ).addClass("green accent-4");
    $( "#content" ).load("contact.html");
    $( "#footer" ).removeClass();
    $( "#footer" ).addClass("page-footer green accent-4");
  }

  function get_home() {
    $( "#nav-bar" ).removeClass();
    $( "#nav-bar" ).addClass("light-blue lighten-1");
    $( "#content" ).load("index.html #content");
    $( "#footer" ).removeClass();
    $( "#footer" ).addClass("page-footer light-blue lighten-1");
  }
  /*Check if the url was set on page load*/
  if (window.location.href.indexOf("#work") >= 0) {
    get_work();
  }
  else if (window.location.href.indexOf("#contact") >= 0) {
    get_contact();
  }
  else if (window.location.href.indexOf("#projects") >= 0) {
    get_project();
  }
  else {
    //go to home page
    get_home();
  }
  /*if not set on page load, load the correct page based on what was clicked on the header*/
  $( ".home-button" ).click(get_home);
  $( ".work-button" ).click(get_work);
  $( ".contact-button" ).click(get_contact);
  $( ".project-button" ).click(get_project);
  /*Or set the correct page if one of the icons on the front page was clicked*/
  $( ".work-icon" ).click(get_work);
  $( ".contact-icon" ).click(get_contact);
  $( ".project-icon" ).click(get_project);
});
