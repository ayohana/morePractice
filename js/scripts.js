$(document).ready(function() {
  $(".clickable").click(function() {
    $("#show-walrus").toggle(function() {
      $("show-walrus").fadeIn();
    });
    $("#hide-walrus").toggle();
  });
});