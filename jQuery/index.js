$("button").click(function (e) { 
    $("h1").fadeToggle();
    console.log("Clicked");
});

$("button").select(function (e) { 
    console.log(e);
});