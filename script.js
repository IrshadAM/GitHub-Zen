$(document).ready(function(){
  var api = "https://api.github.com/zen";
  $.get(api, function(zenMsg){
    //Logs zenMsg to console just for testing purposes.
    console.log(zenMsg);
    $(".zen").append('<div id="zen-message">' + zenMsg + '</div>');
  });
});
