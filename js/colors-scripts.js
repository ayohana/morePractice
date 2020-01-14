$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("#p1").click(function() {
    $("p").removeClass();
    $("#p1").addClass("highlight-text");
  });

  $("#p2").click(function() {
    $("p").removeClass();
    $("#p2").addClass("highlight-text");
  });

  $("#p3").click(function() {
    $("p").removeClass();
    $("#p3").addClass("highlight-text");
  });

});