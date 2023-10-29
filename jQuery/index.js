$("h1").addClass("big-button");
$("h1").click(function(){
    $("h1").css("color", "yellow");
})
$("input").keydown(function(event){
    $("h1").text(event.key);
})
$("h1").before("<button>haaa</button>");
$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});