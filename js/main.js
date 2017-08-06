$(document).ready(function($) {

  $("#menu-btn").on("click", function(e){
    $("#sm-drop").slideToggle();
  });

  $(".option").on("click", function(e){
    $(".option-border").css("background-color", "#EBEBEB");
    $(this).find(".option-border").css("background-color", "#208E9B")
  });

});
