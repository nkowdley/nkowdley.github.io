/*
* Author: Neel Kowdley <nkowdley@gmail.com>
* Custom JS for neelkowdley.xyz
*/

/*Verify the Document is ready*/
$( document ).ready(function() {
  /*Functions to load the right content and colors*/
  function get_project() {
    $( "#content" ).load("projects.html");
    return;
  }

  function get_work() {
    $( "#nav-bar" ).removeClass();
    $( "#nav-bar" ).addClass("deep-purple darken-3");
    $( "#content" ).load("work.html");
    $( "#footer" ).removeClass();
    $( "#footer" ).addClass("page-footer deep-purple darken-3");
    return;
  }

  function get_contact(){
    $( "#content" ).load("contact.html");
    return;
  }

  function get_home() {
    $( "#nav-bar" ).removeClass();
    $( "#nav-bar" ).addClass("light-blue lighten-1");
    $( "#content" ).load("index.html #content");
    $( "#footer" ).removeClass();
    $( "#footer" ).addClass("page-footer light-blue lighten-1");
    return;
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
  $( "#home-button" ).click(get_home);
  $( "#work-button" ).click(get_work);
  $( "#contact-button" ).click(get_contact);
  $( "#project-button" ).click(get_project);
  /*Or set the correct page if one of the icons on the front page was clicked*/
  $( "#home-icon" ).click(get_home);
  $( "#work-icon" ).click(get_work);
  $( "#contact-icon" ).click(get_contact);
  $( "#project-icon" ).click(get_project);
});
