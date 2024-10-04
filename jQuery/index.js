// $("h1").css("color","green");
$("button").html("<em>Hey</em>");
$("a").attr("href","https://www.yahoo.com");
$("h1").addClass("big-title margin-50");
$("h1").text("Hello World");

//event listeners
$("button").click(function(){
    $("h1").css("color","red");
})

$(document).keypress(function(event){
    $("h1").text(event.key);
})

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
})