$(document).ready(function(){
  var api = "https://api.github.com/zen";
  $.get(api, function(zenMsg){
    console.log(zenMsg);
    var zenMsgDiv = '<div id="zen-message">' + zenMsg + '</div>';
    $(zenMsgDiv).hide().appendTo(".zen").fadeIn("slow", function(){
      console.log("Fade in successful!");});
    });
  });
